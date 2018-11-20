"""
Django settings for dside project.

Generated by 'django-admin startproject' using Django 2.0.6.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.0/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '3@t9mcc(i(g)b%2@2h0ai1g0cy4w6p4i7t_4a%3^z6=$k16z%y'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['dside.pl', '127.0.0.1', 'mydside.com', 'mydside.com/admin', 'google.com']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'home',
    'portfolio',
    'trumbowyg',
    'drf_openapi',
    'recaptcha',
    'review',
    'blog',
    'easy_thumbnails',
]

THUMBNAIL_ALIASES = {
    '': {
        '200x200': {'size': (200, 200), 'crop': True},
        '500x500': {'size': (500, 500), 'crop': True},
    },
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'dside.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'dside.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'dside',
        'USER': 'dsider',
        'PASSWORD': 'R2SMS234t1ME',
        'HOST': '185.69.152.24',
        'PORT': '5433',
    }
}


# Password validation
# https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


BOT_TOKEN = "612720277:AAEW2AnFKvj957i_6-lO4OsjJt9t7VlXWCo"
CHAT_ID = -275224828
ORDERS_CHAT_ID = -261278869

GR_CAPTCHA_PUBLIC_KEY = '6Lf7lHsUAAAAALag0JquHk3edY8cEs5o9Mxi70ge'
GR_CAPTCHA_SECRET_KEY = '6LdzjGEUAAAAAPUDqEOjkyrF3TCNqrhOhnfyrphU'
GR_CAPTCHA_URL = "https://www.google.com/recaptcha/api/siteverify"
# Internationalization
# https://docs.djangoproject.com/en/2.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.0/howto/static-files/

STATIC_URL = '/statico/'
STATIC_ROOT = os.path.join(BASE_DIR, "static")
MEDIA_URL = '/uploads/'
MEDIA_ROOT = os.path.join(BASE_DIR, "uploads")


"""
CREATE DATABASE dside;
CREATE USER dsider WITH PASSWORD 'R2SMS234t1ME';

ALTER ROLE dsider SET client_encoding TO 'utf8';
ALTER ROLE dsider SET default_transaction_isolation TO 'read committed';
ALTER ROLE dsider SET timezone TO 'UTC';


GRANT ALL PRIVILEGES ON DATABASE dside TO dsider;

"""