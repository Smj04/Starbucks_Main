'use strict';
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {        //이 함수의 이름은 변경금지
    //id가 player
    new YT.Player('player', {
    videoId: 'An6LvWQuj_8',     ///최초 재생할 유튜브 영상 ID
    playerVars:{
        autoplay:true,  //자동 재생 유무
        loop:true,      //반복 재생 유무
        playlist:'An6LvWQuj_8'     //반복재생할 영상ID
    },
    events:{
        onReady:function(event){        //영상이 준비가 되면 익명의 함수로 음소거시킨다
            event.target.mute()     //음소거
        }
    }
  });
}

