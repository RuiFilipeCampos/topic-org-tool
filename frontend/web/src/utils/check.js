import axios from "axios";


var BASE_URL = "http://127.0.0.1:5000"

export function amIloggedIn(){
    axios.get(BASE_URL + "/auth/check",
    {withCredentials:true})
    .then(function (response) {
        // handle success
        let status = response.data.status
        if (status == 200){
          return true
        } else {
          return false
        }
      }
    )

}