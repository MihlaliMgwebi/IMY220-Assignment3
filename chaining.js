this.getSummary = function(optionalParameter){ 


    if(result) {//Array of Objects
        var arrayOfStrings = this.arrayOfObjects.filter(function(object){//filter through each object
            var parsedDateStart = Date.parse(object.dateStart);
            var parsedDateEnd = Date.parse(object.dateEnd);

            if (parsedDateEnd == parsedEnd){ //if same day, On [dateStart]: [name] ( [description] )
                return ("On " + object.dateStart + ": " + object.name + " ( " + object.description + " )");
            } else { //range of days, From [dateStart] to [dateEnd]: [name] ( [description] )
                return ("From " + object.dateStart + " to " + object.dateEnd + ": " + object.name + " ( " + object.description + " )");
            }
        });
    }