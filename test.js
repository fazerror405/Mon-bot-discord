
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const prefix = "bdf!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

    if (command === "ping") {
     const timeTaken = Date.now() - message.createdTimestamp;
     message.reply(`Ils a ${timeTaken}ms (ping) selon discord.`);
    }
   //ptdrr
 if (command === "f") {
     const hook = new Discord.WebhookClient("846421509239996416", "0LVNUSxX-cViOvQGIwE_2jn_uLCztcLlbQoNjrDufKKGU1Ddg4k57w2lfTJGN6UkBmZD")
     if(!args.join('')) return message.channel.send("")
hook.send(args.join(' '))
   message.delete()
 }   
  
   if (command === "yaya") {
     const hook = new Discord.WebhookClient("846425695638781992", "70ySFVbvak7bkmKV93N6tDYO56Sn62O4vWcDrIWz0muhs6SHYODrSgWEWuREQPW3B3XV")
     if(!args.join('')) return message.channel.send("")
hook.send(args.join(' '))
   message.delete()
 }   
 });

client.on('ready', () => { 
  console.log("je suis le " + client.user.tag + " ligne");
  setInterval(() => {
    
    var statutToUse = config.statutList[Math.floor(Math.random() * config.statutList.length)];
    var [statutContent,statutType] = statutToUse.split("~~")
   client.user.setActivity(statutContent, {type: statutType});
}, 6000);
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aurevoir') {
    msg.channel.send('aurevoir jeune entrepreneur');
  }
    if(msg.content.toLowerCase() === 'wsh') {
      msg.channel.send( "wsh pelo")
    }
    if(msg.content.toLowerCase() === 'pamela') {
      msg.channel.send("NIQUE PAMELA CETTE PUTE COMME LES FILLES DE LA CLASSE")
    }
    if(msg.content.toLowerCase() === 'bien') {
      msg.channel.send( "bien et vous")
  };
   if(msg.content.toLowerCase() === 'tranquille') {
    msg.channel.send( "aba tan mieux")
  }
  if(msg.content.toLowerCase() === 't pd') {
    msg.channel.send( "non pd de fdp va sur anti-coupable de merde") 
  }
  if(msg.content.toLowerCase() === 'sale bot') {
    msg.channel.send( "tg je suis intéligent au moins fdp")
  }
  if(msg.content.toLowerCase() === 'tg') {
    msg.channel.send( "non tu parle a qui fdp va volé du blé à la adam qui assume pas")
}

  if(msg.content.toLowerCase() === 'ez') {
  msg.channel.send( "uh ferme a gueule c moi que te ez pd de merde")
}
  if(msg.content.toLowerCase() === 'uh') {
    msg.channel.send( "uh ferme ta gueule")
  } 
    if(msg.content.toLowerCase() === 'oeoeoe') {
      msg.channel.send( "eoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeo")
  }
    if(msg.content.toLowerCase() === 'non pd') {
      msg.channel.send( "uh ferme ta gueule  pd de merde") 
    }

    if(msg.content.toLowerCase() === '2429391') {
      msg.channel.send( "S/o LDO FREZZE SO NEX LEVEL ELLE SENT LE BAR MATRIXE PAR THE WARROR QUi EST AN SPINGER DAL DE PAR DEL EVEL")
    }
      if(msg.content.toLowerCase() === 'mamadou') {
        msg.channel.send( "https://cdn.discordapp.com/attachments/829448346598768663/845968425913810974/mamadou_Uchiwa.png")
      }
    
      if(msg.content.toLowerCase() ===  'i am the one you are the two') {
        msg.channel.send( "i am the one you are the two FUCK YOU I AM THE ONE FUCK YOU")
      }
      if(msg.content.toLowerCase() === 'ok') {
        msg.channel.send( "ouais voilà repect moi enculé de pd de merde")
      }
      if(msg.content.toLowerCase() === 'non') {
        msg.channel.send( "Mais si FDP tais toi c faze le boss ici.")
      }  
      if(msg.content.toLowerCase() === 'oof') {
        msg.channel.send( "OOF TG PD VA TE FAIRE OPERER DE LA BOUCHE")
      } 
      if(msg.content.toLowerCase() === 'ba oui c moi ton maitre faze') {
        msg.channel.send( "a d'accord désolée maitre ")
      }   
      if(msg.content.toLowerCase() === 'ok pd') {
        msg.channel.send( "tg ptn ferme là tu parle trop.")
      }
      if(msg.content.toLowerCase() === 'je pars raid des serveurs') {
        msg.channel.send( "ok jeune entrepreneur aurevoir (a jamais pd)")   
      }
        
      }); 
 


client.login("") 
