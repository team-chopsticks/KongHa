$(".ipbox").draggable({
  cursor:"move",
  stack:".post",
  opacity:0.8
});

$(".post").bind("dragstart",function(event, ui){
  $(this).addClass("color");	//bgi 체인지
});
$(".post").bind("dragstop", function(event, ui){
  $(this).removeClass("color")	//bgi 체인지
});


const randomLeft_P = ["5%", "10%", "15%", "20%", "25%", "30%"][Math.floor(Math.random() * 10)];
const randomLeft_G = ["5%", "10%", "15%", "20%", "25%", "30%"][Math.floor(Math.random() * 10)];

const randomRotate_P = Math.floor(Math.random() * 41) - 20;
const randomRotate_G = Math.floor(Math.random() * 41) - 20;

document.documentElement.style.setProperty("--random-rotate-P", randomRotate_P + "deg");
document.documentElement.style.setProperty("--random-rotate-G", randomRotate_G + "deg");

