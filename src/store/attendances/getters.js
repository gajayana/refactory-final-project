export default {
  currentAbsentees(state, getters, rootState, rootGetters) {
    if (!rootGetters['users/profiles'] || !state.items) return
    const attendees = state.items[0].attendees.map(ob => ob.uuid)
    let items = []

    rootGetters['users/profiles'].forEach(el => {
      if ( attendees.findIndex(ob => el.uuid === ob ) < 0 && el.group[0] === 3 ) items.push(el)
    });

    return items
  },
  currentAttendees(state, getters, rootState, rootGetters) {
    if (!rootGetters['users/profiles'] || !state.items) return
    return state.items[0].attendees.map((ob) => {
      const person = rootGetters['users/profiles'].find(el => el.uuid === ob.uuid)
      return person
    })
  }
}
