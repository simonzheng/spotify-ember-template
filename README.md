Spotify App Template
======================

This project demonstrates how to build a structured MVC (model-view-controller) Spotify App with Ember.js. We have experienced a lot of challenges while combining the Spotify Apps API with Ember.js and tried to find appropriate workarounds that we present in this template.

Features
-------

This template contains an example app with a navigation that routes through multiple ember views. It also contains a fixed player that mirrors the Spotify player. The example app contains compatible version of ember, ember-data, handlebars and jQuery. The app recognizes when Spotify goes offline and displays an offline overlay. It generates a unique user identifier and uses the HTML5 local storage in order to remember a user when revisiting the app. Unfortunately Spotify doesn't allow us to track a user over different devises. Thus we can only identify a user per client. The user and its country code are used as parameters on every backend request.

How to set up your app
------------

1. Get a Spotify Developer Account: https://developer.spotify.com/technologies/apps/#developer-account
2. mkdir ~/Spotify && cd ~/Spotify (on Windows it should be `My Documents\Spotify`)
3. git clone https://github.com/neonroots/spotify-ember-template myapp && cd myapp
4. Restart Spotify and type `spotify:app:example` in the search bar to open the app
5. Configure your app in `manifest.json`, note: on every change in the manifest you need to restart Spotify, for further information see: https://developer.spotify.com/technologies/apps/guidelines/developer/
6. Change all resource references (default: example) in index.html to your point to the bundle identifier that you specified (e.g. myapp)
7. Call spotify:app:myapp in the search bar in Spotify
8. Start `compass watch` to make your SCSS styles compile to CSS automatically
9. Configure your API endpoint in config.js (don't forget to give access permissions in manifest.json)
10. Happy coding!

Notes
-----

Ember.js uses extensions that conflict with the Spotify extensions. Thus we needed to disable them. This results in some changes in the Ember syntax that you might be used to. Especially this is about computed properties. You might be used to:

```javascript
  fullname: function() {
    return this.get('first_name') + ' ' + this.get('last_name')
  }.property('first_name', 'last_name')
```

Instead you need to use:

```javascript
  fullname: Ember.computed(function() {
    return this.get('first_name') + ' ' + this.get('last_name')
  }).property('first_name', 'last_name')
```

You can read more about the impacts of disabling Ember.js' prototype extensions on: http://emberjs.com/guides/configuring-ember/disabling-prototype-extensions/

Help
----

For any help contact robert.strobl@neonroots.com

