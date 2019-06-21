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
    alert("14");
    var table = document.getElementById('targetTable');
    alert("15");
    for(var i=1;i<table.rows.length-count-1;i++){
      alert("16");
      table.deleteRow(1);
      alert("17");
    }
    alert("18");
    //alert("format : 지우는 갯수 : "+(table.rows.length-count-2));
  }
  this.addRow = function(){
    alert("9");
    var count2 = document.getElementById("countAll");
    var sum2 = document.getElementById("sumAll");
    var newCount = 0, newSum = 0;
    var table = document.getElementById('targetTable');

    alert("10");
    alert("추가후 this.innerlist.length : "+this.innerlist.length);
    for(var i=0;i<this.innerlist.length;i++){
      alert("11");
      var rowlen = table.rows.length;
      var row = table.insertRow(1);
      row.setAttribute("bgcolor","#ddccff");
      row.insertCell(0).innerHTML = i+1;
      row.insertCell(1).innerHTML = this.innerlist[i].item;
      row.insertCell(2).innerHTML = this.innerlist[i].cost;
      row.insertCell(3).innerHTML = this.innerlist[i].count;
      newCount+=parseInt(this.innerlist[i].count);
      row.insertCell(4).innerHTML = this.innerlist[i].sum;
      newSum+=parseInt(this.innerlist[i].sum);
      table.appendChild(row);
      alert("append됨");
      alert("12");
    }
    alert("13");
    //this.formatRow(this.innerlist.length);
    alert("19");
    count2.innerHTML = newCount;
    sum2.innerHTML = newSum;
    alert("20");
  }
}

function prompts(list){

  var datas = [prompt("구매항목"), prompt("단가"), prompt("수량")];
  var temp = buildInfo(datas[0], datas[1], datas[2]);
  alert("1");
  if(temp!=null){
    alert("2");
    list.innerlist.push(temp);
    alert("3");
    var table = document.getElementById('targetTable');
    alert("4");
    for(var i=0;i<table.rows.length;i++){ // 없음 제거
      alert("5");
      if (table.rows[i].cells[0].innerHTML=='구매항목이 없습니다'){
        alert("6");
        table.deleteRow(i);
        alert("7");
      }
    }
    alert("8");
    list.addRow();
  }
}
