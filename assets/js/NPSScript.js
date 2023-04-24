// async function logJSONData() {
//     const response = await fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad');
//     const jsonData = await response.json();
//     console.log(jsonData);
// }

// logJSONData();
    var APIKey = "MNJumTqMuNY0igarIiSXmJBHSmFPcL0FajFPRD0a";
    var Hiking;
    var queryURL = "https://developer.nps.gov/api/v1/activities/parks?id=&q=hiking" + "&api_key=" + APIKey;

fetch(queryURL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })    

//     var sQuearyURL = "https://developer.nps.gov/api/v1/places?q=" + inputOption + "&api_key=" + APIKey;

// fetch(sQuearyURL)
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     console.log(data);
// })    