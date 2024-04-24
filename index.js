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
    .setAssetsLargeImage('https://media.discordapp.net/attachments/919170276569272340/1232669029139746856/e54afabd75adb33464e85f2687b43f87.gif?ex=662a4bfe&is=6628fa7e&hm=0309d5dd968473ad8c25371c732a007c83800b7ffab79a4b2665a23929b86c95&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('『 𝗝𝗕𝗜𝗦𝗖𝗢𝗠𝗜𝗡𝗚 』') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/919170276569272340/1232669029676748810/Hand.gif?ex=662a4bfe&is=6628fa7e&hm=a4222b3bb32491d8a919d16af9bb6cf8b02cce08cdca0abeac3ca84c6f45b22b&=&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('P') //Text when you hover the Small image
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
