//global
// var usename = "Nguyen";

function thutu() {
  //Đầu vào
  var num1 = document.getElementById("number1").value * 1;
  var num2 = document.getElementById("number2").value * 1;
  var num3 = document.getElementById("number3").value * 1;

  //Xử lý
  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      var result =
        "<p> Thứ tự 3 số là: " + num1 + ">" + num2 + ">" + num3 + "</p>";
    } else {
      var result =
        "<p> Thứ tự 3 số là: " + num1 + ">" + num3 + "> " + num2 + "</p>";
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      var result =
        "<p> Thứ tự 3 số là: " + num2 + ">" + num1 + ">" + num3 + "</p>";
    } else {
      var result =
        "<p> Thứ tự 3 số là: " + num2 + ">" + num3 + ">" + num1 + "</p>";
    }
  } else if (num3 > num1 && num3 > 1) {
    if (num1 > num2) {
      var result =
        "<p> Thứ tự 3 số là: " + num3 + ">" + num1 + ">" + num2 + "</p>";
    } else {
      var result =
        "<p> Thứ tự 3 số là: " + num3 + ">" + num2 + ">" + num1 + "</p>";
    }
  } else {
    var result = "<p> Nhập lại 3 số vào" + "</p>";
  }

  //Đầu ra
  document.getElementById("Thutu").innerHTML = result;
}
function loichao() 
{
    //Dau vao
    var person = document.getElementById("input").value;

    //Xu ly

    switch (person) 
    {
      case "B": {
        var family = " Xin chào Ba";
        break;
      }
      case "M": {
        var family = " Xin chào Mẹ";
        break;
      }
      case "AT": {
        var family = " Xin chào anh trai";
        break;
      }
      case "EG": {
        var family = " Xin chào em gái";
        break;
      }
  }
  //Dau ra
  document.getElementById("Loichao").innerHTML = family;
}


function chanle(){
  //đầu vào 
  var num4= document.getElementById("number4").value * 1;
  var num5= document.getElementById("number5").value * 1;
  var num6= document.getElementById("number6").value * 1;
  //xử lý
  if(num4 % 2==0)
  {
    var num7 = "<p> "+ num4 + " là số chẵn" + "</p>";
  }
  else{
    var num7 = "<p> " + num4 + " là số lẻ" + "</p>";
  }
  if(num5 % 2==0)
  {
    var num8 = "<p> "+ num5 + " là số chẵn" + "</p>";
  }
  else{
    var num8 = "<p> " + num5 + " là số lẻ" + "</p>";
  }
  if(num6 % 2==0)
  {
    var num9 = "<p> "+ num6 + " là số chẵn" + "</p>";
  }
  else{
    var num9 = "<p> " + num6 + " là số lẻ" + "</p>";
  }
  //đầu ra
  document.getElementById("oddEven").innerHTML = num7 + num8 + num9;
}

function tamgiac(){
  // đầu vào
  var canh1= document.getElementById("canh1").value * 1;
  var canh2= document.getElementById("canh2").value * 1;
  var canh3= document.getElementById("canh3").value * 1;
 // xử lý
  if( canh1 == canh2 && canh2 ==canh3){
  var tamgiac = "<p> Tam giac đều" + "</p>";
 }
   else if(canh1 == canh2 || canh1== canh3 || canh2 == canh3 ){
    var tamgiac ="<p> Tam giác cân"+ "</p>";
   }
   
   else if( canh1^2 == canh2^2 + canh3^2){
    var tamgiac = "<p> Tam giác vuông" + "</p>";
   }
   else if( canh2^2 == canh1^2 + canh3^2){
    var tamgiac = "<p> Tam giác vuông" + "</p>";
   }
   else if( canh3^2 == canh1^2 + canh2^2){
    var tamgiac = "<p> Tam giác vuông" + "</p>";
   }
   else{
    var tamgiac ="<p> Một loại tam giác nào đó"+ " </p>"
   }
   // đầu ra
   document.getElementById("tamgiac").innerHTML = tamgiac;
}
