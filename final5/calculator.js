function Info(item, cost, count){
  this.item = item;
  this.cost = cost;
  this.count = count;
  this.sum = (parseInt(cost)*parseInt(count)).toString();
}
function buildInfo(item, cost, count){
  if(item==null){
    return null;
  }
  return new Info(item, cost, count);
}

function List(){
  this.innerlist = [];
  this.formatRow = function(count){
    var table = document.getElementById('targetTable');
    for(var i=1;i<table.rows.length-count-1;i++){
      table.deleteRow(1);
    }
  }
  this.addRow = function(){
    var count2 = document.getElementById("countAll");
    var sum2 = document.getElementById("sumAll");
    var newCount = 0, newSum = 0;
    var table = document.getElementById('targetTable');
    var row = table.insertRow(1);
    row.setAttribute("bgcolor","#ddccff");
    row.setAttribute("onclick", "rowClick()");
    row.setAttribute("ondblclick", "rowdblClick()");
    row.insertCell(0).innerHTML = this.innerlist.length;
    row.insertCell(1).innerHTML = this.innerlist[this.innerlist.length-1].item;
    row.insertCell(2).innerHTML = this.innerlist[this.innerlist.length-1].cost;
    row.insertCell(3).innerHTML = this.innerlist[this.innerlist.length-1].count;
    row.insertCell(4).innerHTML = this.innerlist[this.innerlist.length-1].sum;
    table.appendChild(row);
    for(var i=0;i<this.innerlist.length;i++){
      newCount+=parseInt(this.innerlist[i].count);
      newSum+=parseInt(this.innerlist[i].sum);
    }
    //this.formatRow(this.innerlist.length);
    count2.innerHTML = newCount;
    sum2.innerHTML = newSum;
  }
}
function rowClick(){
  var datas = [prompt("수정 구매항목"), prompt("수정 단가"), prompt("수정 수량")];
}
function rowdblClick(){
  alert("Double Click!");
}
function prompts(list){

  var datas = [prompt("구매항목"), prompt("단가"), prompt("수량")];
  var temp = buildInfo(datas[0], datas[1], datas[2]);
  if(temp!=null){
    list.innerlist.push(temp);
    var table = document.getElementById('targetTable');
    for(var i=0;i<table.rows.length;i++){ // 없음 제거
      if (table.rows[i].cells[0].innerHTML=='구매항목이 없습니다'){
        table.deleteRow(i);
      }
    }
    list.addRow();
  }
}
