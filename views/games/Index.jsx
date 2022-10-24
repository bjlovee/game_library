const React = require('react');
const Default = require('../layouts/Default.jsx');


class Index extends React.Component{
    render(){
        const {game} = this.props
        return(
            <Default title="Game Library">
                <ul>
                    {
                        game.map((game) => {
                            const {title, rating, image, playedGame} = game
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
                                        <form method="POST" action={`/games/${game._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${title}`}/>
                                        </form>
                                        {image ? <img src={image}/> : ''}
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