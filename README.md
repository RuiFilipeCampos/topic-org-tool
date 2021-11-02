
##### login



- tutorial, but looks legit enough: https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a
- https://jwt.io/introduction/




----



### state of project

#### the `user` app

this app is a placeholder for the react front end, just so I can figure out the details of the backend (my first full implementation of an auth rest api)

#### the `topic` and `thread` apps

these are the center piece of this app :p, and will be a REST API implementation  


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


