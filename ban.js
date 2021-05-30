const Discord = require('discord.js');

module.exports = {
name: "ban",
/**
 * 
 * @param {Discord.Message} message 
 */
async execute(message) {
    if (!message.member.hasPermission('BAN_MEMBERS')) {
    return message.channel.send(`${message.author.username},tu n'est pas autorisé a bannir quelqu'un.`)
     }
const guild = message.guild;
const user = message.mentions.users.first();
    
     
if (!user) {
return message.channel.send(`${message.author.username},l'utilisateur que tu souhaites bannir n'éxiste pas.`)
}

let [,days, reason] = args;

guild.member.ban(user, {days, reason})
.then(user => message.channel.send(`L'utilisateur ${user.username} a été banni du serveur pour une durée de ${days} jour(s) pour la raison suivante ${reason} `))

},
};