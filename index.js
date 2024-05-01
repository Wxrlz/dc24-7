const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keep_alive = require('./keep_alive.js')
function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Bangkok', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1156558664119885854')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/discord/') //Must be a youtube video link 
    .setState('『 𝙒𝙭𝙧𝙡𝙯𝙖𝙞𝙣𝙜 𝙎𝙩𝙖𝙧 』')
    .setName('W')
    .setDetails(`•${formatTime()}• 『 𝙅𝘽_𝙘𝙢𝙧 』`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/919170276569272340/1235264843536142426/bdd09e06930b9fd2bac94b71428cab0f.gif?ex=6633bd88&is=66326c08&hm=ef4e13881acfed6b98286fb473984b001980139c386fda327d581ad83ec94148&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('『 𝗝𝗕𝗜𝗦𝗖𝗢𝗠𝗜𝗡𝗚 』') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/919170276569272340/1235264844010360994/bdd3360a05b0c02cc9cc766a73bc75fc.gif?ex=6633bd88&is=66326c08&hm=57973da8d375cb9de67823df37bc0ed4c2153e0364b5548d68812df067d5ab0a&=') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Ma money on the floor if u want') //Text when you hover the Small image
    .addButton('˚ INSTARGRAM 🕷 ˚ ', 'https://www.instagram.com/jxnla_bxnz.xyz/')
    .addButton('˚ SOUNDCLOUD ✰ ˚', 'https://soundcloud.com/wxnz-653259588');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `•${newTime}• 『 𝙅𝘽_𝙘𝙢𝙧 』`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
