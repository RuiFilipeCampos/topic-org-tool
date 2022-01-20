import {Route} from "react-router-dom";

import { Login } from "./pages/auth/auth";

var routes = [
    /*
    { 
      component: <Dashboard />,      
      route: "/dashboard" 
    },
    { 
      component: <RegisterSuccess/>, 
      route: "/register/success" 
    },
    { 
      component: <Register />,       
      route: "/register" 
    },
    */
    { 
      component: <Login />,          
      route: "/"
    }
]


var router = []
        
for (let i = 0; i < routes.length; ++i){
    router.push(
        <Route path = {routes[i].route}>
            {routes[i].component}
        </Route>
    )
}

export default router; 