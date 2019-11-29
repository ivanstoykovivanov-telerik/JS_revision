

//1
console.log(this);


//2
calculateAge(2000); 

function calculateAge(year){
    console.log(2020 - year);
    console.log(this);

    innerFunction(); 
    function innerFunction(){
        console.log(this);
    }
}


//3 
var john = {
    name : "John Atanasoff", 
    yearOfBirth : 1903, 
    calculateAge : function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        innerFunction(); 
        function innerFunction(){
            console.log(this);
        }
    }
}

john.calculateAge(); 

//4
var steve =  {
    name: "Steve Jobbs",
    yearOfBirth : 1955, 

}

steve.calculateAge = john.calculateAge ; 
steve.calculateAge(); 

