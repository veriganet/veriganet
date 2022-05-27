from .base import *  # noqa

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY', '3w1@+$e5w#+ws8d4tbcm9x9g1%5@nb&s770$9f5b)+jv&&%ro+')

ALLOWED_HOSTS = ['*']

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

WAGTAIL_CACHE = True

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.db.DatabaseCache',
        'LOCATION': 'cache_table',  # noqa
        'KEY_PREFIX': 'coderedcms',
        'TIMEOUT': 14400,  # in seconds
    }
}


try:
    from .local_settings import *  # noqa
except ImportError:
    pass
