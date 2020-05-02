const {hands_up} = require("./skills/put_your_hands_up");
const {return_avatar} = require('./skills/return_avatar');

const fs = require('fs');
const Discord = require('discord.js');

class Bot extends Discord.Client {
    constructor(token) {
        super();
        this.login(token).then(() => this.load_messages())
        // this.load_staff();
    }

    load_messages() {

        let rawdata = fs.readFileSync('messages.json');
        let messages = JSON.parse(rawdata).messages;

        this.on('message', msg => {
            if (msg.content.toLowerCase() == 'meu perfil') {
                return_avatar(msg);
            }
        });

        this.on("message", msg => {
            if (msg.content.toLowerCase() == 'levanta mão') {
                hands_up(msg);
            }
        });

        messages.forEach(element => {
            this.on('message', msg => {
                if (msg.content.toLowerCase() === element.message) {
                    msg.reply(element.response);
                }
            });
        });
    }
}

module.exports = {Bot};