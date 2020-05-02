function return_avatar(message) {
    message.reply(message.author.displayAvatarURL());
}

module.exports = {return_avatar};