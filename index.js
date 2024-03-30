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
    .setDetails(`•${formatTime()}• 『 𝙅𝘽_𝘾𝟮 』`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/919170276569272340/1220798226551148704/91a5926602d6261eedfe60798a98b096.gif?ex=66103ff2&is=65fdcaf2&hm=463facfca89c738e4c6b8f21530909e568a803276d3a11dc1343623215a1acf5&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('『 𝗝𝗕𝗜𝗦𝗖𝗢𝗠𝗜𝗡𝗚 』') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/919170276569272340/1220394728453963967/dont_have_bg.gif?ex=660ec829&is=65fc5329&hm=ff1a73289d9ba72c237eaf4e848e9aaba9ba10c19f557d8a8e3d1e4b4c8d94e4&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('P') //Text when you hover the Small image
    .addButton('˚ INSTARGRAM 🕷 ˚ ', 'https://www.instagram.com/jxnla_bxnz.xyz/')
    .addButton('SOUNDCLOUD ✰', 'https://soundcloud.com/wxnz-653259588');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `•${newTime}• 『 𝙅𝘽_𝘾𝟮 』`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
