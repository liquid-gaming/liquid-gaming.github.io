# liquid-gaming.github.io

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
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
# When you need to update the discord invite link there is three places you need to do it right now.
# First is in src/assets/json/mediaLinks.json in the discord object
# Second is in src/router/index.js and switch it for the discord router
# Third is in public/discord.html and update it in the meta tag
# If need be do a search to make sure we didn't miss any

### Updating Team Members
# Go into the assets/json and open the teamMembers.json
# this file is written in a certain order to follow the chain of command. It goes like so.
# Founders, Administration, Advisors, Staff
# then order them alphabetically.
# Follow the already written naming for their titles, examples: Administrator, Director_of_Recruitment, Director_of_Rust.
# Go to the About.vue in the components folder and check the styles to see if there is one there already for the new member's role. If not add a new one with the same name you used for their role


### Updating Player stats
# Player stats json can be found in the src/assets/json. In that folder there will be the ArchivedStats, the old seasons, and the current stats.
# Archived stats are not to be touched ever.
# Current Stats are updated daily with a python script written by Got2bHockey, ask him for info on that if need be. The bot writes to the top-stats.json and total-stats.json. Do not move or delete these files.
# When creating a new season copy the current top-stats.json and total-stats.json, and create a new folder in the json folder with the following naming convention "SeasonTwo", "SeasonThree", Etc... then paste the two json files in
# the newly created folder.
# Then head to the seasons.vue inside the components folder. When in there import the two new files like so
    import topStats2 from "@/assets/json/SeasonTwo/top-stats.json"
    import totalStats2 from "@/assets/json/SeasonTwo/total-stats.json"
# add these to the data return like so 
    topStatsTwo: topStats2,
    totalStatsTwo: totalStats2,
# then add it to the seasonsList in the mounted hook like we are adding to it below. Make sure it is the newest object in the list so we don't have to sort this.
this.seasonsList.push(
            {
                topStats: this.topStatsTwo,
                totalStats: this.topStatsTwo
            },
            {
                topStats: this.topStatsOne,
                totalStats: this.topStatsOne
            }
        );
#
#