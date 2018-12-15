const Discord = require('discord.js');
const bot1 = new Discord.Client();
bot1.on("ready", async () => {
  console.log(`Username: ${bot1.user.tag}`);
  console.log(`on: ${bot1.guilds.size} guild(s)`);
  let guildid = '520995407527149568',
      cid = '520995407527149572';
  let guild = bot1.guilds.get(guildid);
  let channel = guild.channels.find(c => c.id == cid);
  let size = 0;
  setInterval(function() {
    let m = ['Hello guys', 'How are you today?', 'I am fine thanks <3', 'I\'m glad to see you happy', 'Thanks teacher for letting me stay.', 'Your welome my lady.', 'Hello, from the other side..', 'Im lonely. ;( SAD!']
  let m2 = Math.floor(Math.random() * m.length);
  let message = m[m2]; 
    size++;
    channel.send(`[ ${size} ] ` + Math.floor(Math.random() * Math.floor(24324319434)) + ` - ${message}`, {file: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg"})
  }, 61500);
  setInterval(function() {
    channel.send(`#daily`)
  }, 60000 * 60 * 12)
});

bot1.login(process.env.spam1);
/////////////////////////////////////////////////////////////////////////////////////////////////////
const bot2 = new Discord.Client();
bot2.on("ready", async () => {
  console.log(`Username: ${bot2.user.tag}`);
  console.log(`on: ${bot2.guilds.size} guild(s)`);
  let guildid = '520995407527149568',
      cid = '520995407527149572';
  let guild = bot2.guilds.get(guildid);
  let channel = guild.channels.find(c => c.id == cid);
  let size = 0;
  setInterval(function() {
    let m = ['Hello guys', 'How are you today?', 'I am fine thanks <3', 'I\'m glad to see you happy', 'Thanks teacher for letting me stay.', 'Your welome my lady.', 'Hello, from the other side..', 'Im lonely. ;( SAD!']
  let m2 = Math.floor(Math.random() * m.length);
  let message = m[m2]; 
    size++;
    channel.send(`[ ${size} ] ` + Math.floor(Math.random() * Math.floor(24324319434)) + ` - ${message}`, {file: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg"})
  }, 61500);
  setInterval(function() {
    channel.send(`#daily`)
  }, 60000 * 60 * 12)
});

bot2.login(process.env.spam2);
/////////////////////////////////////////////////////////////////////////////////
const bot3 = new Discord.Client();
bot3.on("ready", async () => {
  console.log(`Username: ${bot3.user.tag}`);
  console.log(`on: ${bot3.guilds.size} guild(s)`);
  let guildid = '520995407527149568',
      cid = '520995407527149572';
  let guild = bot3.guilds.get(guildid);
  let channel = guild.channels.find(c => c.id == cid);
  let size = 0;
  setInterval(function() {
    let m = ['Hello guys', 'How are you today?', 'I am fine thanks <3', 'I\'m glad to see you happy', 'Thanks teacher for letting me stay.', 'Your welome my lady.', 'Hello, from the other side..', 'Im lonely. ;( SAD!']
  let m2 = Math.floor(Math.random() * m.length);
  let message = m[m2]; 
    size++;
    channel.send(`[ ${size} ] ` + Math.floor(Math.random() * Math.floor(24324319434)) + ` - ${message}`, {file: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg"})
  }, 61500);
  setInterval(function() {
    channel.send(`#daily`)
  }, 60000 * 60 * 12)
});

bot3.login(process.env.spam3);
