var address="https://www.aedo.co.kr/";
var auth_number;
var phone;
$(document).ready(function(){
	var phone_num = unescape(location.href);
	var parameters = (phone_num.slice(phone_num.indexOf('?') + 1, phone_num.length)).split('&');

    for(var i=0; i<2; i++){
		if(i==0)
        	phone=parameters[i].slice(parameters[i].indexOf('=')+1,parameters[i].length);
		if(i==1)
			auth_number=parameters[i].slice(parameters[i].indexOf('=')+1,parameters[i].length);
	}
	$("#phone").val(phone);

});
function submit_regi(){
	fetch(address+"v1/user",{
		method:"POST",
		headers: {
			"Content-Type": "application/json",
		},
		body:JSON.stringify({
			phone:phone,
			birth:$("#birth").val(),
			name:$("#name").val(),
			terms:true,
			smsnumber:auth_number,
		}),
		})
		.then((response) => response.json())
		.then((data)=>{
            if(Math.floor(data.status/100)==2){
                sessionStorage.setItem('Accesstoken', data.Accesstoken);
                location.href='landing.html';
            }
            else{
				alert("인증번호가 틀립니다");
				location.href='login.js';
			}
		});
	
}


$(".terms_bar_img").click(function(){
	$(".term_text").toggle();
	var src= $(this).attr('src') === '../image/arrow_bottom_down_icon.png' ? '../image/arrow_top_up_icon.png':'../image/arrow_bottom_down_icon.png';
	$(this).attr('src',src);
});

$("#name").change(function(){
	validation();
});
$("#birth").change(function(){
	validation();
});
$("#terms").change(function(){
	validation();
});
function validation(){
	clear_span_text();
	if(!$("#name").val()){
		$("#input_name span").text("이름을입력해주세요");
		$("#name").focus();
		$("#submit_btn").attr("disabled",true);
		return;
	}
	if(!$("#birth").val()){	
		$("#input_birth span").text("생년월일을 입력해주세요");
		$("#birth").focus();
		$("#submit_btn").attr("disabled",true);
		return;
	}
	if(!$("#terms").is(':checked')){
		$("#submit_btn").attr("disabled",true);
		return;
	}
	$("#submit_btn").attr("disabled",false);
}
function clear_span_text(){
	$("#input_name span").text("");
	$("#input_birth span").text("");
}