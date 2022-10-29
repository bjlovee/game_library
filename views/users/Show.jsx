const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, comment, likeGame, _id, image } = this.props.users
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} added a comment`} users={this.props.users}>
        <p>{name} {likeGame ? 'liked this game' : ''}</p>
      </Default>
    )
  }
}

module.exports = Show
