const Discord = require('discord.js');

require('dotenv/config');

console.log(process.env.APP_NAME)

const bot = new Discord.Client();

bot.login('NzA1NjI3MTY0Njk0ODA2NTgx.XqugHw.SDKal62BVQmEVLhFz_js7K5FVqo');

bot.on('ready', () => {
    console.log('entrei carai');
});

bot.on('message', msg => {
    if (msg.content === 'Salve') {
        msg.reply('fala tu');
    }
});