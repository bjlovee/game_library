const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { game } = this.props
    return (
      <Default pageClass='index-page'>
        <h1>Welcome To Your Game Library</h1>
        <ul className='row'>
          {
                        game.map((game) => {
                          const { title, rating, image, playedGame } = game
                          return (
                            <li key={game._id}>
                              <a href={`/games/${game._id}`}>
                                {title}
                              </a> Is Rated {rating}

                              <br />
                              {
                                            playedGame
                                              ? 'You Have played This Game'
                                              : 'You Have Not Played This Game'
                                        }
                              <br />
                              <form method='POST' action={`/games/${game._id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${title}`} />
                              </form>
                              <br />
                              <br />
                              {image ? <img src={image} /> : ''}
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
