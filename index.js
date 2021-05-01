"use strict";

//Start of Functions -

//Cities
function nearbyCities(){
    let theNearbyCities = ['Louisville', 'Lexington', 'Cincinnati', 'Florence'];
    let randomRestraunts = theNearbyCities [Math.floor((Math.random() *theNearbyCities.length))];
    return randomRestraunts;
}

//Fast Food
function theRestraunts(){
    let fastFood = ['McDonalds', 'Burger King', 'Chick fil A', 'Checkers'];
    let randomRestraunts= fastFood [Math.floor((Math.random() *fastFood.length))];
    return randomRestraunts;
}

//Method of Transportation
function theWayThere(){
    let methodOfTransport = ['Car', 'Motorcycle', 'Bus', 'Uber', 'Lyft'];
    let randomTransportation = methodOfTransport [Math.floor((Math.random() *methodOfTransport.length))];
    return randomTransportation;
}

//Entertainment
function haveFun(){
    let funAndGames = ['Laser Tag', 'Basketball', 'Paintball', 'Top Golf']
    let randomFun = funAndGames [Math.floor((Math.random() *funAndGames.length))];
    return randomFun;
}

//Variables With Arrays Declared in Function
let destinations = nearbyCities();
let restraunts = theRestraunts();
let transportation = theWayThere();
let entertainment = haveFun();
let selection = areYouSure();

//Verify Trip
function areYouSure(){
    let choice = confirm("Does going to " + destinations + " by taking the " + transportation + ", grabbing some " + restraunts + " to eat " + "and playing " + entertainment + " with friends sound like a good plan? ");
    return choice;
}

//Day Trip Completed
function myDayTrip(){
    if(selection === true){
        console.log("DAY TRIP COMPLETED: Today I took the " + transportation + " to " + destinations + ". Then grabbed some " + restraunts + " to eat and played " + entertainment + " with some of my friends.");
        console.log("Thanks for using the Day Trip Planner")
    }
    else{
        destinations = nearbyCities();
        transportation = theWayThere();
        restraunts = theRestraunts();
        entertainment = haveFun();
        selection = areYouSure();
        myDayTrip();
    }
}

//Call Day Trip Function
myDayTrip();