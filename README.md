






##### login



- tutorial, but looks legit enough: https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a
- https://jwt.io/introduction/
- https://jwt.io/introduction/



----



# State of the Project

## Frontend


### Landing Page (also the login page): `/`

![image](https://user-images.githubusercontent.com/63464503/140642920-776730f9-b18a-4046-8d8c-9ece8419d96b.png)



- sends POST request via the `axios` package


### Registration Page: `/register`

![image](https://user-images.githubusercontent.com/63464503/140642915-0ee60ded-2930-43ed-990c-bd9ad98a68b3.png)

- sends POST request via the `axios` package

### User Dashboard: `/dashboard`

![image](https://user-images.githubusercontent.com/63464503/140651036-77f634cc-a1b6-4733-9989-36007b1035f1.png)


## Backend

### User app

Handles login stuff, currently has two views:

- Login -> receives post requests (still deciding on the credentials stuff)
- Register -> receives post requests and creates the user in the db 

### Section app

### Topic App

### Thread app


### how its meant to work

Like trello, this app is supposed to be an infinitely customizable organization tool.

The big difference however, is that this scheme has a lot more degrees of freedom. The structure is entirely inspired from how reddit does its comment sections. A `section` will contain `topic`s which themselves contain `thread`s. Analogous to subreddit/post/comment. 

For example, a template that I will program to construct automatically:

- an Agenda section that contains
    - a calendar topic, whose threads look like:
        - 2021
            - January
              - 1
              - 2
              - ...
            - February
            - ...
          -2022
            - ...
        - ...







the idea for this actually came from a realization that I had after years of searching for the right tool for me: there isn't one. so I just created a private subreddit where I quickly created my own tool and it was perfect, except for the fact that reddit was not meant for what I was using it for, which actually does lead to a lot of wasted time that after a certain point and becomes hard to ballance out the "creating" with the "using". by creating this app, I can finally solve all the problems I have with this scheme, and improve the thing as I use it.

THE STRUCTURE:

**backend**: a django app running in a server, REST API type thing

from the user side, dedicated front end apps:

- desktop: using electron
- mobile: using flutter
- web: react






---
```
---------------
*sections (+/-)*
sec1 | sec2 | sec3 .... (editable) (w/cool templates)
--------------
*threads*

thread1 (closed)

thread2 (closed)

thread3 (open)
--
c1
  c1.1
  c1.2
    c1.2.1
    c1.2.2
  c1.3
c2
c3
  c3.1
c4
```


