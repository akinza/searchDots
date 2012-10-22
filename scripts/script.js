$(document).ready(function(){
  $( "#map-canvas" ).draggable({cursor:'crosshair',containment : [-550,-500,550,300]});
});
function show(el) {
  var p = $('.'+el).offset();
  var w = $('#map-canvas').offset();
  var pos;
  pos = translate(p,w);
  $('#map-canvas').offset({left:pos.left,top:pos.top});
  console.log("el",el,"p",p,"w",w,"pos",pos);
  return;
}
function translate(point,window) {
  var px = point.left, py = point.top;
  var wx = window.left, wy = window.top;
  var vx = 600, vy = 300;
  return({ left : wx-px+vx, top : wy-py+vy });
}


