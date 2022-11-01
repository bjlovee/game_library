const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, comment, likeGame, _id } = this.props.users
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName}: ${comment}`} users={this.props.users}>
        <p>{likeGame ? 'liked this game' : ''}</p>
      </Default>
    )
  }
}

module.exports = Show
