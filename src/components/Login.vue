<template>
  <b-container fluid>
    <h1>Login page</h1>
    <b-row class="my-1">
      <b-col sm="12">
        <b-form-input v-model="id.value" :state="id.state" type="text" placeholder="ID" />
      </b-col>
    </b-row>
    <b-row class="my-2">
      <b-col sm="12">
        <b-form-input v-model="password.value" :state="password.state" type="password" placeholder="Password" />
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
      let isValidate = true

      if (!this.id.value) {
        this.id.state = false
        isValidate = false
      } else {
        this.id.state = true
      }

      if (!this.password.value) {
        this.password.state = false
        isValidate = false
      } else {
        this.password.state = true
      }

      if (!isValidate) {
        return false
      }

      this.$router.push('Main')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
