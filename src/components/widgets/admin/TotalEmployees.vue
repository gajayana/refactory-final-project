<template lang="pug">
  v-card
    v-card-title.justify-center
      h3.d-flex Total Karyawan
    v-card-text
      p.ma-0.display-2.font-weight-bold.mb-2.text-center {{ total }}
      p.ma-0.subtitle-1.grey--text.text-center {{ male }} Laki-laki / {{ female }} Perempuan
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'WidgetAdminTotalEmployees',
  computed: {
    ...mapState({
      users: state => state.users.persons,
      profiles: state => state.users.profiles,
    }),
    female() {
      if(!this.profiles) return
      return this.profiles.filter(ob => ob.group[0] === 3 && ob.gender === 'female').length
    },
    male() {
      if(!this.profiles) return
      return this.profiles.filter(ob => ob.group[0] === 3 && ob.gender === 'male').length
    },
    total() {
      if(!this.profiles) return
      return this.profiles.filter(ob => ob.group[0] === 3).length
    }
  },
}
</script>
