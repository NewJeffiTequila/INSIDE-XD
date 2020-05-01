const fs = require('fs');
const Discord = require('discord.js');

class Bot extends Discord.Client {
    constructor(token) {
        super();
        this.login(token).then(() => this.load_messages());
    }

    load_messages() {

        let rawdata = fs.readFileSync('messages.json');
        let messages = JSON.parse(rawdata).messages;

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