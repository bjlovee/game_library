const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { title, _id, rating, playedGame } = this.props.games
    return (
      <Default title={`Edit ${title} Content`} game={this.props.games}>
        <form method='POST' action={`/games/${_id}?_method=PUT`}>
          Title:&nbsp;&nbsp;&nbsp; <input type='text' title='title' defaultValue={title} /><br />
          Rating: <input type='text' title='rating' defaultValue={rating} /><br />
          Image:&nbsp;&nbsp;<input type='text' name='image' placeholder='insert game art url' /><br />
          Played Game: <input type='checkbox' title='playedGame' defaultChecked={playedGame} /><br />
          <input type='submit' value='Edit Games' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
