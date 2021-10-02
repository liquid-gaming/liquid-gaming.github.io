<template>
    <v-row align="left" justify="left">
        <v-flex xs12 sm5 md6 lg8 just>
            <v-container>
                <v-row align="left" justify="left">
                    <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                        Who We Are
                    </div>
                    <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75; margin-top:10px;">
                        LiQuid Gaming was created back in May of 2019 by our founding fathers. Since then we have grown to upward of 2500 members in our Discord and over 380 LiQ members.
                        Our board of directors currently consist of the 17 members below, not listed are our many trustworthy admins for our various servers. If you have any questions or
                        inquiries, please contact us in our Discord.
                    </div>
                    <div :class="{'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" style="margin-top:20px;">
                        Our Team
                    </div>
                    <v-container class="my-5">
                        <v-layout row wrap>
                            <v-flex xs12 sm6 md4 lg3  v-for="(person, index) in teamMembers" :key="index">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card class="text-xs-center ma-3" :elevation="hover ? 10 : 2">
                                        <v-card-text>
                                            <div class="subheading">{{person.name}}</div>
                                            <div v-for="(role, index) in person.roles" :key="index" class="grey--text" :class="role.name">
                                                {{role.name.replace(/_/g, " ")}}
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-row>
            </v-container>
        </v-flex>        
        
        <v-spacer></v-spacer>
        <template>
            <v-flex xs12 sm7 md6 lg4 xl3 just>
                <v-card class="discordCard">
                    <div>
                        <v-layout wrap my-5 class="discordLayout">
                            <v-flex justify-center class="mt-2">
                                <v-layout wrap>
                                    <div>
                                        <div :class="{'display-1 font-weight-bold ': $vuetify.breakpoint.smAndUp}">
                                            Join Our Discord
                                        </div>
                                        <div v-if="$vuetify.breakpoint.smAndDown">
                                            <iframe src="https://discordapp.com/widget?id=583882225012047873&theme=dark" width="275" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                                        </div>
                                        <div v-else>
                                            <iframe src="https://discordapp.com/widget?id=583882225012047873&theme=dark" width="322" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                                        </div>
                                    </div>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-card> 
                <div>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="titleColour">Rules</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <template v-slot:actions>
                                    <v-icon color="primary">gavel</v-icon>
                                </template>
                                <v-flex v-for="(rule, index) in discord.rules" :key="index">
                                    <v-card class="card-container discordRules">
                                        <v-card-text class="px-4">
                                            <v-card-title>
                                                <h5 class="titleColour">{{index+1}}: {{rule.title}}</h5>
                                            </v-card-title>
                                            <v-card-subtitle v-if="rule.description != null">
                                                <p>{{rule.description}}</p>
                                            </v-card-subtitle>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
            </v-flex>
        </template>
    </v-row>
</template>

<script>
export default {
    props: {
        discord: {
        type: Object,
        default: function () {
                return {};
            },
        },
        teamMembers: {
        type: Array,
        default: function () {
                return {};
            },
        }
    }
};
</script>

<style lang="scss" scoped>

.v-card__text, .v-card__title {
  word-break: normal !important;
}
.preWrapped{
  white-space: pre-wrap;
}
.flex.xl3{
    flex-basis: 20% !important;
}
.discordCard{
    border-radius: 20px;
}
.discordLayout{
    margin: 15px 0 0 0 !important; 
    height: 400px; 
    width:300px;
}
.discordRules{
    margin:7px;
    background:#262626;
}

.Founder{
    color: mix(#f3482a, grey) !important;
}
.Administrator{
    color: mix(red, grey) !important;
}
.Advisor{
    color: mix(rgb(223, 58, 223), grey) !important;
}
.Director_of_Squad{
    color: rgb(228, 107, 8) !important;
}
.Director_of_Escape_From_Tarkov{
    color: mix(#2292ac, grey) !important;
}
.Director_of_Rust{
    color: mix(#7a22ac, grey) !important;
}
.Director_of_Arma{
    color: mix(#4b0772, grey) !important;
}
.Assistant_Director_of_Arma{
    color: mix(#4b0772, grey) !important;
}
.Director_of_Recruitment{
    color: mix(#3b38dd, grey) !important;
}
.Assistant_Director_of_Recruitment{
    color: mix(#4b0772, grey) !important;
}
.Assistant_Director_of_Competitive{
    color: mix(#7a031f, grey) !important;
}
.Assistant_Director_of_Squad{
    color: rgb(228, 107, 8) !important;
}
.Director_of_Competitive{
    color: mix(#7a031f, grey) !important;
}
</style>
