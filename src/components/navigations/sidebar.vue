<template lang="pug">
  v-navigation-drawer(v-model='drawer', app)
    v-card(v-if='user && user_profile && userGroup', flat, tile)
      v-img.align-end.white--text(:alt='user_profile.fullname', :src='user_profile.image', aspect-ratio='1', gradient='to bottom, rgba(100,115,201,.33), rgba(25,32,72,.7)')
        v-card-text
          h1.d-block.mb-2 {{ user_profile.fullname }}
          p.caption.d-block.mb-0 {{ user.email }}
          p.caption.d-block.mb-0 Grup: {{ userGroup[0].label }}

    v-list(v-if='navItems', dense, nav)
      v-list-item-group
        v-list-item(v-for='(item, key) in navItems', :key='`nav-${key}`', :to='item.to')
          v-list-item-content
            v-list-item-title {{ item.label }}
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'NavigationSidebar',
  computed: {
    ...mapGetters({
      navItems: 'navigations/items',
      userGroup: 'auth/userGroup',
    }),
    ...mapState({
      drawer_sidebar: state => state.navigations.drawer_sidebar,
      // groups: state => state.groups.items,
      user: state => state.auth.user,
      user_profile: state => state.auth.user_profile,
    }),
    drawer: {
      get() {
        return this.drawer_sidebar
      },
      set(val) {
        this.setDrawerSidebar(val)
      }
    },
    // userGroup() {
    //   if ( !this.user_profile || !this.groups ) return

    //   const group = this.groups.filter( ob => ob.id === this.user_profile.group[0] )
    //   return group[0]
    // },
  },
  methods: {
    ...mapMutations({
      setDrawerSidebar: 'navigations/setDrawerSidebar'
    })
  }
}
</script>
