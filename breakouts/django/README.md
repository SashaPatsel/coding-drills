# Django

## About

Django is made up of separate `apps`. The idea is that one project brings many apps together. Therefore, you can reuse apps you've already made in other projects, making Django development very scalable.

## Resources
https://www.youtube.com/watch?v=D6esTdOLXh4

https://simpleisbetterthancomplex.com/series/beginners-guide/1.11/


## Installation 

https://www.anaconda.com/download/#macos


## Instructions 

1. `conda install virtualenv` (prepend with `sudo` if you get a permissions error)

2. `mkdir app`

3. `conda create -n venv` (where we can choose another word instead of `venv`)

4. `source activate venv` (to deactivate: `source deactivate`. to delete: `conda remove -n venv -all`)

5. `conda install -n venv <package>`

6. `conda install django`

7. `django-admin startproject app`

8. `conda install mysqlclient`

9. In settings under `DATABASES`:

```python

     'default': {
        'ENGINE': 'django.db.backends.mysql', 
        'NAME': 'django_db',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': 'localhost',  
        'PORT': '3306',
    }
```

10. `python manage.py migrate`

11. From app (at the same level as venv) `python manage.py runserver`

12. To create a super user: `python manage.py createsuperuser --username=<username> --email=<name@email.com>`

13. checkout `http://127.0.0.1:8000/admin`. Log in.

14. run `python manage.py startapp movies`

15. add movies in apps in `settings.py`:

```python
INSTALLED_APPS = [
    "movies",
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

```

16. In `app/urls`:

```python
from django.contrib import admin
from django.urls import path, include
from movies import views #new

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.index, name = "index") #new
]


```

17. Add this inside of settings.py under `TEMPLATES`. This allows us to refer directly to our templates folder


```python

'DIRS': [
            os.path.join(BASE_DIR, 'templates')
        ],

```


18. Add this all the way at the bottom of settings.py

```python
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

```

19. Make model in `movies/models`


```python

from datetime import datetime

# Create your models here.
class Movies(models.Model):
    movie_name = models.CharField(max_length=1000)
    movie_poster = models.CharField(max_length=1000)
    movie_year = models.CharField(max_length=1000)
    created_at = models.DateTimeField(default=datetime.now , blank=True)

```

20. run `python manage.py makemigrations movies` (creates a file in `/migrations`)

21. `python manage.py migrate`.

ß





* views.py is like a controller