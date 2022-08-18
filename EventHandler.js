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

    // this.getUniqueDateAndSort = function(){
    //     // Double check understanding 
    //     console.log("getUniqueDateAndSort:");
    //     var eventsByUniqueDateAndSort = [];
    //     // eventsByUniqueDateAndSort = arrayOfObjects.reduce((previousValue, currentValue) => {
    //     // //     console.log(reducedArray)
    //     // //     var x = reducedArray.find(item => ((item.dateStart === current.dateStart) || (item.dateEnd === current.dateEnd)));
    //     // //     if (!x) {
    //     // //         reducedArray.concat([current]);
    //     // //         return ;
    //     // //     } else {
    //     // //         return reducedArray;
    //     //     // }
    //     // }, []);

    //     // const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
    //     // const countedNames = names.reduce((allNames, name) => {
    //     //     console.log("names: " + allNames[name]);
    //     //     allNames[name] ??= 0;
    //     //     // //allNames[name]++;
    //     //     // Remember to return the object, or the next iteration
    //     //     // will receive undefined
    //     //     return allNames;
    //     // }, {});
    //     // countedNames is:
    //     // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

    //     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#remove_duplicate_items_in_an_array
    //     const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
    //     // const myArrayWithNoDuplicates = myArray.reduce((previousValue, currentValue) => {
    //     //     if (previousValue.indexOf(currentValue) === -1) {
    //     //         previousValue.push(currentValue);
    //     //     }
    //     //     return previousValue;
    //     // }, []);
    //     // console.log(myArrayWithNoDuplicates);

    //     eventsByUniqueDateAndSort.sort();
    //     eventsByUniqueDateAndSort.reverse();
    //     return eventsByUniqueDateAndSort;
    // }
  
    this.getUniqueDateAndSort = function(){
        var answer = arrayOfObjects.reduce((previousEvent,nextEvent) => {
            if (typeof previousEvent !== 'object'){
                //console.log(typeof previousEvent); 
                if (arrayOfObjects.find(element => element.dateStart == nextEvent.dateStart && element.dateEnd == nextEvent.dateEnd && element.name != nextEvent.name)){
                        return previousEvent + nextEvent;
                }
            }
        });
        return answer;
    }
    
    this.getSummary = function(optionalParameter){ //optionalParameter
        //contants? Concatenating return values? Cleaner code.
        //How to check if array of strings
        //object  //if object or if array
        // functions to avoid redundancy?
        console.log("getSummary:");
        var arrayOfStrings = []; //return value
        var eventsSummary = (optionalParameter === undefined) ? this.arrayOfObjects : optionalParameter;
        var result = Array.isArray(eventsSummary); // object or array?

        if(result) {//Array of Objects
            var arrayOfStrings = eventsSummary.filter(function(object){//filter through each object
                var parsedDateStart = Date.parse(object.dateStart);
                var parsedDateEnd = Date.parse(object.dateEnd);
    
                if (parsedDateEnd == parsedEnd){ //if same day, On [dateStart]: [name] ( [description] )
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

// TESTING 
// Ask about test cases
arrayOfObjects = [
    {name: 'University expo', description: 'Expo to showcase University degrees', dateStart: '2022/02/01', dateEnd: '2022/02/14'},
    {name: 'Music festival', description: 'Weekend long music festival with a ton of artists performing', dateStart: '2022/05/13', dateEnd: '2022/05/15'},
    {name: 'Market', description: "Farmer's market day long event", dateStart: '2022/06/12', dateEnd: '2022/06/12'},
    {name: 'Science Expo', description: 'Science expo with sciency stuff', dateStart: '2022/06/12', dateEnd: '2022/06/21'},
    {name: 'Hiking trip', description: 'Hiking trip with a bunch of University friends', dateStart: '2022/02/14', dateEnd: '2022/02/16'},
    {name: 'Park Picnic', description: 'Picnic event in the park', dateStart: '2022/06/12', dateEnd: '2022/06/12'}
]

var newArrayOfObjects = new EventHandler(arrayOfObjects);
// newArrayOfObjects.getEventsBetweenDates("2022/02/01", "2022/02/16");
// newArrayOfObjects.getByMonth(05);
var uniqueArrayOfObjects = newArrayOfObjects.getUniqueDateAndSort();
console.log(uniqueArrayOfObjects);



//getSummary:
// console.log(newArrayOfObjects.getSummary());
//console.log(newArrayOfObjects.getSummary({name: 'Market', description: "Farmer's market day long event", dateStart: '2022/06/12', dateEnd: '2022/06/12'}));
//console.log(newArrayOfObjects.getSummary({name: 'University expo', description: 'Expo to showcase University degrees', dateStart: '2022/02/01', dateEnd: '2022/02/14'}));
//console.log(newArrayOfObjects.getSummary({name: 'Pizza party', description: "Pizza party at work", dateStart: '2022/07/10', dateEnd: '2022/07/10'}));
