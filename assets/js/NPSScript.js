// async function logJSONData() {
//     const response = await fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad');
//     const jsonData = await response.json();
//     console.log(jsonData);
// }

// logJSONData();
var changeState = document.querySelector('.stateInput');

let newState;

var APIKey = "MNJumTqMuNY0igarIiSXmJBHSmFPcL0FajFPRD0a";
var Hiking;
var queryURL = "https://developer.nps.gov/api/v1/activities/parks?id=&q=hiking" + "&api_key=" + APIKey;



function stateCompare(data, newState){
    for(var i = 0; i<data.data[0].parks.length;i ++){
        if(newState === data.data[0].parks[i].states){
            console.log('match')
            // redering in here
        }
    }
}

const getMap = (state) => {
    console.log(state);
    if(state === "Alabama"){
        newState = "AL"
    } else { 
        if(state === "Alaska"){
            newState = "AK"
    } else {
        if(state === "Arizona"){
            newState = "AZ"
        }
    } else {
        if(state === "Arkansas"){
            newState = "AR"
        }
    }
    }

    fetch(queryURL)
.then(res => {
    return res.json();
})
.then(data => {
    console.log(data.data[0].parks.states);
    console.log(data);
    console.log(newState);
    stateCompare(data, newState);
}) 
}
 


    inputOption.addEventListener("change", function (event) {
        getMap(`${event.target.value}`)
    })