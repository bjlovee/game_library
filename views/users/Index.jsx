const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { game } = this.props
    return (
      <Default>
          <div className="container">
    <h1>Welcome</h1>

    <div id="comment"class="card mb-2">
       <div class="card-body">
        <h5 class="card-title">Name: userName</h5>
        <h6 class="card-subtitle text-muted">Date: 10/28/22</h6><br/>
        This is where the comment will go!
       </div> 
    </div>

    <hr />

    <div id="main-content">
        <h3>Leave your comments below!</h3>
        <form method="POST"></form>
       <div id="make-comment">
        <div class="form-group">
            <label for="name">Name:</label>
            <input style="width: 250px;" form-control type="text" id="name" required />
        </div>
        <div class="form-group">
            <label for="message">Type Comment Below!</label>
            <textarea required class="form-control" id="message"></textarea>
        </div>
        <button type="button" class="btn btn-success">Comment</button>
        
       </div>
    </div>
</div>
      </Default>
    )
  }
}

module.exports = Index
