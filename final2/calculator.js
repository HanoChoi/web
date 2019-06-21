function Info(item, cost, count){
  this.item = item;
  this.cost = cost;
  this.count = count;
  this.sum = parseInt(cost) * parseInt(count);
}

function MyList(){
  this.array = []
  this.add = function(data){
    this.array.push(data);
  }
  this.delete = function(num){
    num = parseInt(num);
    if(isNaN(num)) return;
    this.array.splice(num, 1);
  }
  this.length = function(){
    return this.array.length;
  }
  this.printLength = function(){
    document.write(this.length());
  }
}
function PromptOn(){
  var getdata = [prompt("구매항목"), prompt("단가"), prompt("수량")];
  if(isNaN(parseInt(getdata[1]))||isNaN(parseInt(getdata[2]))){
    alert("입력오류");
    return;
  }
  var temp = new Info(getdata[0], getdata[1], getdata[2]);
  alert(getdata[0]+" "+parseInt(getdata[1])+" "+parseInt(getdata[2]));

}
function refresh(){

}
function add_RowNone() {
  var table = document.getElementById("targetTable");
  var rowlen = table.rows.length;
  var row = table.insertRow(rowlen - 1); // HTML에서의 권장 표준 문법
  var cell = row.insertCell(0);
  cell.innerHTML = "구매항목이 없습니다";
  cell.setAttribute("colspan",5);
  cell.setAttribute("align", "center");
  cell.setAttribute("bgcolor", "#ccccff");
  cell.setAttribute("class", "none");
}
function del_RowNone(){
  var table = document.getElementById("targetTable");
  for(var i = 1, row; row = table.rows[i]; i++){
    table.deleteRow(i);
  }
}
function add_Row() {
  var table = document.getElementById("targetTable");
  var rowlen = table.rows.length;
  var row = table.insertRow(rowlen - 1); // HTML에서의 권장 표준 문법
  row.insertCell(0).innerHTML = "";
  row.insertCell(1).innerHTML = "";
  row.insertCell(2).innerHTML = " - ";
  row.insertCell(3).innerHTML = "";
  row.insertCell(4).innerHTML = "";
}
function delete_Row(num){
  num = parseInt(num);
  if(isNan(num)){
    return;
  }
  var table = document.getElementById("targetTable");
  var rowlen = table.rows.length;
  var row = table.deleteRow(num+1);
}
