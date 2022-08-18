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
        var eventsBetweenDates = arrayOfObjects.filter(function(object){
            var parsedStart = Date.parse(start);
            var parsedEnd = Date.parse(end);
        
            var parsedDateStart = Date.parse(object.dateStart);
            var parsedDateEnd = Date.parse(object.dateEnd);

            if ((parsedDateStart >= parsedStart) && (parsedDateEnd <= parsedEnd)){//within range
                return object;
            }
        });
        console.log(eventsBetweenDates);
        console.log(" ");
    }

    this.getByMonth = function(month){
        console.log("getByMonth:");
        var eventsByMonth = arrayOfObjects.filter(function(object){
            var dateStart =  new Date(object.dateStart);
            var objectMonth = dateStart.getMonth() + 1;
            if (objectMonth == month){
                return object;
            }   
        });
        console.log(eventsByMonth);
        console.log(" ");
    }

    this.getUniqueDateAndSort = function(){
        // Double check understanding on dates
        console.log("getUniqueDateAndSort:");
        const eventsByUniqueDateAndSort = arrayOfObjects.reduce((reducedArray, current) => {
        const x = reducedArray.find(item => ((item.dateStart === current.dateStart) || (item.dateEnd === current.dateEnd)) );
        if (!x) {
            return reducedArray.concat([current]);
        } else {
            return reducedArray;
        }
        }, []);
        console.log(eventsByUniqueDateAndSort);
        console.log(" ");
    }

    this.getSummary = function(optionalParameter){ //optionalParameter
        //object  //if object or if array
        //if same date
        //if diff dates
        console.log("getSummary:");
        var arrayOfStrings = []; //return value
        var eventsSummary = (optionalParameter === undefined) ? this.arrayOfObjects : optionalParameter;
       
        const result = Array.isArray(eventsSummary); // object or array?

        if(result) {//Array
            console.log(`[${eventsSummary}] is an array.`);
        }
        else {//Object
            var parsedDateStart = Date.parse(eventsSummary.dateStart);
            var parsedDateEnd = Date.parse(eventsSummary.dateEnd);
            if (parsedDateStart ==  parsedDateEnd){//if same day
                    arrayOfStrings.push("On ")
            }   
        }
        return arrayOfStrings;
    }
}

// TESTING 
// Ask about test cases
arrayOfObjects = [
    {name: 'University expo', description: 'Expo to showcase University degrees', dateStart: '2022/02/01', dateEnd: '2022/02/14'},
    {name: 'Duplicate University expo', description: 'Expo to showcase University degrees', dateStart: '2022/02/01', dateEnd: '2022/02/14'},
    {name: 'Hiking trip', description: 'Hiking trip with a bunch of University friends', dateStart: '2022/02/14', dateEnd: '2022/02/16'},
    {name: 'Music festival', description: 'Weekend long music festival with a ton of artists performing', dateStart: '2022/05/13', dateEnd: '2022/05/15'}
]
var newArrayOfObjects = new EventHandler(arrayOfObjects);
// newArrayOfObjects.getEventsBetweenDates("2022/02/01", "2022/02/16");
// newArrayOfObjects.getByMonth(05);
// newArrayOfObjects.getByiqueDateAndSort();
//console.log(newArrayOfObjects.getSummary());
console.log(newArrayOfObjects.getSummary({name: 'Pizza party', description: "Pizza party at work", dateStart: '2022/07/10', dateEnd: '2022/07/10'}));