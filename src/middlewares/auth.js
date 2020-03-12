export default function( { next } ) {
  if ( !window.$cookies.isKey('user') ) {
    return next({
      name: 'login'
    })
  }

  next()
}
