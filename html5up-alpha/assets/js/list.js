var list_count=0;
var query="";
window.onload = function () {
	fetch("https://www.aedo.co.kr/v1/obituary?name=",{
		method:"get", 
		headers: {
			"Content-Type": "application/json",
			'Accesstoken':sessionStorage.getItem('Accesstoken'),
		},
	})
	.then((res)=>res.json())
	.then((data) =>{
        list_lookup(data.result);
	});
}
function search(){
    $(".item").detach();
    list_count=0;
    var text=$("#search_text").val();
    if(text){
        query=text;
    }
    else{
        query="";
    }
    var address="https://www.aedo.co.kr/v1/obituary?name="+query;
    console.log(address);
	fetch(address,{
		method:"get", 
		headers: {
			"Content-Type": "application/json",
			'Accesstoken':sessionStorage.getItem('Accesstoken'),
		},
	})
	.then((res)=>res.json())
	.then((data) =>{
        list_lookup(data.result);
	});
}
function add_list(){
    var address="https://www.aedo.co.kr/v1/obituary?name="+query;
	fetch(address,{
		method:"get", 
		headers: {
			"Content-Type": "application/json",
			'Accesstoken':sessionStorage.getItem('Accesstoken'),
		},
	})
	.then((res)=>res.json())
	.then((data) =>{
        list_lookup(data.result);
	});
}
function list_lookup(array){
    var add_num=8;
    console.log(array);
    if(array.length>list_count){
        if(array.length>=list_count+add_num){      
            for(var i=list_count; i<list_count+add_num;i++){
                var clone=$(".item_sample").clone().attr("class","item");
                clone.children().children().children().first().text(array[i].place);
                clone.children().children().children().eq(2).text(array[i].deceased.name+" ("+array[i].deceased.age+")");
                $("#main_container").append(clone);
            } 
            list_count=list_count+add_num;
        }
        else{
            for(var i=list_count; i<array.length;i++){
                var clone=$(".item_sample").clone().attr("class","item");
                clone.children().children().children().first().text(array[i].place);
                clone.children().children().children().eq(2).text(array[i].deceased.name+" ("+array[i].deceased.age+")");
                $("#main_container").append(clone);
            }
            
            list_count=array.length;
        }
    }
    else{
        return;
    }
}