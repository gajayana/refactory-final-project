import getUnixTime from 'date-fns/getUnixTime'
export default {
  upcoming(state) {
    if (!state.items) return

    const today = getUnixTime(new Date())

    return state.items
      .sort((a, b) => {
        if (a.date > b.date) return 1
        if (a.date < b.date) return -1
        return 0
      })
      .filter((ob) => {
        return today < getUnixTime(new Date(ob.date))
      })
      .slice(0, 5)
  }
}
