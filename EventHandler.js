//constructor
function EventHandler(arrayOfObjects) {
    // member object
    this.arrayOfObjects = arrayOfObjects;

    // member functions
    this.getEventsBetweenDates = function(start, end){
        console.log("getEventsBetweenDates:");
        this.arrayOfObjects  = arrayOfObjects.filter(function(object){
            var parsedStart = Date.parse(start);
            var parsedEnd = Date.parse(end);
        
            var parsedDateStart = Date.parse(object.dateStart);
            var parsedDateEnd = Date.parse(object.dateEnd);

            if ((parsedDateStart >= parsedStart) && (parsedDateEnd <= parsedEnd)){//within range
                return object;
            }
        });
        return this.arrayOfObjects ;
    }

    this.getByMonth = function(month){
        console.log("getByMonth:");
        this.arrayOfObjects = arrayOfObjects.filter(function(object){
            var dateStart =  new Date(object.dateStart);
            var objectMonth = dateStart.getMonth() + 1;

            if (objectMonth == month){
                return object;
            }   
        });
        return this.arrayOfObjects;
    }
  
    this.getUniqueDateAndSort = function(){
        console.log("getUniqueDateAndSort:");
        this.arrayOfObjects = arrayOfObjects.reduce((acc, current) => {
            const x = acc.find(element => ( (element.dateStart === current.dateStart) && (element.dateEnd === current.dateEnd)));
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);
       return this.arrayOfObjects;
    }
    
    
    this.getSummary = function(optionalParameter){ //optionalParameter
        console.log("getSummary:");
        this.arrayOfObjects = (optionalParameter === undefined) ? this.arrayOfObjects : optionalParameter;
        var eventSummary = [];
        // var result = Array.isArray(this.arrayOfObjects); // object or array?

        // if(result) {//Array of Objects
        var temp = this.arrayOfObjects.filter(function(object){//filter through each object
                var parsedDateStart = Date.parse(object.dateStart);
                var parsedDateEnd = Date.parse(object.dateEnd);
                
                if (parsedDateEnd == parsedDateStart){ //if same day, On [dateStart]: [name] ( [description] )
                    eventSummary.push("On " + this.arrayOfObjects.dateStart + ": " + this.arrayOfObjects.name + " ( " + this.arrayOfObjects.description + " )");
                } else { //range of days, From [dateStart] to [dateEnd]: [name] ( [description] )
                    return("From " + this.arrayOfObjects.dateStart + " to " + this.arrayOfObjects.dateEnd + ": " + this.arrayOfObjects.name + " ( " + this.arrayOfObjects.description + " )");
                }
            });
        // }
        // else {//Single Object 
        //     var parsedDateStart = Date.parse(this.arrayOfObjects.dateStart);
        //     var parsedDateEnd = Date.parse(this.arrayOfObjects.dateEnd);
        //     if (parsedDateStart ==  parsedDateEnd){//if same day, On [dateStart]: [name] ( [description] )
        //         return("On " + this.arrayOfObjects.dateStart + ": " + this.arrayOfObjects.name + " ( " + this.arrayOfObjects.description + " )");
        //     } else { //range of days, From [dateStart] to [dateEnd]: [name] ( [description] )
        //         return ("From " + this.arrayOfObjects.dateStart + " to " + this.arrayOfObjects.dateEnd + ": " + this.arrayOfObjects.name + " ( " + this.arrayOfObjects.description + " )");
        //     }
        // }
        console.log(eventSummary);
        return temp;
    }
}

// PROTOTYPE CHAINING & HANDLER
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

// Array.prototype.getByMonth = function(month){
//     return new EventHandler(arrayOfObjects).getByMonth(06);
// }

// Array.prototype.getSummary = function(optionalParameter){
//     return new EventHandler(arrayOfObjects).getSummary(optionalParameter);
// }

// HANDLER 

// console.log(newArrayOfObjects.getEventsBetweenDates("2022/02/01", "2022/02/16"));

// console.log(newArrayOfObjects.getByMonth(06));

// console.log(newArrayOfObjects.getUniqueDateAndSort());

console.log(newArrayOfObjects.getSummary());
// console.log(newArrayOfObjects.getSummary({name: 'Market', description: "Farmer's market day long event", dateStart: '2022/06/12', dateEnd: '2022/06/12'}));
// console.log(newArrayOfObjects.getSummary({name: 'University expo', description: 'Expo to showcase University degrees', dateStart: '2022/02/01', dateEnd: '2022/02/14'}));
// console.log(newArrayOfObjects.getSummary({name: 'Pizza party', description: "Pizza party at work", dateStart: '2022/07/10', dateEnd: '2022/07/10'}));

// console.log(newArrayOfObjects.getByMonth(06).getSummary());

// w3schools array protoptype
// JS best practices