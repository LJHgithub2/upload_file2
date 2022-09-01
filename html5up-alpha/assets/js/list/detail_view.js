var info;
var img;
$(document).ready(function(){
	var user_id = unescape(location.href);
	var parameters = (user_id.slice(user_id.indexOf('?') + 1, user_id.length)).split('&');
	var place;
    for(var i=0; i<2; i++){
        if(i==0)
        user_id=parameters[i].slice(parameters[i].indexOf('=')+1,parameters[i].length);
        if(i==1)
        place=parameters[i].slice(parameters[i].indexOf('=')+1,parameters[i].length);
	}
    var address="https://www.aedo.co.kr/v1/obituary?name="+place;
	fetch(address,{
		method:"get", 
		headers: {
			"Content-Type": "application/json",
			'Accesstoken':sessionStorage.getItem('Accesstoken'),
		},
	})
	.then((res)=>res.json())
	.then((data) =>{
        for(i in data.result){
            if(data.result[i]._id==user_id){
                info=data.result[i];
                set_info();
                return;
            }
        }
	});
    
});
function set_info(){
    console.log(info);
    $(".title2").children().eq(0).text(info.deceased.name);
    $(".title2").children().eq(1).text(info.deceased.age);
    $(".title3").children().eq(0).text(info.eod);
    $(".deceased_info").children().eq(0).text(info.coffin);
    $(".deceased_info").children().eq(2).text(info.dofp);
    $(".deceased_info").children().eq(4).text(info.place);
    $(".deceased_info").children().eq(6).text(info.buried);
    $(".word_box").text(info.word);
    //for(var i=0;i<5;i++)
    $(
        '<div><span>'+info.resident.relation+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>'+info.resident.name+'</span></div>'
    ).appendTo($(".resident_contain"))
    set_image();
}

function set_image(){
    fetch("https://www.aedo.co.kr/v1/obituary/image?imgname="+info.imgName,{
		method:"get", 
		headers: {
			"Content-Type": "application/json",
			'Accesstoken':sessionStorage.getItem('Accesstoken'),
		},
	})
	.then((res)=>{
        console.log("이미지 받아오기",res.body.getReader);
        $(".img").css("background-image","url("+info.imgName+")");
        img1 = document.createElement('img');
        img1.style = 'position:fixed;top:10px;left:10px;width:100px';
        document.body.append(img1);
        // 이미지를 화면에 보여줍니다.
        img1.src = URL.createObjectURL(img);
    })
}