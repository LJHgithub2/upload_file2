function checkPhoneNum(phone){
	//if(!checkExistData(phone)) return false;
	if(phone=="") {
		console.log("전화번호를 입력해주세요");
		return true;
	};
	var phoneRegExp=/^[0-9]{11}$/;
	if(!phoneRegExp.test(phone)){
		console.log("전화번호는 '-'없이 11자리숫자여야합니다")
		return true;
	}
	return false;
}
function validation(){
	if(checkPhoneNum($("#phone").val())){
		alert("전화번호를 정확히 입력해주세요");
		return;
	}
	submit();
}
function submit(){
	var phone_num=escape($("#phone").val());
	location.href="login2.html?phone_num="+phone_num;
}
$(document.body).delegate("#submit","click",function(){
	validation();
});