const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = client => {
    command(client, 'mute', async (message) => {
        const{member, channel , content, mentions} = message
        if (message.member.id != '282698201289588736') {
            channel.send('you aint my dad')
            return
        }
        const split = content.trim().split(' ')

        if (split.length !== 4) {
            channel.send('use it properly idiot')
            return
        }

        const duration = split[2]
        const durationType = split[3]

        if (isNaN(duration)) {
            channel.send('use a number please danke')
            return
        }

        const durations = {
            m: 60,
            h: 60 * 60,
            d: 60 * 60 * 24,
            life: -1
        }

        if(!durations[durationType])
        {
            channel.send('give right duration danke')
            return
        }

        const seconds = duration * durations[durationType]
    })
}