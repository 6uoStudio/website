
$(document).ready(function(){

    $(".menu").click(function(){

        if ( $("nav").css("text-align") == "right" ){

            $("nav").css({"text-align": "center"})
                    .animate( {width: 'toggle'} );

        }else{

            $("nav").stop().animate( {width: 'toggle'}, 500, function(){
                $("nav").css({"text-align": "right"});
            });
            
        }    

    });
    
    $(window).on('load resize',function(){

		var a_w = document.body.clientWidth;

		if( a_w >= 700 ){

            $("nav").show();
            $("nav").css({"text-align": "right"});

        }else{

            $("nav").hide();

        }

	});
    
})