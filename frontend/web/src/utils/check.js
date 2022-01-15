import axios from "axios";

var config = {
  method:"GET",
  credentials: 'include'
}

export function amIloggedIn(){
  return fetch("/auth/check", config)
    .then(response => response.json())
    .then(payload => {

        if (payload.status == 200){
          return true
        }

        return false
      }
    )
}

export function redirectOnNoSession(){
  amIloggedIn().then(
    session_status => {
        if (!session_status){
            window.location.href = "/"
        }
    }
  )
}