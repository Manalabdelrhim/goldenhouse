$(document).ready(function(){
    $(".menu").click(function(){
                       $('.side-menu').toggleClass('open');
    });
    $('.fa-times').click(function(){
        $('.side-menu').removeClass('open');
    })
    
    $(window).scroll(function(){
        if($(this).scrollTop()>= 30){
           $('.nav-left').hide(500);
           $('.nav-top').show(500);
        }
        else{
           $('.nav-left').show(500);
           $('.nav-top').hide(500);
        }
        });
    
    /*counter up*/
    
    var counters=document.querySelectorAll('.about .num');
    var delay=200;
    counters.forEach(counter =>{
        const updatecount =() =>{
            var target =counter.getAttribute('data-target')
            var count =+counter.innerText;
            var speed =target/delay;
            if(count < target){
                 counter.innerText =Math.floor(count + speed);/*math.floor to prevent any ارقام عشريه*/
            setTimeout(updatecount,1);
            }
            else{
               counter.innerText =target; 
            }
           
            
        }
        updatecount();
    })
         /*count dwen*/
    
    var content = $('.countdown').html();
    $('.countdown').countdown('2021/01/01', function(event) {
    $(this).html(event.strftime(content));
  });
    
    /*swich links*/
    var link = $('link[data-color="swich"]');
    $('.fa-adjust').click(function(){
        if(link.attr('href') == 'web.css'){
            
            link.attr('href','light.css');
        }
        else{
            link.attr('href','web.css');
        }
    })
                  });

                       