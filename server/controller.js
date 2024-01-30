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
    },

    getInspirationalQuote: (req, res) => {
        const inspirationalQuotes = ["Definitions belong to the definers, not the defined.", "Belief creates the actual fact.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "Wake up determined, go to bed satisfied.", "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do."];

        //choose random inspirational quote
        let randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
        let randomQuote = inspirationalQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    createClient: (req, res) => {
        const {firstName, lastName, email} = req.body;
        const client = {
            "firstName" : firstName,
            "lastName" : lastName,
            "email" : email
        };
        clientDatabase.push(client);
        res.status(200).send(`Your name is ${firstName} ${lastName} and your email is ${email}`);
    },

    getSportTeam: (req, res) => {
        const teams = ["Manchester United", "Chelsea", "Manchester City", "Barcelona", "Real Marid", "AC Milan", "Juventus", "Bayern Munich", "PSG", "Arsenal", "Liverpool", "Inter Milan"];

        let randomIndex = Math.floor(Math.random() * teams.length);
        let randomTeam = teams[randomIndex];

        res.status(200).send(randomTeam);
    }

}

const clientDatabase = require("./database.json");