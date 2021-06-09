<template>
  <div class="home background-image">
    <v-container>
      <div class="announcements-card">
        <v-row align="left" justify="left">
          <v-flex just>
            <v-container>
              <v-row align="left" justify="left">
                <v-card :elevation="5" class="recruitment-card">
                    <div 
                    :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                    Squad Servers Map Rotation
                    </div>
                    <div>
                        <v-snackbar
                            v-model="snackbar"
                            absolute
                            top
                            right
                            color="success"
                            >
                            <span>Submission successful!</span>
                            <v-icon dark>
                                mdi-checkbox-marked-circle
                            </v-icon>
                            </v-snackbar>
                            <v-form
                            ref="form"
                            @submit.prevent="submit"
                            >
                            <v-container fluid>
                                <v-row>
                                <v-col
                                    cols="12"
                                    sm="12"
                                >
                                    <v-text-field
                                    v-model="form.userName"
                                    :rules="rules.userName"
                                    color="teal"
                                    required
                                    >
                                    <template v-slot:label>
                                        <div>
                                        Username <small>Required</small>
                                        </div>
                                    </template>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                    v-model="form.description"
                                    :rules="rules.description"
                                    color="teal"
                                    required
                                    >
                                    <template v-slot:label>
                                        <div>
                                        Map Roation Description <small>Required</small>
                                        </div>
                                    </template>
                                    </v-textarea>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                >
                                    <v-slider
                                    v-model="form.age"
                                    :rules="rules.age"
                                    color="teal"
                                    label="Age"
                                    hint="Be honest"
                                    min="1"
                                    max="100"
                                    thumb-label
                                    ></v-slider>
                                </v-col>
                                </v-row>
                            </v-container>
                            <v-card-actions>
                                <v-btn
                                text
                                @click="resetForm"
                                >
                                Cancel
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                :disabled="!formIsValid"
                                text
                                color="teal"
                                type="submit"
                                >
                                Submit
                                </v-btn>
                            </v-card-actions>
                            </v-form>
                    </div>
                </v-card>
              </v-row>
            </v-container>
          </v-flex>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
  export default {
    name: 'Rules',
    data () {
      const defaultForm = Object.freeze({
        userName: '',
        description: '',
        age: null,
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          age: [
            val => val > 10 || `Be older...`,
          ],
          userName: [val => (val || '').length > 0 || 'This field is required'],
          description: [val => (val || '').length > 0 || 'This field is required'],
        },
        conditions: false,
        snackbar: false,
        terms: false,
        defaultForm,
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.userName &&
          this.form.description
        )
      },
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      },
    },
  }
</script>

<style lang="css">
  .background-image{
    background-image: url('~@/assets/escheresque_ste.png');
    background-repeat: repeat;
    height: 100% !important;
  }
  .announcements-card{
    border-radius: 20px !important;
    margin-top: 45px !important;
    padding:35px !important; 
  }
  .v-card__text,
.v-card__title {
  word-break: normal !important;
}
.recruitment-card{
  background:#222222 !important;
  padding:30px !important;
  border-radius: 10px !important;
  margin:0 10px 0 10px !important;
  width:100% !important;
}
</style>