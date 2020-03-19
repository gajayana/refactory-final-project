<template lang="pug">
  v-container(fluid)
    v-tabs.mb-4(v-if='groups')
      v-tab(v-for='group in groups', @click='setFilterGroup(group.id)', :key='`group-${group.id}`') {{ group.label }}
    v-form
      v-text-field(v-model='search', clearable, label='Cari', solo, type='text')
    v-list(v-if='employees')
      v-list-item(v-for='employee in employees', :key='`employee-${employee.uuid}`', three-line)
        v-list-item-avatar(size='56')
          v-img(:src='employee.image')
        v-list-item-content
          v-list-item-title {{ employee.fullname }}
          v-list-item-subtitle {{ personEmail(employee.uuid) }}
          v-list-item-subtitle {{ employee.telephone }}
        v-list-item-content
          v-list-item-title {{ personDepartment(employee.role) }}
          v-list-item-subtitle {{ personRole(employee.role) }}
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      groups: 'groups/employees',
      employees: 'users/filteredEmployees',
      personEmail: 'users/personEmail',
      personDepartment: 'users/personDepartment',
      personRole: 'users/personRole'
    }),
    ...mapState({
      filter_group: state => state.users.filter_group,
      filter_str: state => state.users.filter_str,
    }),
    search: {
      get() {
        return this.filter_str
      },
      set(val) {
        this.setFilterStr(val)
      },
    }
  },
  methods: {
    ...mapMutations({
      setFilterGroup: 'users/setFilterGroup',
      setFilterStr: 'users/setFilterStr',
    })
  },
}
</script>
