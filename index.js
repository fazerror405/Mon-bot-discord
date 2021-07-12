// Module et quelques variables
const Discord = require('discord.js');
const client = new Discord.Client();
const TicTacToe = require('discord-tictactoe');
const tictactoegame = new TicTacToe({ language: 'fr' })
const config = require('./config.json')
const prefix = "bdf!";

// Les commandes et tout
client.on("message", async function(message){
	// Pour éviter qu'un bot puisse faire la commande et qu'on puisse pas utiliser un prefix invalide
	if(message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;
    
	// Quelques variables importantes sinon bah rip
	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	// La commande pour trouver les brouteurs
	if(command === "ddb"){
		// Crée un embed et l'envoyer
		var embed = new Discord.MessageEmbed()
		.setColor("#0099ff")  
		.setTitle("détection de Brouteur")
		.setAuthor("Nous venons d'activer la détection de Brouteur", "https://media.discordapp.net/attachments/846483789416759337/852418154025582622/chargement_en_cours......gif")
		.setThumbnail ("https://media.discordapp.net/attachments/846483789416759337/847154590931222568/Boukoulou_recherche_pdf_FLoutee.png")  
		.addField("mode detection de Brouteur ACTIVE,Nous sommes entrain de chercher des brouteurs... Veillez patientiez...", "  nom: Brodan. Prenon: boukoulou Photo de Profil: Photo FLoutée Date de naissance: 05/08/1985 Lieu de Naissance: Abidjan, hopital Inconnu, à 16h41 Age: Inconnu (Entre 23 et 30 ans). Après avoir raté le bac il avait plus assez d'argent pour vivre avec la famille donc il arnaque. brouteur chez la plage, A la Maison, Au Cdi, et à la cafétéria, arnaque a l'emploi, et au sentiment.Lieu: Abidjan, 8 rue ton pere le pd qui arnaque,Boubaba Berlouni 752309",) 
		.addField("Brouteur trouvée en Abidjan", "coordonées au dessus. Recherché pour vole et pour consomation de stupéfiant, UNE PRIME DE 10000$ A CELUI QUI LE TROUVE EN VIE ET LE RAMENE A L'HOTEL DE VILLE", true)  
		message.channel.send(embed);
	}

	// Quand t'achète pokemon sur wish
	if(command === "pika"){
		// Trouver la personne mentionné
		var member = message.mentions.members.first()
		if(!member) return message.channel.send("ERREUR AHHH PETE LE DOI BLUE SCREENE\nMentionne quelqu'un après la commande pour le poke du bled (vive anti coupable)")
		
		// Crée et envoyer l'embed
		var embed = new Discord.MessageEmbed()
		.setAuthor("Nous venons d'activer la pika en mp", "https://cdn.discordapp.com/attachments/846483789416759337/852418154025582622/chargement_en_cours......gif",)
		.setTitle( "Activation de la pika" )
		.setDescription("tu vien de recevoir une pika de (je dirais pas c qui qui a envoyer ca car je suis pas une poucave ou car j'ai pas encore coder ca tkt)",)
		.setColor("RANDOM")
		.setTimestamp()
		.addField("Description : \n","Si je t'envoie ce msg c pour te faire perdre du temps comme ça ca sert a ça les pika, Donc je disais je vais te poser une serie de question qu'il faudra me répondre en mp ok pd ? (blc de ta réponse), Bon déjà t pd ? t bg ? tu Suce ? tu raid ? tu sais coder ? t un brouteur ? t'aime la pute de la prof d'espagnol ? ba voila jespere que t'aura bien répondu.", false)
		.setThumbnail("https://cdn.discordapp.com/attachments/855889940617232384/855900084846460998/giphy.gif")
		.setFooter("Embed by faze v1, cmd bdf!help si besoin (pas encore coder donc bon...)")
		.setImage("https://cdn.discordapp.com/attachments/855889940617232384/855901211273330708/200_2.gif") 
		client.users.cache.get(member.user.id).send(embed)
		message.channel.send(embed);
	} 

	// Ping pong AHHHH HYPER DROLE PTN (pas du tout)
	if (command === "ping"){
		// Obtenir le ping et l'envoyer
		const timeTaken = Date.now() - message.createdTimestamp;
		message.channel.send(`Le bot a ${timeTaken} ms (ping) selon discord.`);
	}
	
	// Commande pour utiliser un webhook du bled
	if (command === "fauxjohan"){
		const hook = new Discord.WebhookClient("846421509239996416", "0LVNUSxX-cViOvQGIwE_2jn_uLCztcLlbQoNjrDufKKGU1Ddg4k57w2lfTJGN6UkBmZD")
		if(!args.join('')) return message.channel.send("")
		hook.send(args.join(' '))
		message.delete()
	}   

	// Pour jouer au morpion avec Jean Michel Random
	if(command === "tictactoe"){
		tictactoegame.handleMessage(message)
	}

	// Pierre feuille ciseau
	if (command === "pfc"){
		// Le choix du bot
		var botChoiceList = ['Pierre','Feuille','Ciseau']
		var botChoice = botChoiceList[Math.floor(Math.random() * botChoiceList.length)]

		// Le choix de l'utilisateur
		if(args[0].toLowerCase() === "pierre") var userChoice = "Pierre"
		if(args[0].toLowerCase() === "feuille") var userChoice = "Feuille"
		if(args[0].toLowerCase() === "ciseau") var userChoice = "Ciseau"
		if(args[0].toLowerCase() !== "pierre" && args[0].toLowerCase() !== "feuille" && args[0].toLowerCase() !== "ciseau") return message.channel.send("Veuillez utiliser la commande en peu comme ça : `bdf!pfc <Pierre|Feuille|Ciseau>`")

		// Trouver le résultat de la partie
		if(userChoice === "Pierre" && botChoice === "Pierre") var result = "Egalité (rip)"
		if(userChoice === "Feuille" && botChoice === "Feuille") var result = "Egalité (rip)"
		if(userChoice === "Ciseau" && botChoice === "Ciseau") var result = "Egalité (rip)"
		if(userChoice === "Pierre" && botChoice === "Feuille") var result = "Perdu (ez)"
		if(userChoice === "Pierre" && botChoice === "Ciseau") var result = "Victoire (GG)"
		if(userChoice === "Ciseau" && botChoice === "Pierre") var result = "Perdu (ez)"
		if(userChoice === "Ciseau" && botChoice === "Feuille") var result = "Victoire (gg)"
		if(userChoice === "Feuille" && botChoice === "Pierre") var result = "Perdu (ez)"
		if(userChoice === "Feuille" && botChoice === "Ciseau") var result = "Victoire (gg)"

		// Crée un embed et l'envoyer
		var embed = new Discord.MessageEmbed()
		.setTitle (result)
		.setDescription("**Ton choix :** " + userChoice + "\n**Mon choix :** " + botChoice)
		.setColor(result.replace("Egalité (rip)","#0277bd").replace("Perdu (ez)","#b0120a").replace("Victoire (gg)","#12c700"))
		.setFooter("Commande développé par le grand maitre Stickman (johan-perso.glitch.me) | J'exige des droits d'auteur")
		.setURL("http://mamadouweb.herokuapp.com/site-dylan")
		message.channel.send(embed)
	}

	// Utiliser un webhook du bled (encore)
	if (command === "yaya"){
		// Information du webhook
		const hook = new Discord.WebhookClient("846425695638781992", "70ySFVbvak7bkmKV93N6tDYO56Sn62O4vWcDrIWz0muhs6SHYODrSgWEWuREQPW3B3XV")
		
		// Si aucun texte fourni
		if(!args.join('')) return message.channel.send("Tu veux qu'il dise quoi pelo")

		// Envoyer le message et supprimer l'invocation
		hook.send(args.join(' '))
		message.delete()
	}   
	
	// Pour dégager quelqu'un
	if(command === "kick"){
		// Impossible de faire la commande en DM
		if(message.channel.type === "dm") return message.channel.send("Tu veux que je kick qui on est en message privé sale con")

		// Récupération de la mention
		var user = message.mentions.users.first();
		if(!user) return message.channel.send("AHHIOHOHOAE T'AS OUBLIER DE MENTIONNER UN PELO A DEGAGER DU SERVEUR")
		
		// Récupération du membre mentionné
		var member = message.guild.member(user)

		// Vérifier la permission d'exclure des membres
		if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Veuillez patienter.. L'utilisateur <@" + user.id + "> va bientôt être exclu...").then(msg => setTimeout(() => msg.edit("ABANON T'AS PAS LA PERM DE KICK ALLEZ CHEH EZZZZZ").catch(err => {}), 2500))

		// Si le modo veut me kick moi
		if(user.id === client.user.id){
			return message.channel.send("Ok.. je pars.. (ntm fdp plus jamais j'reviens sur ton serveur de gros pd)").then(() => message.guild.leave())
		}

		// Obtenir la raison
		if(args.join(' ').replace(args[0],"") === undefined || args.join(' ').replace(args[0],"") === " ") var reason = "aucune raison fourni"
		if(args.join(' ').replace(args[0],"") !== undefined) var reason = args.join(' ').replace(args[0],"") 

		// Crée une invitation
		var invite = await message.channel.createInvite({ unique: true, maxUses: 1, reason: "Un membre a été exclu. Une invitation lui est envoyé par message privé. " + message.author.tag + " (ID : " + message.author.id + ")" })

		// Kick le membre
		member.kick("Le pelo s'est fait dégager du serveur par " + message.author.tag + " car " + reason || "y'a pas de raison")
		.then(() => {
			// Crée un embed et l'envoyer en message privé
			var embedDm = new Discord.MessageEmbed()
			.setTitle("T'as été kick pelo")
			.setDescription("**Modérateur :** " + message.author.tag + "\n**Raison :** " + reason + "\n**Rejoindre à nouveau :** "  + invite.url)
			.setColor("RANDOM")
			client.users.cache.get(member.user.id).send(embedDm).catch(err => {})

			// Envoyer un message dans le salon
			message.channel.send("BRUH IL S'EST FAIT DEGAGER J'L'AI EZ")
		})
		.catch(err => {
			// Vérification de la permission du bot
			if (!message.guild.me.hasPermission("KICK_MEMBERS")){
				return message.channel.send("j'ai pas la perm de kick ptn..").catch(err => {});
			} else {
				return message.channel.send("Ptn mon code il est buggé j'ai eu une erreur : " + err + " (report le à un pelo nommé ◇─ƑƛȤЄƦƦƠƦ405─◇#9200 stp)").catch(err => {})
			}
		});
	}

	// Commande pour dégager quelqu'un sans qu'il revienne
	if(command === "ban"){
		// Si il a pas la permission de bannir
		if (!message.member.hasPermission('BAN_MEMBERS')){
			message.channel.send(`@${message.author.username}, tu n'es pas autorisé a bannir quelqu'un. (cheh)`)
			return message.delete()  
		}
	
		// Personne mentionné
		const user = message.mentions.users.first();
		const member = message.guild.member(user);
		
		// Si aucun utilisateur mentionné
		if (!user){
			return message.channel.send(`${message.author.username} l'utilisateur que tu souhaites bannir n'existe pas.`)
		}

		// Durée et raison
		let [,days, reason] = args;

		// Bannir
		member.ban(user, {days, reason})
		.then(user => message.channel.send(`L'utilisateur ${user.user.tag} a été banni du serveur pour une durée de ${days} jour(s) pour la raison suivante : ${reason} `))
	}

	// Pour clear des messages
	if(command === "clear")
		// Vérifier si il a la permission de gérer les messages
		if (message.member.hasPermission("MANAGE_MESSAGES")){
			// Obtenir le nombre de message a supprimé
			let messagecount = parseInt(args[0]);
			if(isNaN(messagecount)) return message.channel.send("❌ " + "| Pelo dit le nombre de msg que tu souhaiteras suppr");

			// Vérifier si le nombre est supérieur / inférieur a un autre
			if(messagecount > 100){
				return message.channel.send("❌ " + "| Pelo, tu peut mettre que entre 2 et 100 msg a clear !")
			} else if(messagecount < 2){
				return message.channel.send("❌ " + "| Pelo, tu peut mettre que entre 2 et 100 msg a clear !")
			}

			// Supprimer les messages
			message.channel.bulkDelete(messagecount, true)

		} else {
			// Si on a pas la permission de gérer les messages
			return message.reply("❌ " + "| pelo t pas admin rip donc apelle un admin ou soit admin pour faire cette msg")
	}
});

// Quand le bot vient de s'allumer
client.on('ready', () => { 
	// L'afficher dans le terminal
	console.log("Le " + client.user.tag + " est en ligne");

	// Toutes les 10 secondes, changer de statut
	setInterval(() => {
		var statutToUse = config.statutList[Math.floor(Math.random() * config.statutList.length)];
		var [statutContent,statutType] = statutToUse.split("~~")
		client.user.setActivity(statutContent, {type: statutType});
	}, 10000);
});

// Message non commande
client.on('message', async message => {
	if(message.content.toLowerCase() === 'aurevoir'){
		message.channel.send('aurevoir jeune entrepreneur');
	}
	if(message.content.toLowerCase() === 'tu veux jouer au pierre feuille ciseau'){
		message.channel.send('oe bg vazy');
	}
	if(message.content.toLowerCase() === 'mamabot'){
		message.channel.send('mamabot est nul VIVE LE BOT DE FAZE');
	}
	if(message.content.toLowerCase() === 'nice'){
		message.channel.send('Oe nice bg');
	}
	if(message.content.toLowerCase() === 'mamabot'){
		message.channel.send('mamabot est nul VIVE LE BOT DE FAZE');
	}
	if(message.content.toLowerCase() === 'tu triche'){
		message.channel.send('ba oe logique');
	}
	if(message.content.toLowerCase() === 'askip bot de faze est nul'){
		message.channel.send('AVEC MON MAITRE FAZERROR405 ON VOUS DETRUIRE');
	}
	if(message.content.toLowerCase() === 'soldat'){
		message.channel.send('maitre fazerror405 et le seul fazerror405 je vous respect, désolé maitre, vous etes trop bg et intélligent');
	}
	if(message.content.toLowerCase() === 'oe'){
		message.channel.send('oe bg');
	}
	if(message.content.toLowerCase() === 'ptdr'){
		message.channel.send('T KI, JE SUIS TON PERE LE PD D ADBDIJAN');
	}
	if(message.content.toLowerCase() === 'wsh'){
		message.channel.send("wsh pelo")
	}
	if(message.content.toLowerCase() === 'pamela'){
		message.channel.send("NIQUE PAMELA CETTE PUTE COMME LES FILLES DE LA CLASSE")
	}
	if(message.content.toLowerCase() === 'bien'){
		message.channel.send("bien et vous")
	};
	if(message.content.toLowerCase() === 'tranquille'){
		message.channel.send("aba tan mieux")
	}
	if(message.content.toLowerCase() === 't pd'){
		message.channel.send("non pd de fdp va sur anti-coupable de merde") 
	}
	if(message.content.toLowerCase() === 'sale bot'){
		message.channel.send("tg je suis intéligent au moins fdp")
	}
	if(message.content.toLowerCase() === 'tg'){
		message.channel.send("non tu parle a qui fdp va volé du blé à la adam qui assume pas")
	}
	if(message.content.toLowerCase() === 'ez'){
		message.channel.send("uh ferme a gueule c moi que te ez pd de merde")
	}
	if(message.content.toLowerCase() === 'uh'){
		message.channel.send("uh ferme ta gueule")
	} 
	if(message.content.toLowerCase() === 'oeoeoe'){
		message.channel.send("eoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeoeo")
	}
	if(message.content.toLowerCase() === 'non pd'){
		message.channel.send("uh ferme ta gueule pd de merde") 
	}

	if(message.content.toLowerCase() === '2429391'){
		message.channel.send("S/o LDO FREZZE SO NEX LEVEL ELLE SENT LE BAR MATRIXE PAR THE WARROR QUi EST AN SPINGER DAL DE PAR DEL EVEL 667 EKIP LDO PETASSE OVG NMS ")
	}
	if(message.content.toLowerCase() === 'mamadou'){
		message.channel.send("tenez LE MAMAOU UCHIWA CAR FRR J'AI PAS TROUVER LE MAMADOU NORMAL (oe j'ai la flemme) https://cdn.discordapp.com/attachments/829448346598768663/845968425913810974/mamadou_Uchiwa.png")
	}
	if(message.content.toLowerCase() === 'i am the one you are the two'){
		message.channel.send("i am the one you are the two FUCK YOU I AM THE ONE FUCK YOU")
	}
	if(message.content.toLowerCase() === 'ok'){
		message.channel.send("ouais voilà repect moi enculé de pd de merde")
	}
	if(message.content.toLowerCase() === 'non'){
		message.channel.send("Mais si FDP tais toi c faze le boss ici.")
	}  
	if(message.content.toLowerCase() === 'a ok merci'){
		message.channel.send("De rien, pas de soucis Maitre.")
	}   
	if(message.content.toLowerCase() === 'oof'){
		message.channel.send("OOF TG PD VA TE FAIRE OPERER DE LA BOUCHE")
	} 
	if(message.content.toLowerCase() === 'ba oui c moi ton maitre faze'){
		message.channel.send("a d'accord désolée maitre ")
	}   
	if(message.content.toLowerCase() === 'ok pd'){
		message.channel.send("tg ptn ferme là tu parle trop.")
	}
	if(message.content.toLowerCase() === 'je pars raid des serveurs'){
		message.channel.send("ok jeune entrepreneur aurevoir (a jamais pd)")   
	}
}); 
 

client.login(config.token) 