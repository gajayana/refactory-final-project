<template lang="pug">
  v-card
    v-card-title.justify-center
      h3.d-flex Hadir
    v-card-text(v-if='attendees && employees')
      div {{ attendees.length }} / {{ employees.length }}
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'WidgetAdminAttendees',
  computed: {
    ...mapGetters({
      attendees: 'attendances/attendees',
      employees: 'users/employees',
    }),
    ...mapState({
      profiles: state => state.users.profiles,
    }),
  }
}
</script>
