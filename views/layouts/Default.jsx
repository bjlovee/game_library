const React = require('react');
const Games = require('../../models/games');

class Default extends React.Component {
  render () {
    const { games, title} = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body className={this.props.pageClass ? this.props.pageClass : ''}>
          <nav>
            <a href="/games">Game Library Home Page</a><br/>
            <a href="/games/new">Add A Game</a><br/>
            {games? <a href={`/games/${games._id}/edit`}>{games.title} Edit Game</a> : ''}<br/>
            {games? <a href={`/games/${games._id}`}>{games.title}Game content</a> : ''}
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
