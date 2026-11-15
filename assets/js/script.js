/*
DateTime Picker Js
*/
  $(function () {
    $('#datetimepicker1').datetimepicker();
	$('#datetimepicker2').datetimepicker();
	 $('#datetimepicker3').datetimepicker();
	$('#datetimepicker4').datetimepicker();
 });
 
 
 	/* 
	Scroll to Top */
	
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#scroll-to-top').click(function () {
            $('#scroll-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#scroll-to-top').tooltip('show');
        $(document).ready(function(){
			
   	/* 
	Slider to Top */
  $(".Modern-Slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
   // fade:true,
    draggable:false,
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });
  
});

});

   	/* 
	Car Lesting Dropdwon Button Js */
var coll = document.getElementsByClassName("vehicle-info-button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

   	/* 
	Input Quntity Pluse Minse Button  */
jQuery(document).ready(function(){$(".qtyplus").click(function(e){e.preventDefault();fieldName=$(this).attr("name");var t=parseInt($("input[name="+fieldName+"]").val());if(!isNaN(t)){$("input[name="+fieldName+"]").val(t+1)}else{$("input[name="+fieldName+"]").val(1)}});$(".qtyminus").click(function(e){e.preventDefault();fieldName=$(this).attr("name");var t=parseInt($("input[name="+fieldName+"]").val());if(!isNaN(t)&&t>0){$("input[name="+fieldName+"]").val(t-1)}else{$("input[name="+fieldName+"]").val(0)}})})
 