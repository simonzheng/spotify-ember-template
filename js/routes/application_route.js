App.ApplicationRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render()
    this.render("player", {
      outlet:     "player",
      into:       "application",
      controller: this.controllerFor('player')
    })
  }
})