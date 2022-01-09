

import { amIloggedIn } from "../utils/check"


export default function Dashboard(){
    amIloggedIn().then(
        session_status => {
            if (!session_status){
                window.location.href = "/"
            }
        }
    )

    return <>You have been logged in. </>
}