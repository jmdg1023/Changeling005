// displaying Current dAte
var currentDate = moment().format("ddd, D MMM, YYYY");
$("#currentDate").text(currentDate);

var systemLog;
var date = new Date();
var textArea = document.getElementById('notes')
var currentHour= date.getHours();
console.log("present hr:", currentHour)

function colorCoding (){
    $('textarea').each(function(){
   //get scheduled hour and current hour
   var ColorHour=parseInt($(this).attr('id'));
        //console.log('Scheduled hour: ', ColorHour ,"currentHour", currentHour)
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

    
$('.btn').click(function (event){

    event.preventDefault();
    localStorage.setItem('textArea',textArea.value);
    textArea = localStorage.getItem("systemLog")
    console.log(textArea, localStorage)
    
    
    });

    
    
    
