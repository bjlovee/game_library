const RESOURCE_PATH = '/games'

const viewController = {
  index (req, res, next) {
    res.render('games/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('games/New')
  },
  edit (req, res, next) {
    res.render('games/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('games/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const gameId = req.params.id || res.locals.data.games._id
    res.redirect(`${RESOURCE_PATH}/${gameId}`)
  }
}

module.exports = viewController
