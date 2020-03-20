<template lang="pug">
  v-container(fluid)
    h1 Kehadiran
    v-simple-table
      thead
        tr
          th Karyawan
          th.text-center(v-for='(item,key) in items', :key='`date-${key}`') {{ item.date }}
      tbody
        tr(v-for='employee in employees', :key='`employee-${employee.uuid}`')
          td {{ employee.fullname }}
          td.pa-0.text-center.white--text(v-for='item in items', :key='`${employee.uuid}-${item.date}`')
            span.d-block.pa-4(:class='isPresent(employee.uuid, item.date) ? "green" : "red"') {{ isPresent(employee.uuid, item.date) ? 'P' : 'A'}}
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      employees: 'users/employees',
    }),
    ...mapState({
      items: state => state.attendances.items,
    })
  },
  methods: {
    isPresent(uuid, date) {
      const item = this.items.find(ob => ob.date === date)
      return item.attendees.findIndex(el => el.uuid === uuid) > -1
    }
  }
}
</script>
