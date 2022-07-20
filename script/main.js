window.onload = function () {
    fetch("https://www.aedo.co.kr/v1/user",{
      method:"get", 
      headers: {
          "Content-Type": "application/json",
          'Accesstoken':sessionStorage.getItem('Accesstoken'),
      },
    })
    .then((res) =>{
      if(Math.floor(res.status/100)==2){
        $("#login1").hide();
        $("#login2").hide();
      }
      else{
        $("#login_after1").hide();
        $("#login_after2").hide();
        $("#login_after3").hide();
      }
});
    const elm = document.querySelectorAll('.section');
    const elmCount = elm.length;
    elm.forEach(function (item, index) {
      item.addEventListener('mousewheel', function (event) {
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // wheel down : move to next section
        if (delta < 0) {
          if (elmSelector !== elmCount - 1) {
            try {
              moveTop =
                window.pageYOffset +
                elmSelector.nextElementSibling.getBoundingClientRect().top;
            } catch (e) {}
          }
        }

        // wheel up : move to previous section
        else {
          if (elmSelector !== 0) {
            try {
              moveTop =
                window.pageYOffset +
                elmSelector.previousElementSibling.getBoundingClientRect()
                  .top;
            } catch (e) {}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
      });
    });
  };
  $(".hamburger_btn").click(function(){
    $(".new-menu-wrap").css("visibility","visible");
  });
  $(".menu-close").click(function(){
    $(".new-menu-wrap").css("visibility","hidden");
  });
  $("#login_after1").click(function(){
    sessionStorage.setItem('Accesstoken', null);
    location.reload();
  });
  $("#menu-obituary_write").click(function(){
    location.href='view/obituary_write.html';
  });
  $("#menu-obituary_management").click(function(){
    location.href='view/obituary_manage.html';
  });
  $("#menu-notice").click(function(){
    location.href='view/notice.html';
  });