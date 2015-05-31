angular.module('corstutorial.services', [])

.factory('authentication', ['$http', 'APIEndpoint', function($http, APIEndpoint) {
  var _oauth_data = {
    "access_token": "fCFCjAxcNXYJlTiHkzQLjF1eJ0Tjob",
    "token_type": "Bearer",
    "expires_in": 36000,
    "refresh_token": "qIRyVQvsIHt5BpqpB6aWANfUElBC5T",
    "scope": "read write"
  };

  var _safe_getter = function(key) {
    if (_oauth_data) {
      return _oauth_data[key];
    } else {
      return null;
    }
  }

  return {
    get_oauth_data: function() {
      return _oauth_data;
    },
    set_oauth_data: function(oauth_data) {
      _oauth_data = oauth_data;
    },
    get_access_token: function() {
      return _safe_getter('access_token');
    },
    get_token_type: function() {
      return _safe_getter('token_type');
    },
    get_expires_in: function() {
      return _safe_getter('expires_in');
    },
    get_refresh_token: function() {
      return _safe_getter('refresh_token');
    },
    get_scope: function() {
      return _safe_getter('scope');
    },
    login: function(username, password) {
      var data = {
        username: username,
        password: password,
        grant_type: 'password'
      };

      var config = {
        headers = {
          content_type: 'application/x-www-form-urlencoded'
        }
      };

      return $http.post(APIEndpoint.root + '/oauth/token/', data, config);
    }
  }
}]);
