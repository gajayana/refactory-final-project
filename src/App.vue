<template lang="pug">
  v-app
    navigation-sidebar(v-if='user')

    v-app-bar(app, clipped-right)
      v-app-bar-nav-icon(v-if='user', @click.stop='drawer = !drawer')
      v-toolbar-title hr portal
      v-spacer
      v-btn(v-if='user', @click.prevent='signOut', depressed, fab)
        v-icon mdi-logout
    v-content
      router-view
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import NavigationSidebar from '@/components/navigations/sidebar.vue'
export default {
  name: 'App',
  components: {
    NavigationSidebar
  },
  computed: {
    ...mapState({
      drawer_sidebar: state => state.navigations.drawer_sidebar,
      user: state => state.auth.user,
    }),
    drawer: {
      get() {
        return this.drawer_sidebar
      },
      set(val) {
        this.setDrawerSidebar(val)
      }
    },
  },
  methods: {
    ...mapActions({
      signOut: 'auth/signOut',
    }),
    ...mapMutations({
      setDrawerSidebar: 'navigations/setDrawerSidebar',
    })
  }
};
</script>
