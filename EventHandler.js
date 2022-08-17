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
        console.log("getEventsBetweenDates:");
        var eventsBetweenDates = []; //temp empty array fof objects
        for (const object of arrayOfObjects) {
            var parsedStart = Date.parse(start);
            var parsedEnd = Date.parse(end);
           
            var parsedDateStart = Date.parse(object.dateStart);
            var parsedDateEnd = Date.parse(object.dateEnd);

            if ((parsedDateStart >= parsedStart) && (parsedDateEnd <= parsedEnd)){//within range
                eventsBetweenDates.push(object);
            }
        }
        console.log(eventsBetweenDates);
        console.log(" ");
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
newArrayOfObjects.getEventsBetweenDates("2022/02/01", "2022/02/16");

