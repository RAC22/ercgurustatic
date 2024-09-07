import { reactive } from 'vue'
import axios from 'axios'

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : 'https://ercguruapi.herokuapp.com/'

export const store = reactive({
  auth_token: null,
  user: {
    id: null,
    username: null,
    email: null,
  },
  clients: [],
  Password: '',
  confPassword: '',
  started_before_feb_2020: Boolean,
  fte_2019: String,
  companyName: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNum: '',
  estimate: '',
  numEmployees2020: 0,
  numEmployees2021: 0,
  optIn: false,
  government_entity: Boolean,
  w2_wages_paid: Boolean,
  gov_lockdown_qualifier: false,
  q2_gov_lockdown_qualifier_2020: false,
  q3_gov_lockdown_qualifier_2020: false,
  q4_gov_lockdown_qualifier_2020: false,
  q1_gov_lockdown_qualifier_2021: false,
  q2_gov_lockdown_qualifier_2021: false,
  q3_gov_lockdown_qualifier_2021: false,
  rev_reduction: false,
  q2_revenue_reduction_2020: false,
  q3_revenue_reduction_2020: false,
  q4_revenue_reduction_2020: false,
  q1_revenue_reduction_2021: false,
  q2_revenue_reduction_2021: false,
  q3_revenue_reduction_2021: false,
  state: String,
  supply_disruption: false,
  q2_supply_disruption_2020: false,
  q3_supply_disruption_2020: false,
  q4_supply_disruption_2020: false,
  q1_supply_disruption_2021: false,
  q2_supply_disruption_2021: false,
  q3_supply_disruption_2021: false,
  getAuthToken() {
    return this.auth_token
  },
  getUserEmail() {
    return this.user?.email
  },
  getUserID() {
    return this.user?.id
  },
  isLoggedIn() {
    const loggedOut =
      this.auth_token === null || this.auth_token === JSON.stringify(null)
    return !loggedOut
  },
  registerUser(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}users`, payload)
        .then((response) => {
          this.setUserInfo(response)
          resolve(response)
        })
        .catch((error) => {
          resolve(error)
        })
    })
  },
  updateUser(payload) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${BASE_URL}users/update`, payload)
        .then((response) => {
          this.updateUserInfo(response)
          resolve(response)
        })
        .catch((error) => {
          resolve(error)
        })
    })
  },
  uploadFiles(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}users/upload`, payload, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          this.updateUserInfo(response)
          resolve(response)
        })
        .catch((error) => {
          resolve(error)
        })
    })
  },
  loginUser(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}users/sign_in`, payload)
        .then((response) => {
          this.setUserInfo(response)
          resolve(response)
        })
        .catch((error) => {
          resolve(error)
        })
    })
  },
  logoutUser() {
    const config = {
      headers: {
        authorization: this.auth_token,
      },
    }
    return new Promise((resolve, reject) => {
      axios
        .delete(`${BASE_URL}users/sign_out`, config)
        .then(() => {
          this.resetUserInfo()
          resolve()
        })
        .catch((error) => {
          this.resetUserInfo()
          resolve(error)
        })
    })
  },
  loginUserWithtoken(payload) {
    const config = {
      headers: {
        Authorization: payload,
      },
    }
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}member-data`, config)
        .then((response) => {
          this.setUserInfoFromToken(response)
          resolve(response)
        })
        .catch((error) => {
          resolve(error)
        })
    })
  },
  sendResetPword(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}users/password`, payload)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          resolve(error)
        })
    })
  },
  updateUserInfo(data) {
    this.user = data?.data?.user
  },
  setUserInfo(data) {
    this.user = data?.data?.user
    this.auth_token = data?.headers?.authorization
    axios.defaults.headers.common.Authorization = data?.headers?.authorization
    localStorage.setItem('auth_token', data?.headers?.authorization)
  },
  setUserInfoFromToken(data) {
    this.user = data?.data?.user
    this.auth_token = localStorage.getItem('auth_token')
  },
  resetUserInfo() {
    this.user = {}
    this.auth_token = null
    axios.defaults.headers.common.Authorization = null
    localStorage.removeItem('auth_token')
  },
  getAffiliateClients(affiliateName) {
    const body = {
      params: {
        name: affiliateName,
      },
    }
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}affiliateClients`, body)
        .then((response) => {
          this.clients = []
          this.clients = response?.data?.clients
          resolve(response)
        })
        .catch((error) => {
          resolve(error)
        })
    })
  },
})
