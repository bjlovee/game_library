const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create New Game'>
        <nav>
          {/* <a href='/games'>Go Back To Game Library Home Page</a> */}
        </nav>
        <form method='POST' action='/games'>
          Title:&nbsp;&nbsp;&nbsp;<input type='text' name='title' placeholder='Name of Game Here' /><br />
          Rating: <input type='text' name='rating' placeholder='rating of Game Here' /><br />
          Image:&nbsp;&nbsp;<input type='text' name='image' placeholder='insert game art url' /><br />
          Played Game: <input type='checkbox' name='playedGame' /><br />
          <input type='submit' value='Submit Game' />
        </form>
      </Default>
    )
  }
} 

module.exports = New
