from pathlib import Path
from cryptography.fernet import Fernet

MODULE_PATH = Path().resolve()/"src"
CM_PATH = r"http://localhost:1337"

# all these should be a github secret or smthin like that:
STRAPI_TOKEN = "4a6e5d3acb6d464d921d30911b48627bc60a5890df2f825e176c00a56b9abfdd47d08dee0dbd7ba382c1917b27e1542036df1a7b69b0e8dae36377358e32fe5fb5c8888af89d2dc244958c5255342dc9cb0a3eb21245f7d3df03aca4e5e290744d5dafe21f7dcd95a9ffe8ba77d0caa9146d9725931cfd2aa374aa008a4cba94"
JWT_KEY = "B" # for encoding the JWTs
SERVER_KEY  = b'B68Rleu3AoPt6tVSKGnGGDYc5JK9uUYZ8wlPBcbhwGk=' # for encrypting data to the database, super private
PRIVATE_KEY = "" # for decrypting the pass from user
PUBLIC_KEY  = "" # frontend has access to this guy