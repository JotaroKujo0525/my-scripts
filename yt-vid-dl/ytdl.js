//This was coded thru termux neovim
//Install enquirer and ytdl-core before running
const fs = require('fs')
const { Input } = require('enquirer');
const prompt = new Input({
  name: 'response',
  message: 'Please put your youtube link'
});
 
prompt.run()
  .then(response => {
	  const ytdl = require('ytdl-core')
	  const { Input } = require('enquirer')

	  const prompt = new Input({
		  name: 'name',
		  message: 'Please put the desired name you want for the file'
	  })

	  prompt.run()
	  .then(name => {
		  	  ytdl(`${response}`).pipe(fs.createWriteStream(`${name}.mp4`))
  })
  })  
  .catch(console.error);  

