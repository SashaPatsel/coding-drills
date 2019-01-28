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
