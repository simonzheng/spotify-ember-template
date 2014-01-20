$(function() {
  require(['js/config', '$api/models'], function(config, models) {
    var app_loaded = false

    function getUID() {
      var uid = localStorage.getItem('uid')

      if(uid == null) {
        uid = Math.floor(Math.random() * 99999999999).toString()
        localStorage.setItem('uid', uid)
      }

      return uid
    }

    function updateApplicationState() {
      models.session.load('online').done(function(session) {
        if(session.online) {
          $('html').attr('class', 'app-online')

    			if(!app_loaded) {
            DS.RESTAdapter.reopen({
              host: config.backend_uri,
              buildURL: function(record, suffix) {
                var url = this._super(record, suffix)

                return url + '?' + $.param({
                  user:     getUID(),
                  country:  models.session.country
                })
              }
            })

            window.App.advanceReadiness()
            app_loaded = true
          }
        }
        else {
          $('html').attr('class', 'app-offline')
        }
      })
    }

    models.session.addEventListener('change:online', updateApplicationState)
    updateApplicationState()
  })
})
