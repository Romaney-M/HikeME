async function logJSONData() {
    const response = await fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad');
    const jsonData = await response.json();
    console.log(jsonData);
}

logJSONData();