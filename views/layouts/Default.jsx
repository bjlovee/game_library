const React = require ('react');
const Games = requrie('../../models/games');

class Default extends React.Component {

    render(){
        const {game, title} = this.props
        return(
            <html>
                <head>
                  <link rel="stylesheet" href="/css/app.css" />  
                  <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/games">Game Library Home Page</a>
                        <a href="/games/new">Add A Game</a>
                        {game? <a href={`/games/${game._id}/edit`}>{game.title} Edit Game</a> : ''}
                        { game? <a href={`/games/${game._id}`}>{game.title}Game content</a> : ''}
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