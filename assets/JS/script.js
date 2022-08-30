// displaying Current dAte
var currentDate = moment().format("ddd, D MMM, YYYY");
$("#currentDate").text(currentDate);

var systemLog;
var date = new Date();

var currentHour= date.getHours();
console.log("present hr:", currentHour)

function colorCoding (){
    $('textarea').each(function(){
   //get scheduled hour and current hour
   var ColorHour=parseInt($(this).attr('id'));
        console.log('Scheduled hour: ', ColorHour ,"currentHour", currentHour) // shows all the ids converted to integers
    //change color depending on time
        if (ColorHour===currentHour){
        $(this).addClass('present');
        }
        else if (ColorHour>currentHour) {
       $(this).addClass('future');
        }
        else {
            $(this).addClass('past')
        }
    });
    }; 
    colorCoding()