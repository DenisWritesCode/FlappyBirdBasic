$(document).ready(
        function () {

            let img = $("img");

            $(".up").on("click", () => {
                
                setTimeout(() =>{
                    img.removeClass("down-go");
                    img.removeClass("up-go");
                }, 1000);
            
                img.addClass("up-go");
                

            });

            $(".down").on("click", () => {
                setTimeout(() =>{
                    img.removeClass("down-go");
                    img.removeClass("up-go");
                }, 1000);
                img.addClass("down-go");
            });
           
    }
);