const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {

    render(){
        const {title, rating, playedGame, _id, image} = this.props.game
        const capName = title[0].toUpperCase() + title.substring(1)
        return(
            <Default title={`${capName} Show Page`} game={this.props.game}>
                <p>{capName} rating is {rating} and you{playedGame? 'you have played this game': 'you have not played this game'}</p>
                {image ? <img src={image}/> : ''}
            </Default>
        )
    }
}

module.exports = Show