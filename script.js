var arr = ["1.jpg", "2.jpg", "3.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg" ,"10.jpg"],
arrimg = Math.floor(Math.random() * arr.length);
var granimInstance = new Granim({
    element: '#body',
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
  AOS.init();
  $(document).on('click', ".sea", function (){
    $(".con").html("");
    var seatv = $(".search").val();
    $.getJSON('https://www.episodate.com/api/search?q=' + seatv, function(json, textStatus) {
        if (json['total'] > 0) {
            for (var i = 0; i < json['tv_shows'].length; i++) {
            $(".con").append("<div data-aos='fade-up-right' class='res'><img class='thumb' target='_blank' src='" + json['tv_shows'][i]['image_thumbnail_path'] + "'><a href='details.php?id=" + json['tv_shows'][i]['id'] + "' class='nameres'>" + json['tv_shows'][i]['name'] + "</a></div>");
            }
        }
        else{
            $(".con").append("<div data-aos='fade-up-right' class='res'><a  class='nameres'>no result, recheck the name and try again</a></div>")
        }    

    });
});
function check(){
    var text = $(".search").val();
    if ($.trim(text) == "" || text.length == 0) {
        $(".con").html("");
    }
}
