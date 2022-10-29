const React = require('react')
const Games = require('../../models/games')

class Default extends React.Component {
  render () {
    const { games, title } = this.props
    return (
      <html>
        <head>
          {/* <meta charset='UTF-8' /> */}
          {/* <meta http-equiv='X-UA-Compatible' content='IE=edge' /> */}
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi' crossorigin='anonymous' />
          <link href='http://fonts.cdnfonts.com/css/charasans' rel='stylesheet' />
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body className={this.props.pageClass ? this.props.pageClass : ''}>
          <nav>
            <a href='/games'>Game Library Home Page</a><br />
            <a href='/games/new'>Add A Game</a><br />
            {games ? <a href={`/games/${games._id}/edit`}>{games.title} Edit Game</a> : ''}<br />
            {games ? <a href={`/games/${games._id}`}>{games.title}Game content</a> : ''}
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
