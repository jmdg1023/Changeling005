// displaying Current dAte
var currentDate = moment().format("ddd, D MMM, YYYY");
$("#currentDate").text(currentDate);

var date = new Date();
var textArea9 = document.getElementById('9')
var textArea10 = document.getElementById('10')
var textArea11 = document.getElementById('11')
var textArea12 = document.getElementById('12')
var textArea13 = document.getElementById('13')
var textArea14 = document.getElementById('14')
var textArea15 = document.getElementById('15')
var textArea16 = document.getElementById('16')
var textArea17 = document.getElementById('17')

var currentHour= date.getHours();
console.log("present hr:", currentHour)

function colorCoding (){
    $('textarea').each(function(){
   var ColorHour=parseInt($(this).attr('id'));
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
    localStorage.setItem('text9',textArea9.value);
    localStorage.setItem('text10',textArea10.value);
    localStorage.setItem('text11',textArea11.value);
    localStorage.setItem('text12',textArea12.value);
    localStorage.setItem('text13',textArea13.value);
    localStorage.setItem('text14',textArea14.value);
    localStorage.setItem('text15',textArea15.value);
    localStorage.setItem('text16',textArea16.value);
    localStorage.setItem('text17',textArea17.value);

    });
     textArea9.value = localStorage.getItem('text9');
     textArea10.value = localStorage.getItem('text10');
     textArea11.value = localStorage.getItem('text11');
     textArea12.value = localStorage.getItem('text12');
     textArea13.value = localStorage.getItem('text13');
     textArea14.value = localStorage.getItem('text14');
     textArea15.value = localStorage.getItem('text15');
     textArea16.value = localStorage.getItem('text16');
     textArea17.value = localStorage.getItem('text17');
     
    
    
