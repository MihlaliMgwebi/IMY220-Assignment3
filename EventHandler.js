//member object
var arrayOfObjects = [];

//member function
var getEventsBetweenDates;
var eventsBygetByMonthMonth;
var eventsByUniqueDateAndSort;
var summary;

//constructor
function EventHandler(arrayOfObjects){
    this.arrayOfObjects = arrayOfObjects;
    this.getEventsBetweenDates = function(start, end){alert("getEventsBetweenDates")}
    this.getByMonth = function(month){alert("getByMonth")}
    this.getUniqueDateAndSort = function(){alert("getUniqueDateAndSort")}
    this.getSummary = function(){alert("getSummary")}

}