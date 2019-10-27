const SlackBot = require('slackbots');
const axios = require('axios');

const bot =  new SlackBot({
  //INSERT TOKEN HERE BUT DO NOT UPLOAD TO GIT
	token: 'xoxb-809782627460-797647947938-23QXeP8QcRQ3Pajtqi0fwk8G',
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
  if (message.includes(' chucknorris')) {
    norrisJoke();
  } else if (message.includes(' yomama')) {
    yoMama();
  } else if (message.includes(' random')) {
    nonJoke();
  } else if (message.includes(' help')) {
    runHelp();
  }
}



function norrisJoke() {
	axios.get('http://api.icndb.com/jokes/random').then(res => {
    const joke = res.data.value.joke;

    const params = {
      icon_emoji: ':facepunch:'
    };

    bot.postMessageToChannel('general', `Chuck Norris: ${joke}`, params);
  });
}



function yoMama() {
	axios.get('http://api.yomomma.info').then(res =>  {
		const joke = res.data.joke;

		const params = {
			icon_emoji: ':nail_care:'
		};

		bot.postMessageToChannel('general', `Yo mama: ${joke}`, params);
	});
}




function nonJoke() {
	const params = {
		icon_emoji: 'heart'
	}
  bot.postMessageToChannel('general', 'Chaotic good!', params);
}







// Error handling
bot.on('error', err => console.log(err));


//message handler
bot.on('message', data => {
	if (data.type !== 'message') {
		return;
	}

	handleMessage(data.text);

});
