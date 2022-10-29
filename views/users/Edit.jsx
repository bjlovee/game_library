const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, comment, likeGame } = this.props.users
    return (
      <Default title={`${name} Edit Page`} user={this.props.users}>
        <form method='POST' action={`/users/${_id}?_method=PUT`}>
          Name:&nbsp;&nbsp;&nbsp; <input type='text' title='name' defaultValue={name} /><br />
          Comment: <input type='text' title='comment' defaultValue={comment} /><br />
          Like Game: <input type='checkbox' title='likeGame' defaultChecked={likeGame} /><br />
          <input type='submit' value='Edit Comment' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
