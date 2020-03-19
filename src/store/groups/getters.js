export default {
  applicants(state) {
    return state.items.filter(ob => ob.group === 2)
  },
  employees(state) {
    return state.items.filter(ob => ob.group === 3)
  }
}
