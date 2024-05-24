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
    .setAssetsLargeImage('https://media.discordapp.net/attachments/919170276569272340/1243523501541822545/9b09b7d14aa10f1322b316d160ed480e.gif?ex=6651c902&is=66507782&hm=b97d29f06793908b446a842586e9f1c1b6f2e2deecd8492bd7beafd0cb956247&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('『 𝗝𝗕𝗜𝗦𝗖𝗢𝗠𝗜𝗡𝗚 』') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/919170276569272340/1243523502041075732/dont_have_bg.gif?ex=6651c902&is=66507782&hm=ae6f9c0b00029b03468c7b6545ee70bfa14222ba76171579e023874376f1c6bf&=') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Ma money on the floor if u want') //Text when you hover the Small image
    .addButton('˚ INSTARGRAM 🕷 ˚ ', 'https://www.instagram.com/jxnla_bxnz/')
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
