# WARNING

This has been archived because it contains (CVE-2022-36359)[https://nvd.nist.gov/vuln/detail/CVE-2022-36359] and I've not upgraded this repo at all. Please use it for whatever educational purposes it may serve, but **do not run this in Production** nor think it's the latest guidance.

CORS Tutorial
=============

Author: Aaron Yong

License: Apache 2.0

Motivation
----------

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) or Cross Origin Resource Sharing requires specific configurations on the backend and frontend.  Personally I didn't really have much experience with CORS, and made it a weekend project in order to get a better understanding of CORS.

Installation
------------

###Prerequisites:

- [Python 2.7.*](https://www.python.org/downloads/)
- [Django](https://djangoproject.com)
- (Optional) [virtualenv](https://virtualenv.pypa.io/en/latest/)
- (Optional) [virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/) (Mac OS X, Linux)
- (Optional) [virtualenvwrapper-powershell](https://pypi.python.org/pypi/virtualenvwrapper-powershell) (Windows)
- [Chrome](http://www.google.com/chrome/), for the best simulation of mobile devices
- [Node.js v0.10.*](http://nodejs.org/dist/)
- [Bower](http://bower.io)
- [Gulp.js](http://gulpjs.com/)
- [Ionic Framework](http://ionicframework.com)


###Django

1. Navigate into the `website` directory and run `pip install -r ./requirements/dev.txt` to install backend dependencies.
1. Navigate into the `website/corstutorial` directory and run:

  ```
  python manage.py migrate
  [Enter superuser credentials]
  ```
1. Run the server (uses `corstutorial.settings.dev` by default, __do not run this setting on production__):

  ```
  python manage.py runserver_plus
  ```
1. Use your web browser to navigate to http://localhost:8000

###Ionic

1. `npm install` then `bower install`
1. `ionic serve`

TO-DOs
------

- Production settings for Django
- Production settings for Ionic
- Proper step-by-step tutorial

Built With
----------

- Django
- Django REST Framework
- Django CORS headers
- Django Extensions
- Django Material
- Ionic Framework
- AngularJS
- SASS
