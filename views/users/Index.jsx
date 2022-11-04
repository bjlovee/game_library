const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { user, name, comment } = this.props
    return (
      <Default>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi' crossOrigin='anonymous' />
        <link rel='stylesheet' href='/css/app.css' />
        <div className='container'>
          <h1>Welcome</h1>

          <div id='comment' className='card mb-2'>
            <div className='card-body'>
              <h5 className='card-title'>Name: Bj Love</h5>
              <h6 className='card-subtitle text-muted'>Date: 11/02/22</h6><br />
              <p>I really love this library I cant wait to see what future updates will bring!</p>
            </div>
          </div>

          <div id='comment' className='card mb-2'>
            <div className='card-body'>
              <h5 className='card-title'>Name: King Vulture</h5>
              <h6 className='card-subtitle text-muted'>Date: 11/03/22</h6><br />
              <p>Wow this is crazy!, I can't wait to get started building my personal library.
                I also love that I can add hundreds of games.
              </p>
            </div>
          </div>

          <hr />

          <div id='main-content'>
            <h3>Leave your comments</h3>
            <form method='POST' action='/users'>
              <div id='make-comment'>
                <div className='form-group'>
                  <label htmlFor='name'>Name:&nbsp;&nbsp;</label>
                  <input style={{ width: '250px' }} form-control='true' type='text' id='name' name='name' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='message'>Type Comment Below!</label>
                  <h3>⇩</h3>
                  <textarea required className='form-control' id='message' name='comment' />
                </div>
                <button type='submit' className='btn '>Submit</button>

              </div>
            </form>
          </div>

        </div>

      </Default>
    )
  }
}

module.exports = Index
