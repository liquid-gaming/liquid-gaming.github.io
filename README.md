# liquid-gaming.github.io

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
For Windows Only: Replace package.json to use "set" instead of "export" at the top. Revert this before commiting. 
```
"serve": "set NODE_OPTIONS=--openssl-legacy-provider && set UV_USE_IO_URING=0 && vue-cli-service serve",
"build": "set NODE_OPTIONS=--openssl-legacy-provider && set UV_USE_IO_URING=0 && vue-cli-service build",
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Discord Links
## Updating Discord Links

When you need to update the discord invite link there is three places you need to do it right now.
- First is in `src/assets/json/mediaLinks.json` in the discord object
- Second is in `src/router/index.js` and switch it for the discord router
- Third is in `public/discord.html` and update it in the meta tag

### Updating Team Members
Found in the `assets/json` open the teamMembers.json
- This file is written in a certain order to follow the chain of command. It goes like so.
- Founders, Administration, Advisors, Staff then order them alphabetically.
- Follow the existing written naming for their titles, examples: Administrator, Director_of_Recruitment, Director_of_Rust.
- Go to the About.vue in the components folder and check the styles to see if there is one there already for the new member's role. If not add a new one with the same name you used for their role

### Updating Player stats
Player stats json can be found in the `src/assets/json`. In that folder there will be the the current stats and the previous stats.
- To update the previous season copy the current seasons top stats and total stats into the files located under the previous stats folder.
- Current Stats are updated daily with a python script written by Got2bHockey, ask him for info on that if need be. The bot writes to the `top-stats.json` and `total-stats.json`. Do not move or delete these files.

### Updating countdown to new season
Find the Countdown component call on line 20 of PlayerStats and change the new date to 3 months after the old season finished.

### Updating Server Rules
Found within `src/assets/json/gameServerRules.json`

```
