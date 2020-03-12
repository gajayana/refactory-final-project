export default {
  admins(state) {
    return state.profiles.filter(ob => ob.group[0] === 1)
  },
  applicants(state) {
    return state.profiles
      .filter(ob => ob.group[0] === 2)
      .sort((a, b) => {
        if (a.created_at < b.created_at) return 1
        if (a.created_at > b.created_at) return -1
        return 0
      })
  },
  employees(state) {
    return state.profiles.filter(ob => ob.group[0] === 3)
  },
  persons(state) {
    return state.persons
  },
  profiles(state) {
    return state.profiles
  }
}
