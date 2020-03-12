<template lang="pug">
  v-card
    v-card-title Pelamar Baru

    v-list(v-if='items')
      v-list-item(v-for='item in items', :key='`applicant-${item.id}`', two-line)
        v-list-item-content
          v-list-item-title {{ item.fullname }}
          v-list-item-subtitle {{ item.created_at }}
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WidgetAdminNewApplicants',
  computed: {
    ...mapGetters({
      items: 'users/applicants'
    })
  }
}
</script>
