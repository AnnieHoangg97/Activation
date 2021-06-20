const axios = require('axios')
const APIURL = 'https://lifeadminweb.azurewebsites.net/api'

export const requestsMixin = {
  methods: {
    generatedCard (data) {
      return axios.post(APIURL + '/efulfillment/generate-public-card', data)
    }
  }
}
