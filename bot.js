const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'S!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`S!help | S!invite`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


/* ES6 Promises */
client.on("message", message => {
    var prefix = "S!"
    if(message.content.startsWith(prefix + "createserver")) {
client.user.createGuild('Example Guild', 'london').then(guild => {
  guild.channels.get(guild.id).createInvite()
    .then(invite => client.users.get('<USERID>').send(invite.url));
  guild.createRole({name:'Example Role', permissions:['ADMINISTRATOR']})
    .then(role => client.users.get('<UserId>').send(role.id))
    .catch(error => console.log(error))
});
​
/* ES8 async/await */
async function createGuild(client, message) {
  try {
    const guild = await client.user.createGuild('Example Guild', 'london');
    const defaultChannel = guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
    const invite = await defaultChannel.createInvite();
    await message.author.send(invite.url);
    const role = await guild.createRole({ name:'Example Role', permissions:['ADMINISTRATOR'] });
    await message.author.send(role.id);
  } catch (e) {
    console.error(e);
  }
}
createGuild(client, message);
// Run this once you've joined the bot created guild.
message.member.addRole('<THE ROLE ID YOU GET SENT>');

}})


client.login(process.env.BOT_TOKEN);
