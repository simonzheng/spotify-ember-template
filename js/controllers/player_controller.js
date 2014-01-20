App.PlayerController = Ember.ObjectController.extend({
  init: function() {
    var self = this
    
    this._super()
    this.set('model', App.Player.create({}))
    this.updatePlayer()
    
    require(['$api/models'], function(models) {
      var callback = function() { self.updatePlayer() }
      
    	models.player.addEventListener('change:track', callback)
    	models.player.addEventListener('change:playing', callback)      
    })
  },
  actions: {
    share: function() {
      var self = this
      
      require(['$api/models'], function(models) {
        var rect = $('#player .share-btn')[0].getBoundingClientRect()
        models.client.showShareUI(self.get('model.track').uri, null, {
          x: rect.left + rect.width / 2, 
          y: rect.top + rect.height / 2
        })
      })
    },
    skip: function() {
      require(['$api/models'], function(models) {
        models.player.skipToNextTrack()
      })
    }
  },
  updatePlayer: function() {
    var self = this
    
    require(['$api/models'], function(models) {
      models.player.load('track').done(function(player) {
        self.set('model.track', player.track)
        self.set('model.name', player.track.name)
        self.set('model.artist', player.track.artists[0].name)
        
        player.track.album.load('image').done(function(album) {
          self.set('model.image', album.image)
        })
      })
    })
  }
})
