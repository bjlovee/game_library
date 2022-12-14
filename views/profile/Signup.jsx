const React = require('react')
const Default = require('../layouts/Default')


class SignUp extends React.Component {
  render () {
    return (
      <Default title="Sign Up For A Game Account">
        <form action='/profile/signup' method='POST'>
          <fieldset>
            <legend>New User</legend>
            <label>USERNAME: <input type='text' name='username' required /> </label>
            <label>PASSWORD: <input type='password' name='password' required />
            </label>
            <input type='submit' value='Create Account' />
          </fieldset>
        </form>
        <form action='/profile/login' method='GET'>
            <input type="submit" value="login" />
          </form>
      </Default>
    )
  }
}

module.exports = SignUp