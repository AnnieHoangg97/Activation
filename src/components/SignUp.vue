<template>
  <div id="content" class="site-content">
    <div class="content-wrapper clear">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <article id="post-169" class="post-169 page type-page status-publish hentry">
            <div class="entry-content">
              <div class="gf_browser_chrome gform_wrapper" id="gform_wrapper_2">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group class="text-bold gfield" id="username" label="Member Name *" label-for="usernameInput">
                    <b-form-input id="usernameInput" v-model="form.name" required type="text">
                    </b-form-input>
                  </b-form-group>

                  <b-form-group class="text-bold gfield" id="userEmail" label="Email *" label-for="emailInput">
                    <b-form-input id="emailInput" v-model="form.email" required type="email">
                      </b-form-input>
                  </b-form-group>

                  <b-form-group class="text-bold gfield" id="userPhone" label="Phone *" label-for="phoneInput">
                    <b-form-input id="phoneInput" v-model="form.phone" required type="text">
                    </b-form-input>
                  </b-form-group>

                  <b-form-group class="text-bold gfield" id="userSate" label="State *" label-for="stateSelect">
                    <b-form-select class="customSelect" id="stateSelect" v-model="form.state" :options="states" required
                      value-field="state_name" text-field="state_name">
                      <template #first>
                        <b-form-select-option :value="null" disabled>-- Please select state --</b-form-select-option>
                      </template>
                    </b-form-select>
                  </b-form-group>

                  <br><br>
                  <div>
                    <vue-recaptcha ref="recaptcha" @verify="onVerify" sitekey="6LfTdRQUAAAAAIfWXAJ0h4tv6IYo8NNZ-PoFsNAX">
                    </vue-recaptcha>
                  </div>

                  <br><br>
                  <h6>
                    Click SUBMIT below and your personalized WellCard will be created.
                    You may immediately print your personalized WellCard and a copy will also be sent to the email address you entered above.
                    Please check your SPAM/Junk folder if you do not see your WellCard in your Inbox.
                  </h6>
                  <br>
                  <h5 class="mb-4">
                    It may take up to 30 seconds to personalize your card.
                  </h5>

                  <b-button v-if="loading !== true" class="mt-4" type="submit" variant="primary">Submit</b-button>
                  <b-button v-if="loading === true" variant="primary" disabled>
                    <b-spinner small type="grow"></b-spinner>
                    Loading...
                  </b-button>
                </b-form>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import states from '../assets/data/states.json'
import { requestsMixin } from '../mixin/requestsMixin'

export default {
  name: 'SignUp',
  components: {
    'vue-recaptcha': VueRecaptcha
  },
  mixins: [requestsMixin],
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        state: null
      },
      isRobot: false,
      show: true,
      states,
      isValid: null,
      loading: null
    }
  },
  methods: {
    onVerify (response) {
      if (response) this.isRobot = true
    },
    isNullOrEmpty (value) {
      return (value === '' || value == null || value === undefined)
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.isValid = this.loading = true
      Object.keys(this.form).forEach(key => {
        if (this.isNullOrEmpty(this.form[key])) {
          this.isValid = false
          alert(`You must fill out field ${this.form[key]}!`)
        }
      })
      if (this.isValid === true) {
        this.form.dateCreated = new Date()
        this.generatedCard(this.form).then((response) => {
          console.log(response.data)
          localStorage.setItem('cardInfo', JSON.stringify(response.data))
          this.loading = false
          this.$router.push('/thank-you')
        }).catch(err => {
          alert(`There was an error! ${err.message}!`)
        })
      }
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.from.phone = ''
      this.from.state = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    goTo () {
      this.$router.push('/thank-you')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gfield {
  margin-top: 16px;
  padding-top: 0;
}

.customSelect {
  border: 2px solid #c5c5c5;
  background: #f8f8f8 url("data:image/svg+xml,%3csvg xmlns='https://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;
}

.text-bold {
  font-weight: bold !important;
}

.content-area {
  width: 540px;
}

.content-area,
.featured-page-area,
.footer-widget-area,
.front-page-testimonials-area,
.front-page-widget-area,
.grid-area,
.widget-area {
  padding-top: 0px;
}

.site-info {
  display: none;
}

img {
  height: auto;
  max-width: 300%;
}

.site-content {
  position: absolute;
  background: #fff;
}
</style>
