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


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تنشر",
        color: 0x06DF00,
        description: "يمنع النشر في هذا السيرفر",
        footer: {
          text: "By A7med"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 


client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'ms')) {
        if (!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)

        .setDescription(`**:battery: حالة اعضاء السيرفر**
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

        message.channel.sendEmbed(embed)
    }
});



var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "S!roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.on('message', message => {
     if(message.content.startsWith(prefix + "clear")) {
         var args = message.content.split(" ").slice(1);
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need MANAGE_MESSAGES permission noob');
  if (!args[0]) return message.channel.send('You didn\'t provide any number!!!');

  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor(0xF16104)
      .setDescription(`Cleared ${args[0]} messages.`);
    message.channel.send({ embed });

    const actionlog = message.guild.channels.find('name', 'log');

    if (!actionlog) return message.channel.send('Can\'t find action-log channel. Are you sure that this channel exists and I have permission to view it? **CANNOT POST LOG.**');
    const embedlog = new Discord.RichEmbed()
      .setDescription('~Purge~')
      .setColor(0xF16104)
      .addField('Purged By', `<@${message.author.id}> with ID ${message.author.id}`)
      .addField('Purged in', message.channel)
      .addField('Time', message.createdAt);
    actionlog.send(embedlog);
   
  });
};

});


client.on('ready', () => {
 client.guilds.get("493862684693889024").roles.find("name", 'rainbow').edit({color : "RANDOM"})
})


client.on('message', message => {
  if(message.content === 'S!support') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discord.gg/fKEdPM ')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});


client.login(process.env.BOT_TOKEN);
