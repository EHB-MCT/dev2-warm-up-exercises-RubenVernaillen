


const url = "https://v3.football.api-sports.io/status";
const headers = {
    "x-apisports-key": "c10092707c2fe7ed5958aec4ae6a2d25"
};


fetch(url, { method: "GET", headers })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(JSON.stringify(data, null, 4)))
    .catch(error => console.error("Error:", error));

