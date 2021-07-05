//scrolltop

$(document).ready(function(){

        $("a").click(
                    function(event){
                                    event.preventDefault();
                                    var gg = this.hash;

                                    $("html").animate( {scrollTop: $(gg).offset().top-86},1000); 
                                   // );

                     } );




});

//tooltips


    $('[data-toggle="tooltip"]').tooltip()

//Modal  se baja en index



