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

    this.getEventsBetweenDates = function(start, end){
        alert("getEventsBetweenDates");
        var eventsBetweenDates = []; //temp empty array fof objects
        for (const object of arrayOfObjects) {
            console.log(start);
            var parsedStart = Date.parse(start);
            var parsedEnd = Date.parse(end);
           
            var parsedDateStart = object.dateStart;
            var parsedDateEnd = object.dateEnd;

            console.log(parsedDateStart + ">" + parsedStart);
            console.log(parsedDateEnd + "," + parsedEnd);
            if ((parsedDateStart > parsedStart) && (parsedDateEnd < parsedEnd)){//within range
                console.log(object.name);
                eventsBetweenDates.push(object);
            }
        }
    }

    this.getByMonth = function(month){
        alert("getByMonth");
    }
    this.getUniqueDateAndSort = function(){
        alert("getUniqueDateAndSort");
    }
    this.getSummary = function(){
        alert("getSummary");
    }
}

// TESTING 
arrayOfObjects = [
    {name: 'University expo', description: 'Expo to showcase University degrees', dateStart: '2022/02/01', dateEnd: '2022/02/14'},
    {name: 'Hiking trip', description: 'Hiking trip with a bunch of University friends', dateStart: '2022/02/14', dateEnd: '2022/02/16'}
]
var newArrayOfObjects = new EventHandler(arrayOfObjects);
newArrayOfObjects.getEventsBetweenDates("W","W");
newArrayOfObjects.getEventsBetweenDates("2022/02/01", "2022/02/16");

