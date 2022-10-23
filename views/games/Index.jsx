const React = require('react');
const Default = require('..layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const {games} = this.props
        return(
            <Default title="games Index Page">
                <ul>
                    {
                        games.map((game) => {
                            const {title, rating, playedGame} = game
                            return (
                                <li key={game._id}>
                                    <a href={`/games/${game._id}`}>
                                        {title}</a> is {rating}

                                        <br/>
                                        {
                                            playedGame?
                                            'You have played this game':
                                            'You have not played this game'
                                        }
                                        <br/>
                                        <form method="POST" action={`/games/${games._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${title} ${rating}`}/>
                                        </form>
                                </li>        
                            )
                        })
                    }
                </ul>  
            </Default>
        )
    }
}

module.exports = Index