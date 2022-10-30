const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create New Game'>
        <nav>
          <a href='/users'>Go Back To Comments Home Page</a>
        </nav>
        <form method='POST' action='/users'>
          Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='name' placeholder='Name of User Here' /><br />
          Comment: <input type='text' name='rating' placeholder='Comment Here' /><br />
          Like Game: <input type='checkbox' name='likeGame' /><br />
          <input type='submit' value='Submit Comment' />
        </form>
      </Default>
    )
  }
}

module.exports = New
