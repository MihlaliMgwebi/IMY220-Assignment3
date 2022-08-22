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
        return eventsBetweenDates;
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
        return eventsByMonth;
    }
  
    this.getUniqueDateAndSort = function(){
        console.log("getUniqueDateAndSort:");
        var uniqueEvents = arrayOfObjects.reduce((acc, current) => {
            const x = acc.find(element => ( (element.dateStart === current.dateStart) && (element.dateEnd === current.dateEnd)));
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);
       return uniqueEvents;
    }
    
    
    this.getSummary = function(optionalParameter){ //optionalParameter
        console.log("getSummary:");
        var arrayOfStrings = []; //return value
        var eventsSummary = (optionalParameter === undefined) ? this.arrayOfObjects : optionalParameter;
        var result = Array.isArray(eventsSummary); // object or array?

        if(result) {//Array of Objects
            var arrayOfStrings = eventsSummary.filter(function(object){//filter through each object
                var parsedDateStart = Date.parse(object.dateStart);
                var parsedDateEnd = Date.parse(object.dateEnd);
    
                if (parsedDateEnd == parsedDateStart){ //if same day, On [dateStart]: [name] ( [description] )
                    return ("On " + eventsSummary.dateStart + ": " + eventsSummary.name + " ( " + eventsSummary.description + " )");
                } else { //range of days, From [dateStart] to [dateEnd]: [name] ( [description] )
                    return ("From " + eventsSummary.dateStart + " to " + eventsSummary.dateEnd + ": " + eventsSummary.name + " ( " + eventsSummary.description + " )");
                }
            });
        }
        else {//Single Object 
            var parsedDateStart = Date.parse(eventsSummary.dateStart);
            var parsedDateEnd = Date.parse(eventsSummary.dateEnd);
            if (parsedDateStart ==  parsedDateEnd){//if same day, On [dateStart]: [name] ( [description] )
                    arrayOfStrings.push("On " + eventsSummary.dateStart + ": " + eventsSummary.name + " ( " + eventsSummary.description + " )");
            } else { //range of days, From [dateStart] to [dateEnd]: [name] ( [description] )
                return ("From " + eventsSummary.dateStart + " to " + eventsSummary.dateEnd + ": " + eventsSummary.name + " ( " + eventsSummary.description + " )");
            }
        }
        return arrayOfStrings;
    }
}

// HANDLER 
arrayOfObjects = [
    {name: 'University expo', description: 'Expo to showcase University degrees', dateStart: '2022/02/01', dateEnd: '2022/02/14'},
    {name: 'Music festival', description: 'Weekend long music festival with a ton of artists performing', dateStart: '2022/05/13', dateEnd: '2022/05/15'},
    {name: 'Market', description: "Farmer's market day long event", dateStart: '2022/06/12', dateEnd: '2022/06/12'},
    {name: 'Science Expo', description: 'Science expo with sciency stuff', dateStart: '2022/06/12', dateEnd: '2022/06/21'},
    {name: 'Hiking trip', description: 'Hiking trip with a bunch of University friends', dateStart: '2022/02/14', dateEnd: '2022/02/16'},
    {name: 'Park Picnic', description: 'Picnic event in the park', dateStart: '2022/06/12', dateEnd: '2022/06/12'},
    {name: 'Market', description: 'Picnic event in the park', dateStart: '2022/06/12', dateEnd: '2022/06/12'}
]

var newArrayOfObjects = new EventHandler(arrayOfObjects);

// newArrayOfObjects.getEventsBetweenDates("2022/02/01", "2022/02/16");
// newArrayOfObjects.getByMonth(05);

// console.log(newArrayOfObjects.getUniqueDateAndSort());

// console.log(newArrayOfObjects.getSummary());
// console.log(newArrayOfObjects.getSummary({name: 'Market', description: "Farmer's market day long event", dateStart: '2022/06/12', dateEnd: '2022/06/12'}));
// console.log(newArrayOfObjects.getSummary({name: 'University expo', description: 'Expo to showcase University degrees', dateStart: '2022/02/01', dateEnd: '2022/02/14'}));
// console.log(newArrayOfObjects.getSummary({name: 'Pizza party', description: "Pizza party at work", dateStart: '2022/07/10', dateEnd: '2022/07/10'}));

//console.log(Object.getPrototypeOf(newArrayOfObjects)); // this is null. The prototype property only exists on functions, and newArrayOfObjects is not a function. It's an object. However, a constructor is a function. Constructor is the main function that takes the parameters necessary to build new instances of your object.  //https://stackoverflow.com/questions/14545210/why-prototype-is-undefined


//BROKEN
Object.setPrototypeOf(
        newArrayOfObjects.getByMonth(06).prototype,
        newArrayOfObjects.getSummary().prototype,
    );
//newArrayOfObjects.prototype.getEventsBetweenDates = (start,end) => getEventsBetweenDates(start,end);
// newArrayOfObjects.prototype = new EventHandler(arrayOfObjects);
// newArrayOfObjects.prototype.getByMonth = function(month) {
//     return getByMonth(month);
// }
// newArrayOfObjects.prototype.getSummary = function(optionalParameter) {
//     return getSummary(optionalParameter);
// }

// Object.setPrototypeOf(
//     newArrayOfObjects.getByMonth(06).prototype, 
//     newArrayOfObjects.getSummary(optionalParameter).prototype
// );
console.log(newArrayOfObjects.getByMonth(06).getSummary());

// w3schools array protoptype
// JS best practices