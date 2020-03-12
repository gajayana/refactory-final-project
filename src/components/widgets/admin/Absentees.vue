<template lang="pug">
  v-card
    v-card-title.justify-center
      h3.d-flex Mangkir
    v-card-text
      div.d-flex.flex-wrap.justify-center
        v-avatar(v-for='(person, id) in absentees', :class='{ "ml-n4" : id > 0 }', :key='person.uuid', :style='{ border: "solid 4px #fff"}', :title='person.fullname')
          v-img(:alt='person.fullname', :src='person.image')
      p.text-center(v-if='absentees') {{ absentees.length }} orang
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'widgetAdminAbsentees',
  computed: {
    ...mapGetters({
      absentees: 'attendances/absentees',
    }),
  },
}
</script>
