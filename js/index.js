const apiUrl = "https://www.swapi.tech/api/people/";

fetch(apiUrl)
    .then((response) => {

        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json() // Parse JSON data
    })
    .then((data) => {
        const people = document.getElementById("people");
        const person = data.results;
        person.forEach((person) => {
            const personDiv = document.createElement("div");
            personDiv.innerHTML = `
                <h2>${person.name}</h2>
            `;
            personDiv.classList.add("person");
            people.appendChild(personDiv);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });




//Starships: 

const starshipsUrl = "https://www.swapi.tech/api/starships/";

fetch(starshipsUrl)
    .then((response) => {

        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json() // Parse JSON data
    })
    .then((data) => {
        const starships = document.getElementById("starships");
        const starship = data.results;
        starship.forEach((starship) => {
            const starshipDiv = document.createElement("div");
            starshipDiv.innerHTML = `
                <h2>${starship.name}</h2>
            `;
            starshipDiv.classList.add("starship");
            starships.appendChild(starshipDiv);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });


