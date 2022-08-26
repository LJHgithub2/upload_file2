var IMP = window.IMP; 
IMP.init("imp00383227");
var addr= new Map([
    ["구례산림 조합 장례식장","전남 구례군 구례읍 용방로 15"],
    ["구례 병원 장례식장","전남 구례군 구례읍 동편제길 4 의료시설"],
    ["구례 효사랑 요양병원 장례식장","전남 구례군 구례읍 봉동길 31"],
    ["새미소 요양병원 장례식장","전남 구례군 구례읍 구례로 28 지리산요양병원"]
])
var postcode= new Map([
    ["구례산림 조합 장례식장","57634"],
    ["구례 병원 장례식장","57645"],
    ["구례 효사랑 요양병원 장례식장","57637"],
    ["새미소 요양병원 장례식장","57659"]
])
function test(){
    var place=$("#funeral_name").val();
    console.log($("#flower_info").children().eq(0).children().text());
    console.log($("#flower_info").children().eq(2).children().text());
    console.log($("#send_name").val());
    console.log($("#send_phone").val());
    console.log(get_addr(place));
    console.log(get_postcode(place));
}
function get_addr(place){
    return addr.get(place)+", "+$("#mortuary").val();
}
function get_postcode(place){
    return postcode.get(place);
}
function requestPay() {
    var place=$("#funeral_name").val();
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay({ // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: $("#import_flower").children().text(),
        amount: $("#import_flower").children().text(),
        buyer_email: "gildong@gmail.com",
        buyer_name: $("#send_name").val(),
        buyer_tel: $("#send_phone").val(),
        buyer_addr: get_addr(place),
        buyer_postcode: get_postcode(place)
    }, function (rsp) { // callback
        if (rsp.success) {
       
            // 결제 성공 시 로직,
         
        } else {
      
            // 결제 실패 시 로직,
          
        }
    });
  }