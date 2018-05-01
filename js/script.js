class AboutCards {
  constructor(color = 1, form = 1, fill = 1, count = 1, picture = "") {
    this.color = color;
    this.form = form;
    this.fill = fill;
    this.count = count;
    this.picture = picture;
  }

  get fullName() {
    return `${this.color} ${this.form} ${this.fill} ${this.count} ${this.picture}`;
  }
}

AboutCards.prototype.toString = function() {
  return this.picture;
};

array_cards = [];
for (var i = 0; i < 80; i++) {
  array_cards[i] = " ";
}
z = 0;
for (var i = 1; i < 4; i++) {
  for (var j = 1; j < 4; j++) {
    for (var x = 1; x < 4; x++) {
      for (var y = 1; y < 4; y++) {
        card_name = new AboutCards(i, j, x, y);
        array_cards[z] = card_name;
        card_name = " ";
        z += 1;
      }
    }
  }
}
 
SetImage(array_cards);
shuffle(array_cards);
var record = 0;
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
tbl.setAttribute("id", "table");
tbl.setAttribute("class", "table table-bordered");
var tblBody = document.createElement("tbody");

for (var i = 0; i < 3; i++) {
  addTable();
}

tbl.appendChild(tblBody);
body.appendChild(tbl);

function addTable() {
  if (document.querySelectorAll("tr").length < 5) {
    var row = document.createElement("tr");
    for (var j = 0; j < 3; j++) {
      var cell = document.createElement("td");
      cell.setAttribute("class", "text-center");
      cell.innerHTML = array_cards[0];
      cell.onclick = selectElem.bind(this, cell);
      cell.card = array_cards[0];
      array_cards.splice(0, 1);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  if (
    document.querySelectorAll("tr").length === 5 ||
    array_cards.length === 3
  ) {
    document.getElementById("button_add").disabled = true;
  }
}

var text = document.getElementById("fields"),
    firstParagraph = text.firstElementChild,
    globalArray = [];
text.appendChild(tbl);

function selectElem(cellText) {
  if (cellText.classList.contains("active")) {
    cellText.classList.remove("active");
    globalArray.splice(globalArray.indexOf(cellText.card), 1);
  } else {
    cellText.classList.add("active");
    globalArray.push(cellText.card);
  }
  if (globalArray.length === 3) {
    findSet(globalArray);
    globalArray = [];
  }
}
