//Current dAY
// var currentDay = $('#currentDay');
// currentDay.attr("class", "cover-heading text-dark font-italic font-weight-bold  ");

// $("#jumbotron").append(currentDay);

var currentDay = moment().format("ddd, D MMM, YYYY");
$("#currentDay").text(currentDay);