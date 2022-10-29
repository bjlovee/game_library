const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { user } = this.props
    return (
      <Default>
        <div className='container'>
          <h1>Welcome</h1>

          <div id='comment' className='card mb-2'>
            <div className='card-body'>
              <h5 className='card-title'>Name: userName</h5>
              <h6 className='card-subtitle text-muted'>Date: 10/28/22</h6><br />
              This is where the comment will go!
            </div>
          </div>

          <hr />

          <div id='main-content'>
            <h3>Leave your comments below!</h3>
            <form method='POST' action='/users'>
            <div id='make-comment'>
              <div className='form-group'>
                <label for='name'>Name:</label>
                <input style={{width: '250px'}} form-control type='text' id='name' name='name' required />
              </div>
              <div className='form-group'>
                <label for='message'>Type Comment Below!</label>
                <textarea required className='form-control' id='message' name='comment' />
              </div>
              <button type='submit' className='btn btn-success'>Comment</button>
              
            </div>
            </form>
          </div>
        
        </div>
       
      </Default>
    )
  }
}

module.exports = Index
