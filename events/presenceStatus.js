const { MessageEmbed, Collection } = require('discord.js');
const client = require('..');
const config = require('../config.json');
const prefix = config.prefix;

client.on('presenceUpdate', (oldPresence, newPresence) => {
    let member = newPresence.member || oldPresence.member

    if (member.id === '873868367289778197') {
        if (oldPresence.status !== newPresence.status) {

            let channel = client.channels.cache.get("935345922869694564")

            let text;

            if (newPresence.status === "online") {
                text = "<:online:935680152623542362> | <@873868367289778197> \nAsada Sinon#6180 is **ONLINE**";
                channel.send(text)
            } else if (newPresence.status === "offline") {
                text = "<:offline:935679967411462225> | <@873868367289778197> \nAsada Sinon#6180 is **OFFLINE**";
                channel.send(text)
            }
            // etc...

        }
    }
});