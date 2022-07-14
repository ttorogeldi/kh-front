<template>
  <div>
    <v-card min-height="800" color="#214a3b" class="dark--overlay pt-15">
      <v-container class="container-custom">
        <v-row class="flex-row-reverse">
          <v-col cols="10" md="4" class="mx-auto mx-md-0">
            <h1 class="heading-11 font-weight-medium pb-3"><strong>CONTACT US</strong></h1>
            <form style="max-width: 400px;">
              <div for="name-4" class="">Your
                name
              </div>
              <input
                  v-model="name"
                  type="text" class="form w-input" maxlength="256" name="name-3" data-name="Name 3"
                  placeholder="Enter your name" id="name-3" required="">
              <div for="email-4"
                   class="formtxt">Email
                Address
              </div>
              <input
                  v-model="email" type="email" class="form w-input" maxlength="256" name="email-3"
                  data-name="Email 3" placeholder="Enter your email" id="email-3" required="">
              <div
                  for="Your-suggests-2" class="text-left">Your suggests
              </div>
              <textarea

                  v-model="suggestion"
                  id="Your-suggests-2"
                  name="Your-suggests-2"
                  maxlength="5000"
                  placeholder="Any suggests..."
                  required=""
                  data-name="Your Suggests 2"
                  class="form w-input"></textarea>
              <v-btn color="#d2af5d" class="white--text font-weight-bold" width="100" @click="send()">Send</v-btn>
            </form>
          </v-col>

          <v-col cols="10" md="4" class="mx-auto mx-md-0">
            <div class="div-block-19">
              <h1 class="heading-11 font-weight-medium pb-3"><strong>WHERE TO BUY</strong></h1>
              <div class="text-block-7">Official kyrgyz honey number<br>+996 990 877 888<br>‍<br>ORO GIFT, Erkindik
                boulevard, 21<br>+996 555 80 80 07<br>+996 701 51 51 00<br>‍<br>International Manas Airport, <br>DutyFree
                Shop, 3rd floor, <br>departure lounge.<br>+996 555 800 220
              </div>
              <div class="text-block-6">Togolok Moldo, 51</div>
            </div>
          </v-col>
          <v-col cols="10" md="4" class="mx-auto mx-md-0">
            <div class="text-center">
              <a href="#header"><img
                  src="https://uploads-ssl.webflow.com/61667b1657f0ad407368cf7c/620b94ca5f9d07497b739bec_kyrgyzhoney.svg"
                  loading="lazy" alt="kyrgyzhoney">
              </a>
              <div class="facebook-link">
                <a
                    href="https://www.instagram.com/kyrgyzhoneyofficial/?hl=ru"
                    target="_blank"
                ><img
                    src="https://uploads-ssl.webflow.com/61667b1657f0ad407368cf7c/618a0f44508e1ad4fe407328_instalogoooo.svg"
                    loading="lazy" width="33" alt="kyrgyzhoney"></a>
                <a
                    href="https://business.facebook.com/kyrgyzhoney/"
                    target="_blank"><img
                    src="https://uploads-ssl.webflow.com/61667b1657f0ad407368cf7c/618a112c5af7aa5e715b0ebd_facebooklogo.svg"
                    loading="lazy" width="31" alt="kyrgyzhoney" class="facebook-link"></a></div>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </v-card>


  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FooterComponent",
  data() {
    return {
      name: '',
      email: '',
      suggestion: ''
    }
  },
  methods: {
    send() {
      if(this.email==='')
        this.$toast.error('Please fill out the form')
      else
      axios
          .post('http://ttorogf2.beget.tech/api/posts?name=' +
              this.name + '&email=' + this.email + '&suggestion=' + this.suggestion)
          .then(res => {
            this.name = ''
            this.email = ''
            this.suggestion = ''
            this.$toast.success('Message sent')
            console.log(res)
          })
    }
  }
}
</script>

<style scoped>
.form {
  width: 400px;
  display: block;
  border-radius: 7px;
}

.w-input, .w-select {
  display: block;
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  vertical-align: middle;
  background-color: #ffffff;
  border: 1px solid #cccccc;
}

.container-custom {
  text-align: left;
  color: #d2af5d;
  text-transform: uppercase;
}

</style>
