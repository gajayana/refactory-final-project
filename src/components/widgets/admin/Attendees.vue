<template lang="pug">
  v-card
    v-card-title.justify-center
      h3.d-flex Hadir
    v-card-text(v-if='attendees && employees')
      div.display-2.font-weight-bold.text-center
        span {{ attendees.length }}
        span.grey--text.text--lighten-2 /
        span.grey--text.text--lighten-2 {{ employees.length }}
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'WidgetAdminAttendees',
  computed: {
    ...mapGetters({
      attendees: 'attendances/currentAttendees',
      employees: 'users/employees',
    }),
    ...mapState({
      profiles: state => state.users.profiles,
    }),
  }
}
</script>
