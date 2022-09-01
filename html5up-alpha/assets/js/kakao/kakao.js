Kakao.init('bbbb05fb430ebf6c5ae098ff9c29018c');

  // SDK 초기화 여부를 판단합니다.
  console.log(Kakao.isInitialized());

  function kakaoShare() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '애도(모바일 부고장)',
        description: '삼가 고인의 명복을 빕니다',
        imageUrl: "",
        link: {
          mobileWebUrl: '카카오공유하기 시 클릭 후 이동 경로',
          webUrl: '카카오공유하기 시 클릭 후 이동 경로',
        },
      },
      buttons: [
        {
          title: '부고장 보기',
          link: {
            mobileWebUrl: 'http://aedo.kr/list.html',
            webUrl: 'http://aedo.kr/list.html',
          },
        },
        {
          title: '화환 주문',
          link: {
            mobileWebUrl: 'http://aedo.kr/order.html',
            webUrl: 'http://aedo.kr/order.html',
          },
        }
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    })
  }
  