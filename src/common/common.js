const domain = 'http://localhost:9000'
const fetchOption = {
  // method: 'GET',
  headers: {
    'Accept': 'application/json'
  },
  mode: 'no-cors', // TODO: local 테스트는 어떻게 처리할까?
  cache: 'no-cache',
  credentials: 'omit' // same-origin
}

export default {
  methods: {
    request: async function (url) {
      console.log('request ' + domain + url)
      console.log(fetchOption)
      const resData = fetch(domain + url, fetchOption)
      return resData
    }
  }
}
