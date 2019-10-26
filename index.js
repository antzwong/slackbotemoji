const SlackBot = require('slackbots');
const axios = require('axios');

const bot =  new SlackBot({
  //INSERT TOKEN HERE BUT DO NOT UPLOAD TO GIT
	token: '',
	name: 'emojisrgr8'
});

//Start handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':smiley:'
  };
});

//Response Handler
function handleMessage(message) {
  //call whatever ml sentiment voodoo api then have it return an emoji
}

// Error handling
bot.on('error', err => console.log('error'));


//message handler
bot.on('message', (data) => {
	if (data.type !== 'message') {
		return;
	}

	console.log(data);

})
