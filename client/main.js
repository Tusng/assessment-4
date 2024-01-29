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

complimentBtn.addEventListener('click', getCompliment)

//Event Listener for Fortune button
fortuneBtn.addEventListener("click", getFortune);

//Event Listerner for Baby Girl Name button
babyGirlBtn.addEventListener("click", babyGirlName);
