import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { id } from 'date-fns/locale'
export const dayMonth = {
  filters: {
    dayMonth(dt) {
      const [ year, month, day ] = dt.split('-').map((ob, id) => id === 1 ? parseInt(ob, 10) - 1 : parseInt(ob, 10))
      return format(new Date(year, month, day), 'd MMMM', { locale: id } )
    },
  }
}

export const distanceToNow = {
  filters: {
    distanceToNow(dt) {
      const [ year, month, day ] = dt.split('-').map((ob, id) => id === 1 ? parseInt(ob, 10) - 1 : parseInt(ob, 10))
      return `${formatDistanceToNow(new Date(year, month, day), { locale: id })} lalu`
    }
  }
}
