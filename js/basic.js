
$( document ).ready(function() {
  $( ".knob" ).draggable();

  $( ".knob" ).draggable({
    axis: "x",
    containment: ".wrapper",
    scroll: false,
    snap: ".wrapper",
    drag: function( event, ui ) {
      var offset = $(".knob").offset()
      var positionLeft = offset.left;
      var outerWidth = $(".wrapper").outerWidth();
      var maxOffset = outerWidth - 65;

      var percentage = positionLeft / maxOffset;
      var bgSize = map(percentage, 0, 1, 25, 50);

      if(percentage == 0){
        $(".knob").css({"background-size" : "30% auto", "background-image" : "url(../heart-broken.png)"})
      }else{
        $(".knob").css({"background-size" : bgSize + "% auto", "background-image" : "url(../heart.png)"})
      }
    }
  });


});
function map(value, f1, t1, f2, t2) {
    return f2 + (t2 - f2) * (value - f1) / (t1 - f1);
}
