I'm not using the regular MVC, I am modifying the pattern in accordance with my needs (Django also does this with its MTV thing, 10x more confusing than what I'm doing here imo).


- **Model**: data representation, database connector
- **Controller**: handles all the logic
- **View**: the window to the external world, receives the requests, dispatches them

Model <----> database (sqlite) <br>
| <br>
| <br>
Controller <br>
| <br>
| <br>
View <----> user (frontend)


The view performs dispatching and parses all the data from the request. The data is passed to the controller, who is responsible for processing said data and doing all db related operations through Model. All entities here are "class singletons" (a singleton that uses the class has its object instead of creating a solo object)

