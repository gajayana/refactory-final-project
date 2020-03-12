export default {
  default(state) {
    state.error = ''
    state.form_email = 'admin@admin.com'
    state.form_password = '123456'
    state.is_processing = false
    state.user = ''
    state.user_profile = ''
  },
  setError(state, payload) {
    state.error = payload
  },
  setFormEmail(state, payload) {
    state.form_email = payload
  },
  setFormPassword(state, payload) {
    state.form_password = payload
  },
  setIsProcessing(state, payload) {
    state.is_processing = payload
  },
  setUser(state, payload) {
    // remove password key
    delete payload.password
    state.user = payload
  },
  setUserProfile(state, payload) {
    state.user_profile = payload
  }
}
