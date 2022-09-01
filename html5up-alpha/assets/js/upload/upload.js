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
	validation();
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
    previewImage.style.backgroundImage="url('../images/deceased_img.png')";
    $("#input-file").val(null);

};



(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '840px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right'
		});

	// NavPanel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);

var login_check=false;
window.onload = function () {
	console.log("dd");
	fetch("https://www.aedo.co.kr/v1/user",{
		method:"get", 
		headers: {
			"Content-Type": "application/json",
			'Accesstoken':sessionStorage.getItem('Accesstoken'),
		},
	})
	.then((res)=>res.json())
	.then((data) =>{
		if(Math.floor(data.status/100)==2){
			$("#login_btn").hide();
			$("#user_info").text(data.user.phone+"님 환영합니다!");
			login_check=true;
		}
		else{
			$("#logout_btn").hide();
		}
	});
}
$("#logout").click(function(){
    sessionStorage.setItem('Accesstoken', null);
	location.href="index.html";
});
function nav_click(href){
	if(login_check)	location.href=href;
	else alert("로그인후 이용해주세요");
}

window.onpageshow = function (event) {

    // 새로고침: window.performance.navigation.type == 1
    // 뒤로가기: window.performance.navigation.type == 2
    if (event.persisted || (window.performance && (window.performance.navigation.type == 1 || window.performance.navigation.type == 2))) {
    
		location.href = document.referrer;
    }
    
}