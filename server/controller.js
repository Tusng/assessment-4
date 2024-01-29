module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will make change for the better.", "You will take a chance in something in near future.", "Your abilities are unparalleled.", "You never know who you touch.", "You only treasure what you lost."];

        //choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getBabyName: (req, res) => {
        const babyNames = ["Olivia", "Emma", "Amelia", "Sophia", "Charlotte", "Ava", "Isabella", "Mia", "Luna", "Evelyn"];

        //choose random baby girl name
        let randomIndex = Math.floor(Math.random() * babyNames.length);
        let randomBabyName = babyNames[randomIndex];

        res.status(200).send(randomBabyName);
    }

}