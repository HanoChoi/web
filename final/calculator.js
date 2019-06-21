function getData(item, cost, count){
  var item1 = item;
  var cost1 = parseInt(cost);
  var count1 = parseInt(count);

  if(isNaN(cost1)||isNaN(count1)){
    alert("입력오류");
     return;
  }
  return new Info(item1, cost1, count1);

}

function Info(item, cost, count){
  this.item = item;
  this.cost = cost;
  this.count = count;
  this.sum = cost * count;
}

function MyList(){
  this.array = []
  this.add = function(data){
    if(data!=null){
      this.array.push(data);
    }
  }
  this.length = function(){
    return this.array.length;
  }
  this.printTest3 = function(){
    var date = new Date();
    var string = date.toLocaleString();

    var td = document.createElement("td");
    td.innerHTML = string;
    td.style.border = "1px solid #92acbb";
    td.style.padding = "3px";
    var tr = document.createElement("tr");
    tr.appendChild(td);

    var th = document.createElement("thead");
    var thds = [];
    var thd = document.createElement("td");
    var table = document.createElement("table");
    table.appendChild(tr);
    table.appendChild(th);

    setTable.appendChild(table);
  }
}
function manageTable(myList){
  var table = document.getElementById("targetTable");
  var tempCell = document.createElement("td");
  if(myList.length()==0){
    tempCell.innerHTML = "구매항목이 없습니다";
    tempCell.setAttribute(colspan, "5");
    tempCell.setAttribute(align, "center");
    tempCell.setAttribute(bgcolor, "#ccccff");
  }
  var tempRow = document.createElement("tr");
  tempRow.appendChild(tempCell);
  table.appendChild(tempRow);
}
function add_Row() {
  var table = document.getElementById("targetTable");
  var rowlen = table.rows.length;
  var row = table.insertRow(rowlen - 1); // HTML에서의 권장 표준 문법
  row.insertCell(0).innerHTML = "첫번째";
  row.insertCell(1).innerHTML = "두번째";
  row.insertCell(2).innerHTML = "세번째";
  row.insertCell(3).innerHTML = "네번째";
  row.insertCell(4).innerHTML = "다섯번째";
}
function delete_Row(num){
  var table = document.getElementById("targetTable");
  if(table.rows.length<0) return;
  table.deleteRow(0);
}
