angular.module('corstutorial.services', [])

.factory('tokenService', ['$cookies', function($cookies) {
  return {
    set_oauth_data: function(oauth_data) {
      $cookies.oauth_access_token = oauth_data.access_token;
      $cookies.oauth_refresh_token = oauth_data.refresh_token;
      $cookies.oauth_token_type = oauth_data.token_type;
      $cookies.oauth_expires_in = oauth_data.expires_in;
      $cookies.oauth_scope = oauth_data.scope;
      $cookies.oauth_modified = Math.floor(Date.now() / 1000);
    },
    get_access_token: function() {
      var now = Math.floor(Date.now() / 1000);

      if (now - $cookies.oauth_modified >= $cookies.oauth_expires_in) {
        $cookies.oauth_access_token = null;
      }

      return $cookies.oauth_access_token;
    },
    get_token_type: function() {
      return $cookies.oauth_token_type;
    },
    get_expires_in: function() {
      return $cookies.oauth_expires_in;
    },
    get_refresh_token: function() {
      return $cookies.oauth_refresh_token;
    },
    get_scope: function() {
      return $cookies.oauth_scope;
    }
  };
}])

.factory('authenticationService', ['$http', 'APIEndpoint', 'ClientID', function($http, APIEndpoint, ClientID) {
  return {
    login: function(username, password) {
      var data = {
        username: username,
        password: password,
        grant_type: 'password'
      };

      var urlEncodedTransform = function(obj) {
        var str = [];

        for(var p in obj) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }

        return str.join("&");
      };

      var config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + ClientID.base64
        },
        transformRequest: urlEncodedTransform
      };

      return $http.post(APIEndpoint.root + '/oauth/token/', data, config);
    }
  };
}])

/**
 * A global message service that holds a message in one of four levels:
 * - INFO
 * - SUCCESS
 * - WARN
 * - ERROR
 */
.factory('messenger', function() {
  var _levels = {
    INFO: 0,
    SUCCESS: 1,
    WARN: 2,
    ERROR: 3
  };
  var _message = {
    text: '',
    level: _levels.INFO
  };

  return {
    getMessage: function() {
      return _message;
    },
    getAndUnsetMessage: function() {
      var msg = _message; // Hurray for pass by value
      _message = null;

      return msg;
    },
    setMessage: function(msg) {
      _message = msg;
    },
    levels: _levels,
    INFO: _levels.INFO,
    SUCCESS: _levels.SUCCESS,
    WARN: _levels.WARN,
    ERROR: _levels.ERROR
  };
});
