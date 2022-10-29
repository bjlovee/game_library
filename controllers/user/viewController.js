const RESOURCE_PATH = '/users'

const viewController = {
  index (req, res, next) {
    res.render('users/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('users/New')
  },
  edit (req, res, next) {
    res.render('users/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('users/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const userId = req.params.id || res.locals.data.user._id
    res.redirect(`${RESOURCE_PATH}/${userId}`)
  }
}

module.exports = viewController
