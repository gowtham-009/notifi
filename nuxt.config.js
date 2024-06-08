import fs from 'fs';

export default {
  // Global page headers
  head: {
    title: 'pushnoti',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: [],

  // Modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyCcb47K-WJe8_zJiGbofJESClMcJyMajd4",
      authDomain: "push-notification-22b2e.firebaseapp.com",
      projectId: "push-notification-22b2e",
      storageBucket: "push-notification-22b2e.appspot.com",
      messagingSenderId: "572550963993",
      appId: "1:572550963993:web:f6d5cb37e2e6cccb951b88",
      measurementId: "G-K2VQ2C6G72"
    },
    services: {
      messaging: {
        createServiceWorker: true,
        fcmPublicVapidKey: 'BE8UkWJvZKUWqZF_RWGjo0gts0A8LLywmq0KV475TZh5JjRmrXvAll3ESjV0Evt_xblxetQ3c2LhvyXo3y2-th0',
        inject: fs.readFileSync('./static/firebase-messaging-sw.js', 'utf8')
      }
    }
  },

  // Axios module configuration
  axios: {
    baseURL: '/',
  },

  // Build Configuration
  build: {}
}
