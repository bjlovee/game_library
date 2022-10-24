const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component{
    render(){
        const {title, _id, rating, playedGame} = this.props.games
        return (
            <Default title={`${title} Edit Page`} games={this.props.games}>
                <form method="POST" action={`/games/${_id}?_method=PUT`}>
                    Title: <input type="text" name="rating" defaultValue={title}></input><br/>
                    Rating: <input type="text" name="rating" defaultValue={rating}></input><br />
                    Played Game: <input type="checkbox" name="playedGame" defaultChecked={playedGame}/><br />
                    <input type="submit" value="Edit game" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit