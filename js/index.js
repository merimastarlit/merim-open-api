
// People:

// const apiUrl = "https://www.swapi.tech/api/people/";

// fetch(apiUrl)
//     .then((response) => {

//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.json() // Parse JSON data
//     })
//     .then((data) => {
//         const people = document.getElementById("people");
//         const person = data.results;
//         person.forEach((person) => {
//             const personDiv = document.createElement("div");
//             personDiv.innerHTML = `
//                 <h2>${person.name}</h2>
//             `;
//             personDiv.classList.add("person");
//             people.appendChild(personDiv);
//         });
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });




//Starships: 

// const starshipsUrl = "https://www.swapi.tech/api/starships/";

// fetch(starshipsUrl)
//     .then((response) => {

//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.json() // Parse JSON data
//     })
//     .then((data) => {
//         const starships = document.getElementById("starships");
//         const starship = data.results;
//         starship.forEach((starship) => {
//             const starshipDiv = document.createElement("div");
//             starshipDiv.innerHTML = `
//                 <h2>${starship.name}</h2>
//             `;
//             starshipDiv.classList.add("starship");
//             starships.appendChild(starshipDiv);
//         });
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });




//Base API URL for people
const apiUrl = "https://www.swapi.tech/api/people/";


//fetch people data from API
fetch(apiUrl)
    .then((response) => {
        //if response is not ok, throw an error
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    //process the fetched data
    .then((data) => {
        const people = document.getElementById("people");
        //fetch people data
        const person = data.results;
        person.forEach((person) => {
            //create button for each person
            const personButton = document.createElement("button");
            personButton.innerHTML = `${person.name}`;
            personButton.classList.add("person-button");

            //add event listener to fetch and display person details on click
            personButton.addEventListener("click", () => {
                fetchPersonDetails(person.url);
            });
            //append button to people section
            people.appendChild(personButton);
        });
    })

    //catch error if any occurs during fetch
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

//function to fetch and display person details
function fetchPersonDetails(url) {
    //fetch person details
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            const details = document.getElementById("people-details");
            const properties = data.result.properties;
            details.innerHTML = `
                <h3>${properties.name}</h3>
                <p><strong>Height:</strong> ${properties.height} cm</p>
                <p><strong>Mass:</strong> ${properties.mass} kg</p>
                <p><strong>Hair Color:</strong> ${properties.hair_color}</p>
                <p><strong>Skin Color:</strong> ${properties.skin_color}</p>
                <p><strong>Eye Color:</strong> ${properties.eye_color}</p>
                <p><strong>Birth Year:</strong> ${properties.birth_year}</p>
                <p><strong>Gender:</strong> ${properties.gender}</p>
            `;
            //make details section visible
            details.style.display = "block";
        })
        .catch((error) => {
            console.error("Error fetching person details:", error);
        });
}



//Starships:

//Base API URL for starships
const starshipsUrl = "https://www.swapi.tech/api/starships/";

//fetch starships data from API
fetch(starshipsUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    //process the fetched data
    .then((data) => {
        const starships = document.getElementById("starships");
        const starship = data.results;
        starship.forEach((starship) => {
            const starshipButton = document.createElement("button");
            starshipButton.innerHTML = `${starship.name}`;
            starshipButton.classList.add("starship-button");

            starshipButton.addEventListener("click", () => {
                //fetch and display starship details on click
                fetchStarshipDetails(starship.url);
            });
            //append button to starships section
            starships.appendChild(starshipButton);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

//function to fetch and display starship details
function fetchStarshipDetails(url) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        //process and display starship details
        .then((data) => {
            const details = document.getElementById("starships-details");
            const properties = data.result.properties;
            details.innerHTML = `
                <h3>${properties.name}</h3>
                <p><strong>Model:</strong> ${properties.model}</p>
                <p><strong>Manufacturer:</strong> ${properties.manufacturer}</p>
                <p><strong>Cost:</strong> ${properties.cost_in_credits} credits</p>
                <p><strong>Length:</strong> ${properties.length} meters</p>
                <p><strong>Max Speed:</strong> ${properties.max_atmosphering_speed}</p>
                <p><strong>Crew:</strong> ${properties.crew}</p>
                <p><strong>Passengers:</strong> ${properties.passengers}</p>
                <p><strong>Cargo Capacity:</strong> ${properties.cargo_capacity} kg</p>
                <p><strong>Hyperdrive Rating:</strong> ${properties.hyperdrive_rating}</p>
            `;
            details.style.display = "block";
        })
        .catch((error) => {
            console.error("Error fetching starship details:", error);
        });
}



//Dynamic footer with current year
const footer = document.querySelector("footer");
const thisYear = new Date().getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `© Merim Omurbek ${thisYear}`;
footer.appendChild(copyright);

copyright.id = "footer";

//links in footer to GitHub and SWAPI
const links = document.createElement("div");
links.innerHTML = `
    <a href="https://github.com/merimastarlit/merim-open-api" target="_blank">GitHub</a> |
    <a href="https://www.swapi.tech/documentation" target="_blank">SWAPI</a>
`;
footer.appendChild(links);
links.id = "footer";




