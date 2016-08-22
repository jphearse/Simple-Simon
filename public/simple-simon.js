(function() {

var random = 0;
var max = 1;
var sequence = [];
var count = 0;

function randomColorPicker(){
    for(var i = 0; i < max; i++){
        random = Math.floor(Math.random() * $('.square').length);
        sequence.push(random);
        console.log(random);
    }
   
    var intervalId = setInterval(function () {
        if (count >= sequence.length){
            clearInterval(intervalId);
            count = 0;
            patternPosition = 0;
            $(".square").on("click", onClick);
            console.log('All done');
        } else {

            $('.square').eq(sequence[count]).css("opacity","1");
            $(".square").off("click", onClick);
            count++;
                var timeoutId = setTimeout(function ()
                {
                  $(".square").removeAttr('style');
                }, 500);

            } 
        }, 800);
        console.log(sequence);
    }  

    var round = 1;                      //counts rounds that the user reaches
    $("#button").click(function (){
        randomColorPicker();
        $("h2").html("Round # "+ round);
        $("#button").hide();
    });

    var patternPosition = 0;
    var userInput; //user input 
    $(".square").click(onClick);
    function onClick (e){       // allows opacity to be changed when clicked
        $(this).css("opacity", "1");
        if (this.id =="red"){
            userInput = 0;
        }
        if (this.id =="blue"){
            userInput = 1;
        }
        if (this.id =="green"){
            userInput = 2;
        }
        if (this.id =="yellow"){
            userInput = 3;
        }
        console.log(userInput);
        $(this).css("box-shadow","none");
        if (userInput == sequence[patternPosition]){        //if correct color picked in right order, moves to next color in array
            console.log("correct");
            patternPosition++;
            if( patternPosition == sequence.length){
                round++;
                
                randomColorPicker();
                $("h2").html("Round # "+ round)
           }
        } else {    
            sequence = [];      //if wrong then start game over
            console.log("Start Over");
            $("#button").show();
            $("h2").html("Start New Game");
            round = 1;
        }
        var timeoutId = setTimeout(function ()
        {
          $(".square").removeAttr('style');
        }, 100);
    };

})();