import JwtDecode from 'jwt-decode'

export default class User {
  static from (token) {
    try {
      let jwt = JwtDecode(token)
      var current_time = new Date().getTime() / 1000;
	    if (current_time > jwt.exp) return null
      else return new User(jwt)
    } catch (_) {
      return null
    }
  }

  constructor ({ name, email }) {
    this.name = name // eslint-disable-line camelcase
    this.email = email
  }
}