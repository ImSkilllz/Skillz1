const Discord = require('discord.js');
const bot1 = new Discord.Client();
bot1.on('ready', () => {
  console.log(`Logged in as ${bot1.user.tag}!`);
});
bot1.on('ready', async () => {
    let igni = ["w3h5456whehaeryvaervrvyaer6 <@474730486eryvaeryyvaey787211265","qawes6736735dtysaeryaeryvaeryvetnsrysry","etnseter4848tyusryvaseyvaer6yq546q356345234q6q	346ayvaeryaveryaervyaervyearyaervnsr","zynrdyutyudsuruyr56w547w4yrtwfgnydrydfh","zdfnydynfuyrtyrwtsywrtyw56dy","drnydryn","drynsw46","6nsrydry","zwse6nwse67","ryndryzn47","74ndryry","ze467nery","zw47e47rn","zen47zzedzrybr","w46hnrwty","enryery","wa46je46","we4hn6ye575757","w46eryny","zsweny4r674m7","w50w46","Tfhdh","set sewtwete et eet g","rwry6rnyrytr","w34wettww se ","67346erreyr"]
  setInterval(() => {
bot1.channels.get("518670370472067074").send(`${igni[Math.floor(Math.random() *igni.length)]}`);
},1500);
});
bot1.on('message', message => {
     if (message.content === "*d") {
message.channel.send('#daily');
    }
});
bot1.on('message', message => {
    if (message.content === "*c") {
message.channel.send('#credits');
    }
});
bot1.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("1say")) {
if(message.author.id !== '359983506383699970') return;
if(!args) return;
message.channel.send(`${args}`);
}
});

bot1.login(process.env.spam1);
/////////////////////////////////////////////////////////////////////////////////////////////////////
const bot2 = new Discord.Client();
bot2.on('ready', () => {
  console.log(`Logged in as ${bot2.user.tag}!`);
});
bot2.on('ready', async () => {
    let igni = ["w3h5456whehaeryvaervyaer6 <@474730486eryvaer1265","qawesytgurtufdtysrtvuyaaeryvetnsrysry","etnseter484aseyvaer6yq546q356345234q6q	346ayvaeryaveryaervyaeryvaervyaervyearyrvnsr","zynrdyutyudsuruyy56w547wfgnydrydfh","zdfnydynfuyrtyrwtsyyw56dy","drnydryn","drynsw46","6nsrydry","zwse6nwse67","ryndryzn47","74ndryry","ze467nery","zw47e47rn","zen47zzedzrybr","w46hnrwty","enryery","wa46je46","we4hn6ye575757","w46eryny","zsweny4r674m7","w50w46","Tfhdh","set sewtwete et eet g","rwry6rnyrytr","w34wettww se ","67346erreyr"]
  setInterval(() => {
bot2.channels.get("518670405041520659").send(`${igni[Math.floor(Math.random() *igni.length)]}`);
},1500);
});
bot2.on('message', message => {
     if (message.content === "*d") {
message.channel.send('#daily');
    }
});
bot2.on('message', message => {
    if (message.content === "*c") {
message.channel.send('#credits');
    }
});
bot2.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("1say")) {
if(message.author.id !== '359983506383699970') return;
if(!args) return;
message.channel.send(`${args}`);
}
});

bot2.login(process.env.spam2);
/////////////////////////////////////////////////////////////////////////////////
const bot3 = new Discord.Client();
bot3.on('ready', () => {
  console.log(`Logged in as ${bot3.user.tag}!`);
});
bot3.on('ready', async () => {
    let igni = ["w3h5456whehaeryvaeryaervyaer6 <@474730486eryvaeryvaeryvaey65","qawfdtysrtvuyayaeryvaeryvaeryaeryvaesrysry","eaer6yq546q356345234q6yvaervyaervyearyaervnsr","zynrdyutyudsuruyrtsy56w547w4ysreygrtwfgnydrydfh","zdfnydynfuyrtyrwtsywrtyw56dy","drnydryn","drynsw46","6nsrydry","zwse6nwse67","ryndryzn47","74ndryry","ze467nery","zw47e47rn","zen47zzedzrybr","w46hnrwty","enryery","wa46je46","we4hn6ye575757","w46eryny","zsweny4r674m7","w50w46","Tfhdh","set sewtwete et eet g","rwry6rnyrytr","w34wettww se ","67346erreyr"]
  setInterval(() => {
bot3.channels.get("518670439401390092").send(`${igni[Math.floor(Math.random() *igni.length)]}`);
},1500);
});
bot3.on('message', message => {
     if (message.content === "*d") {
message.channel.send('#daily');
    }
});
bot3.on('message', message => {
    if (message.content === "*c") {
message.channel.send('#credits');
    }
});
bot3.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("1say")) {
if(message.author.id !== '359983506383699970') return;
if(!args) return;
message.channel.send(`${args}`);
}
});

bot3.login(process.env.spam3);
