var IMP = window.IMP; 
IMP.init("imp00383227");
const flower = document.getElementById("flower_name");
const place = document.getElementById("funeral_name");
const flower_pay = document.getElementById("flower_pay");
var Price;
Price = flower_pay.innerHTML.replace(",","")
var Price_second;
Price_second = Price.replace("원","") 

const reciver_address = document.getElementById("funeral_name");



function requestPay() {
    var merchant_uid='aedo_'+new Date().getTime();
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay({ // param
        pg: "nice",
        pay_method: "card",
        merchant_uid: merchant_uid,
        name: flower.innerHTML,
        amount: Price_second,
        buyer_email: "gildong@gmail.com",
        buyer_name: $("#recive_name").val(),
        buyer_tel: $("#recive_phone").val(),
        buyer_addr: reciver_address.innerText,
        buyer_postcode: "505050"
    },  function (rsp) { // callback
        if (rsp.success) {
            fetch("https://www.aedo.co.kr/v1/order",{
                method:"POST", 
                headers: {
                    "Content-Type": "application/json",
                    'Accesstoken':sessionStorage.getItem('Accesstoken'),
                },
                body:{
                    place:reciver_address.innerText+" "+$("#mortuary").val(),
                    item:flower.innerHTML,
                    price:Price_second,
                    receiver_name:$("#recive_name").val(),
                    receiver_number:$("#recive_phone").val(),
                    sender_name:$("#send_name").val(),
                    sender_number:$("#send_phone").val(),
                    word:$("#send_phone").val(),
                    company:$("#ribbon_text").val(),
                    created:new Date().getTime(),
                    order_complete:"",
                    merchant_uid:merchant_uid,
                }
            })
            .then((response) => response.json())
            .then((data)=>{
                if(Math.floor(data.status/100)==2){
                    var msg = '결제가 완료되었습니다.';
                    alert(msg);
                    location.href='index.html';
                }
                else{               
                    var msg = '결제를 실패하였습니다.';
                    alert(msg);
                    location.href='index.html';
                }
            });
        } else {
            var msg = '결제에 실패하였습니다.';
            msg += rsp.error_msg;
            alert(msg);
        }
    });
}

function test(){
    console.log(reciver_address.innerText+" "+$("#mortuary").val());
    console.log(flower.innerHTML);
    console.log(Price_second);
    console.log($("#recive_name").val());
    console.log($("#recive_phone").val());
    console.log($("#send_name").val());
    console.log($("#send_phone").val());
    console.log($("#mortuary").val());
    console.log($("#ribbon_text").val());
    console.log(new Date().getTime());
    console.log(merchant_uid);
    fetch("https://www.aedo.co.kr/v1/order",{
        method:"POST", 
        headers: {
            "Content-Type": "application/json",
            'Accesstoken':sessionStorage.getItem('Accesstoken'),
        },
        body:{
            place:reciver_address.innerText+" "+$("#mortuary").val(),
            item:flower.innerHTML,
            price:Price_second,
            receiver_name:$("#recive_name").val(),
            receiver_number:$("#recive_phone").val(),
            sender_name:$("#send_name").val(),
            sender_number:$("#send_phone").val(),
            word:$("#mortuary").val(),
            company:$("#ribbon_text").val(),
            created:new Date().getTime(),
            order_complete:"",
            merchant_uid:merchant_uid,
        }
    })
    .then((response) => response.json())
    .then((data)=>{
        if(Math.floor(data.status/100)==2){
            var msg = '결제가 완료되었습니다.';
            alert(msg);
            location.href='index.html';
        }
        else{               
            var msg = '결제를 실패하였습니다.';
            alert(msg);
            location.href='index.html';
        }
    });

}