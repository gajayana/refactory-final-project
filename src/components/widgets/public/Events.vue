<template lang="pug">
  v-card
    v-card-title Acara Mendatang
    v-list(v-if='items')
      v-list-item(v-for='item in items', :key='`event-${item.id}`', two-line)
        v-list-item-content
          v-list-item-title {{ item.name }}
          v-list-item-subtitle {{ item.date | dayMonth }}

</template>
<script>
import { mapGetters } from 'vuex'
import { dayMonth } from '@/mixins/filters/dateTimeFormatters'
export default {
  mixins: [ dayMonth ],
  computed: {
    ...mapGetters({
      items: 'events/upcoming',
    })
  }
}
</script>
