const url = "http://localhost:5500/api";
const newUser = {
        name: "Felipe Almeida",
        avatar: "http://lorempixel.com.br/500/400/",
        city: "Salvador"
}

function getUser(){
    axios.get(url)
        .then(response => {
            const data = response.data;
            renderResults.textContent = JSON.stringify(data);
        })
        .catch(error => console.log(error));
}
getUser();

function addNewUser(){
    axios.post(url, newUser)
        .then(response => {
            console.log(response.data)})
        .catch(error => console.log(error));
}
addNewUser();