<template>
  <v-row justify="end" class="pr-sm-6 pr-1">
    <v-dialog v-model="dialog" width="1024">
      <template v-slot:activator="{ props }">
        <div>
          <v-btn
            v-if="!store.auth_token"
            color="primary"
            v-bind="props"
            :small="$vuetify.breakpoint.smAndDown"
            @click="dialog = true"
          >
            login
          </v-btn>
          <div v-if="store.auth_token">
            <v-icon
              right
              :large="$vuetify.breakpoint.smAndUp"
              class="mx-2"
              @click="gotoProfile"
            >
              mdi-account-box
            </v-icon>
            <v-btn
              color="primary"
              :small="$vuetify.breakpoint.smAndDown"
              @click="logout"
            >
              Sign out
            </v-btn>
          </div>
        </div>
      </template>
      <v-card>
        <v-card-title>
          <h4>Upload Docs, or Edit Profile</h4>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                label="Email*"
                type="email"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-if="!forgotP"
                v-model="password"
                label="Password*"
                type="password"
                required
                @keyup.enter="login"
              ></v-text-field>
              <v-row v-if="!forgotP">
                <v-col>Forgot <a @click="forgot">Password?</a></v-col>
              </v-row>
            </v-col>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="!forgotP"
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            v-if="forgotP"
            color="blue-darken-1"
            variant="text"
            @click="forgotP = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            :disabled="isLoading"
            @click="login"
          >
            <span v-if="isLoading">
              <v-progress-circular
                indeterminate
                color="green"
              ></v-progress-circular>
            </span>
            <span v-if="forgotP" @click="sendReset">Send Reset</span>
            <span v-if="!forgotP">Login</span>
          </v-btn>
        </v-card-actions>
        <v-alert
          v-model="errorLogin"
          closable
          close-label="Close Alert"
          density="compact"
          type="info"
          title="Login failed"
          >{{ message }}</v-alert
        >
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { store } from '~/middleware/store.js'
export default {
  data() {
    return {
      store,
      isLoading: false,
      dialog: false,
      email: '',
      password: '',
      errorLogin: false,
      forgotP: false,
      message: '',
    }
  },
  methods: {
    async login() {
      const data = {
        user: {
          email: this.email,
          password: this.password,
        },
      }
      this.isLoading = true
      const result = await store.loginUser(data)
      this.isLoading = false
      if (result.status === 200) {
        this.errorLogin = false
        this.dialog = false
        this.$router.push('/profile')
      } else {
        this.message = 'Please check email and password'
        this.errorLogin = true
      }
    },
    async logout() {
      await store.logoutUser()
      await this.$router.push('/')
    },
    gotoProfile() {
      // removes focus from account icon
      document.activeElement.blur()
      this.$router.push('/profile')
    },
    forgot() {
      this.errorLogin = false
      this.forgotP = true
    },
    async sendReset() {
      const payload = {
        user: {
          email: this.email,
        },
        commit: 'Send me reset password instructions',
      }
      await store.sendResetPword(payload)
      this.forgotP = false
      this.message = 'Please check your email for password reset instructions.'
    },
  },
}
</script>
<style scoped></style>
