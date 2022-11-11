const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { game } = this.props
    return (
      <Default pageClass='index-page'>
        <h1>Welcome To Your Game Library</h1>
        <form action='/profile/logout' method='GET'>
            <input type="submit" value="logout" />
          </form>
        <h3 className='collection'>NFT'S<br />Collections</h3>
        {/* <h3 className='legends'>Wall Of<br />Legends</h3> */}
        <div className='ad-banner'>
          <img src='https://i.pinimg.com/236x/c7/72/a8/c772a87c06573148f5ee3e234a22e1da.jpg' />
          <img src='https://i.pinimg.com/236x/2b/a2/b2/2ba2b25f2527ed8d40b0b6af70d14bd0.jpg' />
          <img src='https://i.pinimg.com/236x/cd/51/be/cd51be9acb8fd747c1dd1c422c1d9a3a.jpg' />
          <img src='https://i.pinimg.com/236x/d3/df/d2/d3dfd24faf2012ca44d98899fd52a89d.jpg' />
          <img src='https://i.pinimg.com/236x/c6/69/4c/c6694c32cdc77de8db9f786d777e698d.jpg' />
          <img src='https://i.pinimg.com/236x/ba/85/3d/ba853d28a112b384d52cb260976ef5aa.jpg' />
          <img src='https://i.pinimg.com/236x/fd/04/19/fd041997c0cf6438ef1803bf7b719782.jpg' />
          <img src='https://i.pinimg.com/236x/cf/12/27/cf1227dd6d5396c1a8c15e35f853e4a4.jpg' />
        </div>

        <div className='right-banner'>
        <h3 className='legends'>Wall OF<br />Legends</h3>
          <img src='https://i.pinimg.com/236x/8e/c7/de/8ec7de336d3bfc50d717c0504540ec77.jpg' />
          <img src='https://i.pinimg.com/236x/a0/1d/e4/a01de4a1adae32e7c2578f543a271237.jpg' />
          <img src='https://i.pinimg.com/236x/4e/4c/39/4e4c395e79ec9f520b66c5bd5286f2c3.jpg' />
          <img src='https://i.pinimg.com/236x/fa/30/5e/fa305e6fe78eecad3a5165437a2c61a7.jpg' />
          <img src='https://i.pinimg.com/236x/14/d9/91/14d991307885e661106c12417bdb749a.jpg' />
          <img src='https://i.pinimg.com/564x/1b/2f/67/1b2f678cbedfb1647686da5dd30a2aa7.jpg' />
          <img src='https://i.pinimg.com/236x/23/9e/ba/239ebabfede1792d7c4c1320325f54ad.jpg' />
        </div>
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
                                              ? 'You Have played This Game ✔︎'
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
