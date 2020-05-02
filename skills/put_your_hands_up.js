const fs = require('fs');

function hands_up(message) {
    let rawdata = fs.readFileSync('users.json');
    let staff_members = JSON.parse(rawdata).staff;

    let name = message.author.username;
    message.channel.guild.members.fetch()
        .then(function (guild_members) {
            guild_members.forEach(function (guild_member) {
                guild_member.user.fetch().then(function (user) {
                    staff_members.forEach(function (staff) {
                        if (staff.username === user.username) {
                            user.send(`O usuário ${name} levantou a mão`);
                        }
                    });
                });
            });
        });

}

module.exports = {hands_up};