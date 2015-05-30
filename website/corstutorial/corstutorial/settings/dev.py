from os.path import abspath, basename, dirname, join, normpath

from base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '^7q6nxp5hf#=f6nfwz#v14(znw3r2xcjgla=yfid^j%hkv$0ho'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': join(SITE_ROOT, 'db.sqlite3'),
    }
}
