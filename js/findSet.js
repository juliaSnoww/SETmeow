var count_card = 81;
function findSet(arr) {
  if (
    ((arr[0].count == arr[1].count && arr[1].count == arr[2].count) ||
      (arr[0].count != arr[1].count &&
        arr[1].count != arr[2].count &&
        arr[0].count != arr[2].count)) &&
    ((arr[0].fill == arr[1].fill && arr[1].fill == arr[2].fill) ||
      (arr[0].fill != arr[1].fill &&
        arr[1].fill != arr[2].fill &&
        arr[0].fill != arr[2].fill)) &&
    ((arr[0].form == arr[1].form && arr[1].form == arr[2].form) ||
      (arr[0].form != arr[1].form &&
        arr[1].form != arr[2].form &&
        arr[0].form != arr[2].form)) &&
    ((arr[0].color == arr[1].color && arr[1].color == arr[2].color) ||
      (arr[0].color != arr[1].color &&
        arr[1].color != arr[2].color &&
        arr[0].color != arr[2].color))
  ) {
    record++;
    count_card -= 3;
    document.getElementById("record").innerHTML ="Найдено сетов: " + record + "<br>Осталось карт: " + count_card;
    showModalWin();
    deleteSet(arr);
    document.getElementById("button_add").disabled = false;
  } else {
    showModalLose();
  }
  var tds = document.getElementsByTagName("td");
  for (var i = 0; i < tds.length; i++) {
    if (tds[i].classList.contains("active")) {
      tds[i].classList.remove("active");
    }
  }
}

function deleteEmptyRow(trList, tbl) {
  for (var row of trList) {
    var rowChilds = row.childNodes;
    var count = 0;
    for (var rowChild of rowChilds) {
      if (rowChild.card === null) {
        count++;
        if (count === 3) {
          count = 0;
          tbl.deleteRow(row.rowIndex);
        }
      } else {
        count = 0;
      }
    }
  }
}

function deleteEmptyRowFor4or5() {
  if (document.querySelectorAll("tr").length === 4) {
    tbl.deleteRow(3);
  } else tbl.deleteRow(4);
}

function deleteSet(arr) {
  var tdList = document.querySelectorAll("td");
  var trList = document.querySelectorAll("tr");
  var j = 0;
  if (trList.length === 3) {
    for (var cell of tdList) {
      for (var arrElem of arr) {
        if (cell.card === arrElem && array_cards.length != 0) {
          var tempCard = array_cards.shift();
          cell.card = tempCard;
          cell.innerHTML = tempCard;
        }
        if (cell.card === arrElem && array_cards.length == 0) {
          var tblRow = tbl.rows[j];
          tblRow.deleteCell(cell.cellIndex);
          j++;
        }
      }
    }
  } else {
    for (var cell of tdList) {
      for (var arrElem of arr) {
        if (cell.card === arrElem) {
          cell.card = null;
        }
      }
    }
    var count = 0;
    var temperyArray = [];
    for (var row of trList) {
      var rowChilds = row.childNodes;
      for (var cell of rowChilds) {
        if (
          cell.card === null &&
          ((row.rowIndex != 3 && trList.length === 4) ||
            (row.rowIndex != 4 && trList.length === 5))
        ) {
          count++;
        }
        if (
          cell.card != null &&
          ((row.rowIndex === 3 && trList.length === 4) ||
            (row.rowIndex === 4 && trList.length === 5))
        ) {
          temperyArray.push(cell.card);
        }
      }
    }
    if (trList.length === 4) {
          var i = 9;

        } else {
          var i = 12;
        }
    switch (count) {
      case 0:
        deleteEmptyRow(trList, tbl);
        break;
      default:        
        for (var cell of tdList) {
          if (
            cell.card === null &&
            ((i != 15 && trList.length === 5) ||
              (i != 12 && trList.length === 4))
          ) {

            if(tdList[i].card == null && ((i!=11 && trList.length === 4) || (i!=14 && trList.length === 5))){             
              i++;
              if(tdList[i].card == null && ((i!=11 && trList.length === 4) || (i!=14 && trList.length === 5))){
                i++;
              }
            }
            if (tdList[i].card != null){
              cell.card = tdList[i].card;
              cell.innerHTML = tdList[i].card;
              i++;
            } 
          }
        }
        deleteEmptyRowFor4or5();
        i = 0;
        break;
    }
  }
}

function showModalWin() {

var darkLayer = document.createElement('div'); 
darkLayer.id = 'shadow-win'; 
document.body.appendChild(darkLayer); 
var modalWin = document.getElementById('win'); 
modalWin.style.display = 'block'; 

 darkLayer.onclick = function () {  
darkLayer.parentNode.removeChild(darkLayer); 
modalWin.style.display = 'none'; 
 return false;
  }
  
}

function showModalLose() {

var darkLayer = document.createElement('div'); 
darkLayer.id = 'shadow-lose'; 
document.body.appendChild(darkLayer); 
var modalWin = document.getElementById('lose'); 
modalWin.style.display = 'block'; 

 darkLayer.onclick = function () {  
darkLayer.parentNode.removeChild(darkLayer); 
modalWin.style.display = 'none'; 
 return false;
  }

}