const http = require('http');
const express = require('express');

const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;







const Discord = require('discord.js');

const path = require('path');
const bot = new Discord.Client();

const ddiff = require('return-deep-diff');
const prefix = "!";
const fs = require("fs");
const ytdl = require('ytdl-core');
clbot.configure({botapi: "CC62zyfFyOxLPDFAokYg2pooS5Q"});




 servers = {};

const snekfetch = require('snekfetch');
 const arraySort = require("array-sort");
 const table = require("table");
 const send = require("quick.hook")
function play(connection, message) {
     server = servers[message.guild.id];
 
    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
 server.dispatcher.on('start', () => {
		console.log(server.queue)
			});
    server.queue.shift();
 
    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}



function ecksdeez(){
 //  ecksdee++
  // console.log(ecksdee);
   
  

}
 
   

bot.commands = new Discord.Collection();

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));


	 
  

  
	  
  
  




bot.on('ready', function() {
    console.log("")},

	
	
bot.on('ready',() => {
	 
  
bot.user.setGame("Zernax Bot | V.0.1 ");
  
  
	

	
	bot.user.setStatus('dnd')
	
	setTimeout(ecksdeez, 1000);
	setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            ecksdeez();
             // add error handling here
			 
        }, 200); 
	
	
	


//  client.user.setActivity(`Being a bot on ${client.guilds.size} servers`);

		
	
}),





bot.on('message', (message) => {
	function function2() {
  
}
function function3() {
    
}

    if (message.author.equals(bot.user)) return;
	
	setTimeout(function2, 10);
	setTimeout(function3, 5000);
	

       
}));
bot.on('message', (message) => {
  if (message.author.equals(bot.user)) return;
  if (message.mentions.members.size !== 0){
     
 if(message.mentions.members.first().id == "445923940519378953"){
   
   
   clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
     
    });
 }
  }
  });

bot.on('message', (message) => {
   

	
 
   
  
  
  });

bot.on('guildMemberAdd', member => {
   
  
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'join-quit');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.sendMessage(`Welcome to the server!, ${member}`);
    member.addRole("465288154748944410");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):


// or the person who made the command: let member = message.member;

// Add the role!
});






bot.on("message", function (message) {
  
  
	
  if (message.author.equals(bot.user)) return;
  if (!message.content.startsWith(prefix)) return;
 

  var args = message.content.substring(prefix.length).split(" ")


// Commandes
  switch (args[0]) {
	  
	
	  


  
      

  


	  
  

case "join":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.guild.voiceConnection) {
        return;
        }
        if (message.member.voiceChannel) { 
        message.member.voiceChannel.join()
        }
       
        
      break;
	  
  //JOIN
   
  //STOP
      case "stop":
        if (!message.member.voiceChannel) {
        return;
        }
        if (!message.guild.voiceConnection) {
        return;
        }
        if (message.member.voiceChannel) {
        message.guild.voiceConnection.disconnect()
        }
      break;
	  
	   
	  
	
	  
	
	  	   

  
  //AIDE
    
	  
	    case "kick":
    let modRole = message.guild.roles.find("name", "Mods");
     if(!message.member.roles.some(r=>["Staff?? ","??Administrateur??"].includes(r.name))) {
      return message.reply("you don't have the permission to use this command.").catch(console.error);
    }
    if(message.mentions.users.size === 0) {
      return message.reply("Please mention a user to kick").catch(console.error);
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
      return message.reply("That user does not seem valid");
    
	
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	
	
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
      return message.reply("I don't have the permissions (KICK_MEMBER) to do this.").catch(console.error);
    }
    kickMember.kick().then(member => {
      message.reply(`${member.user.username} was succesfully kicked.`).catch(console.error);
    }).catch(console.error)
  break;
  

	  
	    
  }
  
  
 
  
  
  
}


  	function function34() {
		if (!message.guild.voiceConnection) {
        message.channel.sendMessage("I am not in a discord channel. Add me by typing !join")
        }
		else{
  
		}

}

  

  
    switch (args[0]) {
      
		case "hug":
         if (message.mentions.members.size !== 0){
		if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a hug!`)
            .setImage("https://media.giphy.com/media/jT6FRVz9ivIgE/giphy.gif")
        message.channel.send({
            embed: hembed
        })
    }
        return;
    }
		break;
      case "uptime":
        let totalSeconds = (bot.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.ceil(totalSeconds % 60);
        let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        return message.reply(uptime);
        break;
      case "rps":
         var choice = args[1];
  if (choice == "paper" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "scissors") {
      var response = "I'm choosing **Scissors**! :v: I win!"
    } else if (choice2 == "paper") {
      var response = "I'm choosing **Paper**! :hand_splayed: It's a tie!"
    } else {
      var response = "I'm choosing **Rock**! :punch: You win!"
    }
    message.channel.send(response);
  } else if (choice == "rock" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "paper") {
      var response = "I'm choosing **Paper**! :hand_splayed: I win!"
    } else if (choice2 == "rock") {
      var response = "I'm choosing **Rock**! :punch: It's a tie!"
    } else {
      var response = "I'm choosing **Scissors**! :v: You win!"
    }
    message.channel.send(response);
  } else if (choice == "scissors" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "rock") {
      var response = "I choose **Paper**! :hand_splayed: You win!"
    } else if (choice2 == "scissors") {
      var response = "I choose **Scissors**! :v: It's a tie!"
    } else {
      var response = "I choose **Rock**! :punch: I win!"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`You need to say \`!rps\` <rock|paper|scissors>`);
  }
        break;
		case "kiss":
         if (message.mentions.members.size !== 0){
		if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a kiss!`)
            .setImage("https://i.gifer.com/2II9.gif")
        message.channel.send({
            embed: hembed
        })
        return;
    }
         }
		break;
		case "8ball":
		 if (!args[2]) return message.reply("Please ask a full question!");
    let replies = ["Yes, Certainly :8ball:", "No, Never :8ball:", "Please ask again :8ball:"]
    let result = Math.floor((Math.random() * replies.length));

    let question = args.slice().join(" ");

    let embedz = new Discord.RichEmbed()
        .setAuthor(message.author.username + " asked : " + question)
        .setColor("#D3D3D3")
        .addField("Answer", "Asked by " + message.author.tag + "\nAnswer: " + replies[result] + "")

    message.channel.send(embedz)
		break;
		case "invites":
			(async () => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    });
  invites = invites.array();
  arraySort(invites, 'Uses', { reverse: true})

    let possibleinvites = [['User', 'Uses' ]];
    invites.forEach(function(invites) {

       possibleinvites.push([invites.inviter.username,invites.uses + "  " ]);
        
        
    })

    
       
      message.channel.send("Invite list : ");  
    message.channel.send(`\`\`\`${table.table(possibleinvites)}\`\`\``);
})();
		

    
		break;
		
		case "ping":
		var embed = new Discord.RichEmbed()
    .setDescription(`**${message.author.tag}** | :ping_pong: Ping : ${bot.ping}ms`)
    .setColor(0xCB5A5E)
message.channel.send(embed)
    .catch(console.error);
		break;
		case "guilds":
		 // Lets define our array of guilds
    const guildArray = bot.guilds.map((guild) => {
    return `${guild.name} : ${guild.members.size} members`
    })
  
    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
		break;
	case "help":
	help_embed = new Discord.RichEmbed()
            .setColor('#4C1B1B')
            .addField("Commandes BOT", "   !help : show commands! \n !hug : hug someone \n !kiss : kiss someone \n !guilds : show guilds \n !yt : play a video \n !purgemessage : bulk delete message \n !invites : show invites for the server \n !ping : ping a server \n  !8ball : 8ball command \n !uptime : show the uptime of the server \n")
            
		
            .setFooter("Copyright © 2018 ZernaxBot - All Rights Reserved")
            .setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(help_embed);
	break;
        
   case "play":
            if (!args[1]) {
                message.channel.sendMessage("Please provide a link");
                return;
            }
 
            if (!message.member.voiceChannel) {
                message.channel.sendMessage("You must be in a voice channel");
                return;
            }
 
            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };
 
            var server = servers[message.guild.id];
 
            server.queue.push(args[1]);
        message.channel.sendMessage(args[1] + "Has been added to the queue");
        
           
            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });
            break;
	  
	  
        
          case "skip":
            var server = servers[message.guild.id];
 
            if (server.dispatcher) server.dispatcher.end();
            break;
        case "stop":
            var server = servers[message.guild.id];
           
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	   break;
	   case "purgemessage":
	   
	  if(!message.member.roles.some(r=>["Staff?? ", "??Administrateur??"].includes(r.name))) {
      return message.reply("you don't have the permission to use this command.").catch(console.error);
    }
	else
	{
	   let messagecount = parseInt(args[1]);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).catch(message.reply("Error"));
  return message.reply("Cleaned the chat").catch(console.error);
  
	}
	   break;
	   

  
  }
  
  
 
});








bot.login(process.env.BOT_TOKEN);
