<template>
  <b-container fluid class="center">
    <b-img class="login-logo" src="/static/images/logo.png" fluid-grow alt="logo" />
    <b-row class="my-1">
      <b-col sm="12">
        <b-form-input v-model="id.value"
                      :state="id.state"
                      v-on:keyup.native="handleInputId"
                      type="text"
                      placeholder="ID" />
      </b-col>
    </b-row>
    <b-row class="my-2">
      <b-col sm="12">
        <b-form-input v-model="password.value"
                      :state="password.state"
                      v-on:keyup.native="handleInputPassword"
                      type="password"
                      placeholder="Password" />
      </b-col>
    </b-row>
    <b-button @click="handleLogin" size="lg" variant="success" block>Login</b-button>
  </b-container>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      id: {
        value: '',
        state: null
      },
      password: {
        value: '',
        state: null
      }
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    handleLogin: function (event) {
      console.log('handleLogin')
      console.log(this.id, this.password)
      if (this.id.state && this.password.state) {
        this.$router.push('Main')
      }
    },
    handleInputId (event) {
      console.log('handleInputId', event.key)
      if (event.key === 'Enter') {
        this.handleLogin()
        return false
      }
      this.id.state = this.id.value.length > 2
      console.log(this.id.state)
      return this.id.state
    },
    handleInputPassword () {
      console.log('handleInputPassword', event)
      if (event.key === 'Enter') {
        this.handleLogin()
        return false
      }
      this.password.state = this.password.value.length > 5
      console.log(this.password.state)
      return this.password.state
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  text-align: center;
  width: 50%;
}

.login-logo {
  padding-top: 20%;
  padding-bottom: 1.5rem;
}
</style>
