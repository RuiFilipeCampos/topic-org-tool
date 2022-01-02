

import { amIloggedIn } from "../utils/check"


export default function Dashboard(){
    if (!amIloggedIn()) {
        window.location.href = "/"
    }
    return <>You have been logged in. </>
}