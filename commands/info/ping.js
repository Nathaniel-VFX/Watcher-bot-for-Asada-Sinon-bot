const { Client, Message } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Returns bot ping.',
    run: async(client, message, args) => {
        let msg = await message.channel.send({ content: `๐ Pinging...` })
        let latency = msg.createdTimestamp - message.createdTimestamp
        await msg.edit({ content: `๐Pong! Bot latency: **${latency} ms** | API latency: **${Math.round(client.ws.ping)} ms**` })
    }
}