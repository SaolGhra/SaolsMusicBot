# SaolsMusicBot
A nice an easy to edit Discord.JS bot that you can use in your Discord Servers. It works like a dream.

you will need a Youtube API Key
- https://developers.google.com/youtube/v3/getting-started
You can have an optional Soundcloud client ID with this
- https://github.com/zackradisic/node-soundcloud-downloader#client-id
Discord bot token
- https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot



Create a Config.Json
and fill in this information

```{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "SOUNDCLOUD_CLIENT_ID": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "/",
  "PRUNING": false,
  "STAY_TIME": 30
}```

you will need to install

Node.js v12.0.0 or newer

`npm i fs`
`npm i ffmpeg-static`
`npm i lyrics-finder`
`npm i simple-youtube-api`
`npm i string-progressbar`
`npm i ytdl-core`
`npm i @discordjs/opus`
`npm i array-move`
`npm i erit-ytdl`
`npm i discord.js`

`npm i soundcloud-downloader` - optional

once this has all been completed you can start the bot with node .

you can also use .help for a list of all commands possible
