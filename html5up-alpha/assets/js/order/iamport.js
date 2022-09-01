var IMP = window.IMP; 
IMP.init("imp00383227");
const flower = document.getElementById("flower_name");
const flower_pay = document.getElementById("flower_pay");
var Price;
Price = flower_pay.innerHTML.replace(",","")
var Price_second;
Price_second = Price.replace("원","") 

const reciver_address = document.getElementById("funeral_name");



function requestPay() {
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay({ // param
        pg: "nice",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: flower.innerHTML,
        amount: Price_second,
        buyer_email: "gildong@gmail.com",
        buyer_name: $("#recive_name").val(),
        buyer_tel: $("#recive_phone").val(),
        buyer_addr: reciver_address.innerText,
        buyer_postcode: "505050"
    }, function (rsp) { // callback
        if (rsp.success) {
       
            // 결제 성공 시 로직,
         
        } else {
      
            // 결제 실패 시 로직,
          
        }
    });
  }

  function test(){
    console.log($("#recive_name").val());
    console.log($("#recive_phone").val());
    console.log(reciver_address.innerHTML);
}

