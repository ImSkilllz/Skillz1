const Discord = require('discord.js');
const bot1 = new Discord.Client();
bot1.on('ready', () => {
  console.log(`Logged in as ${bot49.user.tag}!`);
});
bot1.on('ready', async () => {
    let igni = ["w3h5456whehaeryvaervyaervyaer6 <@474730486eryvaeryvaeryvaey787211265","qawes6736735473ytgurtufdtysrtvuyayaeryvaeryvaeryaeryvaeryvetnsrysry","etnseter4848tyusryvaseyvaer6yq546q356345234q6q	346ayvaeryaveryaervyaeryvaervyaervyearyaervnsr","zynrdyutyudsuruyrtsy56w547w4ysreygrtwfgnydrydfh","zdfnydynfuyrtyrwtsywrtyw56dy","drnydryn","drynsw46","6nsrydry","zwse6nwse67","ryndryzn47","74ndryry","ze467nery","zw47e47rn","zen47zzedzrybr","w46hnrwty","enryery","wa46je46","we4hn6ye575757","w46eryny","zsweny4r674m7","w50w46","Tfhdh","set sewtwete et eet g","rwry6rnyrytr","w34wettww se ","67346erreyr"]
  setInterval(() => {
bot49.channels.get("508034950205931531").send(`${igni[Math.floor(Math.random() *igni.length)]}`);
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