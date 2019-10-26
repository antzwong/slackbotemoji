const SlackBot = require('slackbots');
const axios = require('axios');

const bot =  new SlackBot({
	token: 'xoxb-809782627460-797647947938-vzfyR2hLWrPFB04RiTnGpJJB',
	name: 'emojisrgr8'
});

//Start handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':smiley:'
  };

  bot.postMessageToChannel(
    'general',
    'Moar emojis!',
    params
  );
});

// Error handling
bot.on('error', err => console.log('error'));


//message handler
bot.on('message', (data) => {
	if (data.type !== 'message') {
		return;
	}

	console.log(data);

})