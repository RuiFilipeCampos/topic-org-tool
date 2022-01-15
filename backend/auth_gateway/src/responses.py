

def C200(msg, **kwargs):
    return dict(
        status=200, 
        msg=f"[200 OK] {msg}", 
        **kwargs
    )

def C201(*args):
    return dict(
        status=201, 
        msg=f"[201 Created] {args[0]}"
    )



def C400(msg):
    return dict(
        status=400,
        msg=f"[400 Bad Request] {msg}"
    )

def C401(msg):
    return dict(
        status=401, 
        msg=f"[401 Unauthorized] {msg}"
    )

def C403(msg):
    return dict(
        status=403, 
        msg=f"[403 Forbidden] {msg}"
    )


def C409(msg):
    return dict(
        status=409, 
        msg=f"[409 Conflict] {msg}"
    )