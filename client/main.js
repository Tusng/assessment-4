const complimentBtn = document.querySelector("#complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

//Link axios request and response to Fortune button
const fortuneBtn = document.querySelector('#fortuneButton');

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

//Link axios request and response to Baby Girl Name button
const babyGirlBtn = document.querySelector("#babyGirl");

const babyGirlName = () => {
    axios.get("http://localhost:4000/api/babyGirl/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

//Link axios request and response to Inspirational Quote Button
const inspiration = document.querySelector("#inspirationButton");

const getInspirationalQuote = () => {
    axios.get("http://localhost:4000/api/inspiration/")
        .then(res => {
            const data = res.data;
            // const bodyField = document.querySelector("body");
            // const inspirationSection = document.createElement("section");
            // inspirationSection.textContent = data;
            // bodyField.appendChild(inspirationSection);
            alert(data);
        })
}

//Link axios request and response to soccer team button
const soccerTeam = document.querySelector("#soccerTeam");

const getSoccerTeam = () => {
    axios.get("http://localhost:4000/api/soccerTeam/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

//Link axios request and response to submit button
const clientSubmit = document.querySelector("#clientSubmit");

const createClient = () => {
    axios.post("http://localhost:4000/api/client/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

//Event Listener for Compliment button
complimentBtn.addEventListener('click', getCompliment)

//Event Listener for Fortune button
fortuneBtn.addEventListener("click", getFortune);

//Event Listerner for Baby Girl Name button
babyGirlBtn.addEventListener("click", babyGirlName);

//Event Listener for Inspirational Quote button
inspiration.addEventListener("click", getInspirationalQuote);

//Event Listener for Soccer Team button
soccerTeam.addEventListener("click", getSoccerTeam);

//Event Listener for Client Information form
clientSubmit.addEventListener("submit", createClient);
