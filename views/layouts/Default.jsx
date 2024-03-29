const React = require('react')
const Games = require('../../models/games')
const Users = require('../../models/user')

class Default extends React.Component {
  render () {
    const { games, users, title, name, comment, _id } = this.props
    return (
      <html>
        <head>
          <link href='http://fonts.cdnfonts.com/css/charasans' rel='stylesheet' />
          <link rel='stylesheet' href='/css/app.css' />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <title>{title}</title>
        </head>
        <body className={this.props.pageClass ? this.props.pageClass : ''}>   
      <div className="topnav">
          <a href="/games">Game Library</a>
          <a href="/games/new">Add A Game</a>
          {games ? <a href={`/games/${games._id}/edit`}>Edit {games.title}</a> : ''}
          {games ? <a href={`/games/${games._id}`}>About {games.title}</a> : ''}

          <a href="/users">Leave A Comment</a>
          { users ? <a href={`/users/${users._id}/edit`}>Comments{users.name}</a> : ''}
          {/* {users ? <a href={`/users/show${users._id}`}>Show {name.comment}</a> : ''} */}
          {/* {users ? <a href={`/users/${users._id}/edit`}>Edit {users.title}</a> : ''} */}
      </div>
          <nav>
            {/* <a href='/games'>Game Library Home Page</a><br /> */}
            {/* <a href='/games/new'>Add A Game</a><br /> */}
            {/* {games ? <a href={`/games/${games._id}/edit`}>{games.title} Edit Game</a> : ''}<br /> */}
            {/* {games ? <a href={`/games/${games._id}`}>{games.title}Game content</a> : ''} */}
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
