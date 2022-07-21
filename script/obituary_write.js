var item_num=1;
$(".add_residency").click(function(){
    item_num+=1;
    $(".residency_item1").clone().prop('class','residency_itme'+item_num+" residency_item").appendTo('.residency');
    $(document).scrollTop($(document).height());
});
window.onload = function() {
    const inputImage = document.getElementById("input-file");
    inputImage.addEventListener("change", readImage, false);
};
$("#funeral_name_select").change(function(){
    $("#funeral_name").val($(this).val());
})
function readImage(evt){ 
    if(evt.target.files && evt.target.files[0]) {

        // FileReader 인스턴스 생성
        const reader = new FileReader();

        // 이미지가 로드가 된 경우
        reader.onload = function (e) {
            const previewImage = document.getElementById("preview-image");
            previewImage.style.backgroundImage="url('"+e.target.result+"')";

        }
        reader.readAsDataURL(evt.target.files[0]);
    }
}
function deleteImage(){
    // 인풋 태그 src 값이 들어있는지 확인
    const previewImage = document.getElementById("preview-image");
    previewImage.style.backgroundImage="url('../image/deceased_img.png')";
    $("#input-file").val(null);

};