const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { user, name, comment } = this.props
    return (
      <Default>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi' crossorigin='anonymous' />
        <link rel='stylesheet' href='/css/app.css' />
        <div className='container'>
          <h1>Welcome</h1>

          {/* <div id='comment' className='card mb-2'>
            <div className='card-body'>
              <h5 className='card-title'>Name: userName</h5>
              <h6 className='card-subtitle text-muted'>Date: 10/28/22</h6><br />
              This is where the comment will go!
            </div>
          </div> */}
          
          
          <hr />

          <div id='main-content'>
            <h3>Leave your comments</h3>
            <form method='POST' action='/users'>
              <div id='make-comment'>
                <div className='form-group'>
                  <label for='name'>Name:</label>
                  <input style={{ width: '250px' }} form-control type='text' id='name' name='name' required />
                </div>
                <div className='form-group'>
                  <label for='message'>Type Comment Below!</label>
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
