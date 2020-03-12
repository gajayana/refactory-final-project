<template lang="pug">
  v-container.pb-0.pt-0(fluid)
    v-row(align='center', justify='center', style='height:calc(100vh - 64px);')
      v-form.d-block.pl-4.pr-4(:style='{width:"100%", maxWidth:"480px"}')
        v-card
          v-card-title Catat Masuk
          v-card-text
            v-alert(v-if='error', dense, type='error') {{ error }}
            v-text-field(v-model.trim='email', :disabled='is_processing', label='Email', type='text')
            v-text-field(v-model.trim='password', :disabled='is_processing', label='Sandi', type='password')
          v-card-actions
            v-spacer
            v-btn.white--text(@click='signIn({ email, password })', :disabled='is_processing', :loading='is_processing', color='primary') Masuk
        p.caption.grey--text.mt-4.text-center &copy;2020 Oahemmmm
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  name: 'login',
  computed: {
    ...mapState({
      error: state => state.auth.error,
      form_email: state => state.auth.form_email,
      form_password: state => state.auth.form_password,
      is_processing: state => state.auth.is_processing,
    }),
    email: {
      get() {
        return this.form_email
      },
      set(val) {
        this.setFormEmail(val)
      }
    },
    password: {
      get() {
        return this.form_password
      },
      set(val) {
        this.setFormPassword(val)
      }
    },
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn',
    }),
    ...mapMutations({
      setFormEmail: 'auth/setFormEmail',
      setFormPassword: 'auth/setFormPassword',
    })
  },
}
</script>
