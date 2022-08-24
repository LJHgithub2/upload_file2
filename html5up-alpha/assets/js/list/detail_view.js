var info;
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
    
}