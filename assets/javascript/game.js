

// Game consistency

// 4 crystal game and random number result
// gems worth bewteen 1-12 each
// gems change their worth when game restarts
// any new crystal click adds to the previous crystal amount
// untill the score matches or goes past the total score 
// if score hits above the score you're trying to match, game starts over and increment a loss counter by 1
// if score is the same, increment game by 1 

var Wins= 0;
var Losses= 0;
var RandomResult
var previous = 0;

var Random= []; 

// check js and html are linked correctly (undefined)
console.log(Losses);



// number generated is between 19 and 120 


var resetAndStart = function () {

    $(".gem").empty(); 

RandomResult = Math.floor(Math.random() * 101) + 19; 

$("#result").html('Match this Number: ' + RandomResult);


// gems are set to value between 1 and 12

for (var i= 0; i < 9; i++) { 
    Result= Math.floor(Math.random() * 11) + 1; 

    if (Random.indexOf(Result) < 0) {
        Random.push(Result);
    }

    $("#previous").html( previous);
}  


$("#diamond1").attr("value", Random[0]); 
$("#diamond2").attr("value", Random[1]);
$("#diamond3").attr("value", Random[2]);
$("#diamond4").attr("value", Random[3]);
}

 resetAndStart ();

// on click for diamonds

$(document).on('click', ".gem", function () { 

    var num= parseInt($(this).attr('value')); 

    previous += num; 

    $("#previous").html(previous); 

    
    console.log(previous);

    if (previous > RandomResult) {

        Losses++;


        $("#Losses").html(Losses); 

        previous= 0;

        resetAndStart();
    }

    else if (previous === RandomResult) {

        Wins++;

        $("#Wins").html(Wins); 

        previous= 0; 

        resetAndStart(); 
    }

}); 

