const SlackBot = require('slackbots');
const axios = require('axios');

const bot =  new SlackBot({
  //INSERT TOKEN HERE BUT DO NOT UPLOAD TO GIT
	token: 'xoxb-809782627460-797647947938-0nZ2GSiiFOKj1He39O5DiKzC',
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

function norrisJoke () {
	axios.get('http://api.icndb.com/jokes/random').then(res => {
    const joke = res.data.value.joke;

    const params = {
      icon_emoji: ':laughing:'
    };

    bot.postMessageToChannel('general', `Chuck Norris: ${joke}`, params);
  });
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
