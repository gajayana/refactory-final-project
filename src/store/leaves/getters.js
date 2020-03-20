
export default {
  filteredPersons(state, getters, rootState) {
    if (!state.items || !rootState.users.profiles) return

    let persons = state.items
      .map((ob) => {
        const profile = rootState.users.profiles.find(el => el.uuid === ob.uuid )
        return Object.assign(ob, profile)
      })

    if (state.filter_group) persons = persons.filter(ob => ob.status === state.filter_group)
    if (state.filter_str ) persons = persons.filter( (ob) => ob.fullname.toLowerCase().includes(state.filter_str.toLowerCase()) )

    return persons
  },
}
