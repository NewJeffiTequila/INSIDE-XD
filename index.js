require('dotenv/config');
const {Bot} = require('./bot');

const bot = new Bot(process.env.DISCORD_TOKEN);

bot.on('ready', () => {
    console.log('LISTENING');
});