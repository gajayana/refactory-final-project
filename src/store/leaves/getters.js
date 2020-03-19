
export default {
  filteredPersons(state, getters, rootState, rootGetters) {
    if (!state.items) return

    let persons = state.items
      .map((ob) => ({
        department: rootState.users.profiles ? rootGetters['users/personDepartment'](rootState.users.profiles.find(el => el.uuid === ob.uuid ).role) : '',
        email: rootState.users.persons.find(el => el.id === ob.uuid ).email,
        fullname: rootState.users.profiles.find(el => el.uuid === ob.uuid ).fullname,
        image: rootState.users.profiles.find(el => el.uuid === ob.uuid ).image,
        leave_at: ob.leave_at,
        role: rootGetters['users/personRole'](rootState.users.profiles.find(el => el.uuid === ob.uuid ).role),
        status: ob.status,
        telephone: rootState.users.profiles.find(el => el.uuid === ob.uuid ).telephone,
        uuid: ob.uuid,
      }))

    if (state.filter_group) persons = persons.filter(ob => ob.status === state.filter_group)
    if (state.filter_str ) persons = persons.filter( (ob) => ob.fullname.toLowerCase().includes(state.filter_str.toLowerCase()) )

    return persons
  },
}
