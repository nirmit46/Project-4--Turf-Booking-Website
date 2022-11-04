
//for spinner buttons  

$(function ($) {
       $('#handleCounter1').handleCounter({
    minimum: 1,
    maximize: 100,
   
           
    })
          
        $('#handleCounter2').handleCounter({
    minimum: 1,
    maximize: 100,
             
           })
       
     
       
       });
      
   

//for datepicker

addEventListener('DOMContentLoaded', function () {
	

   
    
	pickmeup('.range', {
		mode : 'range',
        separator: '    to   ',
        position :'bottom',
//        hide_on_select : true,
        format: 'd b-y',
      
	});
//pickmeup('.range').show();


    
});


// map
function initMap() {
        var uluru = {lat:  19.735121, lng: -155.014044};  
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


















// image slider main
$(document).ready(function(){
    
 
                $('.single').slick({
                autoplay : true,
                  pauseOnFocus : false,
                    pauseOnHover : false,
                 arrows : false,
                    draggable : false,
                         });
              
                $('.left').click(function(){
                  $('.single').slick('slickPrev');
                })

                $('.right').click(function(){
                  $('.single').slick('slickNext');
                })
                
                
                
                 
                $('.room').slick({
                autoplay : false,
                  slidesToShow :3,
                  pauseOnFocus : true,
                
                 arrows : false,
                    draggable : true,
                 swipeToSlide : true,
                  });
    
                
                $('.review').slick({
                    
                autoplay : true,
                    autoplaySpeed : 6000,
                  pauseOnFocus : true,
                 pauseOnHover : false,
                 arrows : false,
                    draggable : true,
             
                    
                         });
    
    
    
    
   
        });



//scrolltotop
 
   $(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '600' , // Distance from top before showing element (px)
    topSpeed: 300 , // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 500, // Animation in speed (ms)
    animationOutSpeed: 500, // Animation out speed (ms)
  scrollText: '^',
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});


// $('morning').observe('click', function(event) {
//   var clickedCell = event.findElement('td');
//   if (clickedCell) {
//    clickedCell.setStyle({ background: 'red' });
//   }
// });
function myFunction() {
  var x = document.getElementById("booking");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction1() {
  var x = document.getElementById("booknow");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function runMe(text){
  console.log(text);
  return text;
}


function getdate(){
  var date=document.getElementById("date").val();
  alert(date);
}

function displaycard() {
  var x = document.getElementById("card1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


$(document).ready(function(){
$('.payment-new').submit(function(e){
  e.preventDefault();
  var f_name = $('.payment-new .f_name').val();
  var l_name = $('.payment-new .l_name').val();
  var mail = $('.payment-new .mail').val();
  var card1 = $('.payment-new .card1').val();
  var cvv = $('.payment-new .cvv').val()
  var regCVV = /^[0-9]{3,3}$/;
  $(".error").remove(); 
  if(card1.length < 12 ){
      $('.payment-new .card1').after('<span class="error">*Enter 12 digit card number</span>');
  }
  if(cvv.length != 3 ){
      $('.payment-new .cvv').after('<span class="error">*Enter 3 digit cvv</span>');
  }else if(cvv.length == 3 ){
      var validcvv = regCVV.test(cvv);  
      if (!validcvv) {  
          $('.payment-new .cvv').after('<span class="error">*Enter a valid CVV</span>');  
      }else{
          $('.payment-new .f_name').val('');
          $('.payment-new .l_name').val('');
          $('.payment-new .mail').val('');
          $('.payment-new .card1').val('');
          $('.payment-new .cvv').val('');
          $(".error").remove();
          prompt("Enter Otp");
          alert("Successfully Booked");
      }
    }
   
  }
);
});

function displaydate(){
  var date = new Date($('#date1').val());
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var datefull=([day,month,year].join('/'));
  localStorage.setItem("DATE",datefull);
  return datefull;
}


$(document).ready(function() {
  $("td").click(function(e){
    var celldata=$(this).text();
    localStorage.setItem("CELL",celldata);
  })
});


function submitquery(){
  alert("Query Submitted");
}


function checkdate(){
  $(".tm-resbutton").click(function(e){
    var date = new Date($('#date1').val());
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var datefull=([day,month,year].join('/'));
    if(isNaN(day)){
      alert("Select Date");
      window.location.replace("booking.html");
    }
   
  })}
