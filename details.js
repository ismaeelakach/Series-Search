
var url = new URLSearchParams(window.location.search),
    id  = url.get("id");
    $.getJSON('https://www.episodate.com/api/show-details?q=' + id, function(json, textStatus) {
  if (!isNaN(json['tvShow']['rating']) == true && json['tvShow']['rating'] % 1 == 0) {
      var rating = json['tvShow']['rating'];
  }
  if (json['tvShow']['rating'] % 1 != 0) {
    var rating = Number.parseFloat(json['tvShow']['rating']).toFixed(1);
  }
var maxseasons = json['tvShow']['episodes'][json['tvShow']['episodes'].length - 1]['season'],
    description = json['tvShow']['description'].split(" ", 50);


      $(".tlt").html(json['tvShow']['name']);
      $(".description").html(description.toString().replace(",", " ") + " etc... <br> click to see full description");
      $(".description").attr('href', json['tvShow']['description_source']);
      $(".poster").attr("src", json['tvShow']['image_path']);
      $("#videoPlayer").attr('data-videoid', json['tvShow']['youtube_link']);
      $(".dets").html("<div class='t1'><div class='det'><div class='icon'><i class='fas fa-calendar-plus'></i></div><a class='maindet'>start</a><br><a class='submaindet'>" + json['tvShow']['start_date'] + "</a></div><div class='det'><div class='icon'><i class='fas fa-flag'></i></div><a class='maindet'>Country</a><br><a class='submaindet'>" + json['tvShow']['country'] + "<img src='https://www.countryflags.io/" + json['tvShow']['country'] + "/shiny/64.png' class='sflag'></a></div><div class='det'><div class='icon'><i class='far fa-star'></i></div><a class='maindet'>rating</a><br><a class='submaindet'>" + rating + "/10 </a></div></div><div class='t1'><div class='det'><div class='icon'><i class='fas fa-tv'></i></div><a class='maindet'>genes</a><br><a class='submaindet'>" + json['tvShow']['genres'].join(" ") + " .</a></div><div class='det'><div class='icon'><i class='fa fa-users' aria-hidden='true'></i></div><a class='maindet'>rating count</a><br><a class='submaindet'>" + json['tvShow']['rating_count'] + " User</a></div><div class='det'><div class='icon'><i class='fa fa-play-circle' aria-hidden='true'></i></div><a class='maindet'>Youtube</a><br><a class='youtube_link' target='_BLANK' href='https://www.youtube.com/watch?v=" + json['tvShow']['youtube_link'] + "'>Link <i class='fas fa-external-link-alt'></i></a></div></div><div class='t1'><div class='det'><div class='icon'><i class='fas fa-network-wired'></i></div><a class='maindet'>network</a><br><a class='submaindet'>" + json['tvShow']['network'] + "</a></div><div class='det'><div class='icon'><i class='fas fa-clock'></i></div><a class='maindet'>runtime</a><br><a class='submaindet'>" + json['tvShow']['runtime'] + " Minute</a></div><div class='det'><div class='icon'><i class='fas fa-video'></i></div><a class='maindet'>number of episodes</a><br><a class='submaindet'>" + (json['tvShow']['episodes'].length - 1) + " Episodes</a></div></div>");
      for (var s = 1; s <= maxseasons; s++) {
        $(".episodes").append("<div class='hlist' id='hlist" + s + "'><div class='season'>Season " + s + "</div></div>");
        for (var e = 1; e <= json['tvShow']['episodes'].length - 1; e++) {
          if (json['tvShow']['episodes'][e]['season'] == s) {
             $("#hlist" + s).append("<div href='https://www.google.com/search?q=" + json['tvShow']['name'] + " " + json['tvShow']['episodes'][e]['name'] + "' class='epcon' id='epcon" + e + "'><img class='rpimg' id='rpimg' src='" + json['tvShow']['image_thumbnail_path'] + "'><a>" + json['tvShow']['episodes'][e]['name'] + "</a><span>" + json['tvShow']['episodes'][e]['air_date'] + "</span></div>");
          }  
        }
      }
  });
$(document).on('click', '.epcon, .description', function(event) {
  window.open($(this).attr('href'), "_blank");
});
jQuery(function () {

// Youtube player
window.videoPlayer;

window.onYouTubeIframeAPIReady = function () {
 var videoPlayerId = $('#videoPlayer').attr('data-videoid');
 window.videoPlayer = new YT.Player('videoPlayer', {
  height: '1080',
  width: '1920',
  videoId: videoPlayerId,
  playerVars: {
   'controls': 0,
   'autoplay': 1,
   'mute': 0,
   'loop': 1,
   'showinfo': 0,
   'modestbranding': 0
  },
  events: {
   'onReady': onVideoPlayerReady,
   'onStateChange': onVideoPlayerReady
  }
 });
}

function onVideoPlayerReady(event) {
 videoPlayer.playVideo();
}
});
$('.tlt').textillate({selector: '.tlt',

  // enable looping
  loop: true,

  // sets the minimum display time for each text before it is replaced
  minDisplayTime: 2000,

  // sets the initial delay before starting the animation
  // (note that depending on the in effect you may need to manually apply
  // visibility: hidden to the element before running this plugin)
  initialDelay: 0,

  // set whether or not to automatically start animating
  autoStart: true,

  // custom set of 'in' effects. This effects whether or not the
  // character is shown/hidden before or after an animation
  inEffects: [],

  // custom set of 'out' effects
  outEffects: [ 'rotateOutUpRight' ],

  // in animation settings
  in: {
    // set the effect name
    effect: 'fadeInRight',

    // set the delay factor applied to each consecutive character
    delayScale: 1.5,

    // set the delay between each character
    delay: 50,

    // set to true to animate all the characters at the same time
    sync: false,

    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: true,

    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,

    // callback that executes once the animation has finished
    callback: function () {}
  },

  // out animation settings.
  out: {
    effect: 'rotateOutUpRight',
    delayScale: 1.5,
    delay: 50,
    sync: true,
    shuffle: true,
    reverse: false,
    callback: function () {}
  },

  // callback that executes once textillate has finished
  callback: function () {},

  // set the type of token to animate (available types: 'char' and 'word')
  type: 'char'});
AOS.init();
$(document).on('click', '.scroll', function(event) {
  $("body").animate({
    scrollTop :$(".description").offset().top - 100
  }, 1000);
});
var arr = ["1.jpg", "2.jpg", "3.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg" ,"10.jpg"],
arrimg = Math.floor(Math.random() * arr.length);
var granimInstance = new Granim({
    element: '#cons',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: arr[arrimg],
        blendingMode: 'multiply',
        stretchMode :['stretch','stretch']
    },
    states : {
        "default-state": {
            gradients: [
                ['#B3FFAB', '#12FFF7'],
                ['#ADD100', '#7B920A'],
                ['#1A2980', '#26D0CE']
            ],
            transitionSpeed: 10000
        },
        "violet-state": {
            gradients: [
                ['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9']
            ],
            transitionSpeed: 2000
        },
        "orange-state": {
            gradients: [ ['#FF4E50', '#F9D423'] ],
            loop: false
        }
    }
});
