var item_num=1;
$(".add_residency").click(function(){
    item_num+=1;
    $(".residency_item1").clone().prop('class','residency_itme'+item_num+" residency_item").appendTo('.residency');
    $(document).scrollTop($(document).height());
});
function change_img(path){ 
    var file = document.getElementById('input-file');
				//파일 경로.
    var filePath = file.value;
    console.log(filePath);
    var input = $("#input-file")[0].files[0];
    console.log(input);
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend=function(event){
        alert(event.target.result);
    }
    document.selection.createRange().text.toString();
    document.upimage.real_path.value = document.selection.createRangeCollection()[0].text.toString();
    $(".deceased_img").css("background-image",'url("'+path+'")');
}