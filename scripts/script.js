$(function(){
  $( "#map-canvas" ).draggable({
    cursor:'crosshair',
    containment : [-550,-500,550,300]
  });
  var itemFocused = "yellow";
  //$("#"+itemFocused).addClass('focused');
  show(itemFocused);
});

function show(el) {
  var p = $('.'+el).offset();
  var w = $('#map-canvas').offset();
  var pos;
  pos = translate(p,w);
  //$('#map-canvas').offset({left:pos.left,top:pos.top});
  $('#map-canvas').stop().animate({left:pos.left,top:pos.top},1000);
  console.log("el",el,"p",p,"w",w,"pos",pos);
  return;
}

function translate(point,window) {
  var px = point.left, py = point.top;
  var wx = window.left, wy = window.top;
  var vx = 250, vy = 200;
  return({ left : wx-px+vx, top : wy-py+vy });
}


