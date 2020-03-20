export default {
  admins(state) {
    if (!state.profiles) return
    return state.profiles.filter(ob => ob.group[0] === 1)
  },
  applicants(state, getters) {
    if ( !state.profiles || !state.persons ) return
    return state.profiles
      .filter(ob => ob.group[0] === 2)
      .map((ob) => {
        const department = { department: getters.personDepartment(ob.role) }
        const email = { email: getters.personEmail(ob.uuid) }
        const role = { role : getters.personRole(ob.role) }

        Object.assign(ob, department, email, role)
        return ob
      })
      .sort((a, b) => {
        if (a.created_at < b.created_at) return 1
        if (a.created_at > b.created_at) return -1
        return 0
      })
  },
  employees(state, getters) {
    if (!state.profiles) return
    return state.profiles
      .filter(ob => ob.group[0] === 3)
      .map((ob) => {
        const department = { department: getters.personDepartment(ob.role) }
        const email = { email: getters.personEmail(ob.uuid) }
        const role = { role : getters.personRole(ob.role) }

        Object.assign(ob, department, email, role)
        return ob
      })
      .sort((a, b) => {
        if (a.fullname > b.fullname) return 1
        if (a.fullname < b.fullname) return -1
        return 0
      })
  },
  filteredApplicants(state, getters) {
    if (!getters.applicants) return
    let persons = getters.applicants

    if ( state.filter_group ) persons = persons.filter( ob => ob.group[1] === state.filter_group )
    if ( state.filter_str ) persons = persons.filter( (ob) => ob.fullname.toLowerCase().includes(state.filter_str.toLowerCase()) )
    return persons
  },
  filteredEmployees(state, getters) {
    if (!getters.employees) return
    let persons = getters.employees
    if ( state.filter_group ) persons = persons.filter( ob => ob.group[1] === state.filter_group )
    if ( state.filter_str ) persons = persons.filter( (ob) => ob.fullname.toLowerCase().includes(state.filter_str.toLowerCase()) )
    return persons
  },
  personEmail:(state) => (uuid) => {
    if (!state.persons) return
    return state.persons
      .find(ob => ob.id === uuid)
      .email
  },
  personDepartment:(state, getters, rootState) => (role) => {
    if (!rootState.roles.items || !role) return
    const res = rootState.roles.items.find(ob => ob.id === role[0])
    return res.label
  },
  personRole:(state, getters, rootState ) => (role) => {
    if (!rootState.roles.items || !role) return
    const res = rootState.roles.items.find(ob => ob.id === role[1])
    return res.label
  },
  // persons(state) {
  //   return state.persons
  // },
  profiles(state) {
    return state.profiles
  }
}
