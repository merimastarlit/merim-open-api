const apiUrl = "https://www.swapi.tech/api";

fetch(`${apiUrl}/people/1`)
    .then((response) => {

        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json() // Parse JSON data
    })
    .then((data) => {
        console.log("Character Data:", data);
        return fetch(`${apiUrl}/planets/1`);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });