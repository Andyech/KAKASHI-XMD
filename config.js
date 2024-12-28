const fs = require('fs-extra');
if (fs.existsSync('config.env'))
	require('dotenv').config({ path: __dirname + '/config.env' });

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER?.split(',');
global.mongodb =
	process.env.MONGODB_URI ||
	'mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama';
global.port = process.env.PORT || 5000;
global.email = 'sam@secktor.live';
global.github = 'https://github.com/Andyech/KAKASHI-XMD';
global.location = 'Sultanpur IN';
global.gurl = 'https://instagram.com/'; // add your username
global.sudo = process.env.SUDO || '256701583113';
global.devs = '263788521064';
global.website = 'https://github.com/Andyech/KAKASHI-XMD';
global.THUMB_IMAGE =
	process.env.THUMB_IMAGE ||
	'https://raw.githubusercontent.com/Kakashibot/Brandimages/main/logos/SocialLogo%201.png';

module.exports = {
	botname: process.env.BOT_NAME || 'KAKASHI-XMD',
	ownername: process.env.OWNER_NAME || 'Project-x',
	OWNER_NUMBER: process.env.OWNER_NUMBER || '',
	sessionName: process.env.SESSION_ID || '',
	author: (process.env.PACK_INFO?.split(';') || [])[0] || 'SoloLord201',
	auto_read_status: process.env.AUTO_READ_STATUS || false,
	packname: (process.env.PACK_INFO?.split(';') || [])[1] || 'KAKASHI-XMD',
	autoreaction: process.env.AUTO_REACTION || false,
	antibadword: process.env.ANTI_BAD_WORD || 'nobadwordsuntilyouputabadwordherelol',
	alwaysonline: process.env.ALWAYS_ONLINE || false,
	antifake: process.env.FAKE_COUNTRY_CODE || '1000',
	readmessage: process.env.READ_MESSAGE || false,
	auto_status_saver: process.env.AUTO_STATUS_SAVER || false,
	HANDLERS: process.env.PREFIX || ['.'],
	warncount: process.env.WARN_COUNT || 3,
	disablepm: process.env.DISABLE_PM || false,
	levelupmessage: process.env.LEVEL_UP_MESSAGE || false,
	antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
	antilinkaction: process.env.ANTILINK_ACTION || 'remove',
	BRANCH: 'main',
	ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
	autobio: process.env.AUTO_BIO || false,
	OPENAI_API_KEY: process.env.OPENAI_API_KEY || false,
	heroku: process.env.HEROKU || false,
	HEROKU: {
		HEROKU: process.env.HEROKU || false,
		API_KEY: process.env.HEROKU_API_KEY || '',
		APP_NAME: process.env.HEROKU_APP_NAME || '',
	},
	VERSION: process.env.VERSION || 'v.0.0.8',
	LANG: process.env.THEME || 'KAKASHI',
	WORKTYPE: process.env.WORKTYPE || 'public',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update '${__filename}'`);
	delete require.cache[file];
	require(file);
});
