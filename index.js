const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NzA1NjI3MTY0Njk0ODA2NTgx.XqugHw.SDKal62BVQmEVLhFz_js7K5FVqo';

bot.login(token);

bot.on('ready', ()=> {
    console.log('entrei carai');
});

bot.on('message' , msg=>{
    if (msg.content==='Salve') {
        msg.reply('fala tu');
    }
});