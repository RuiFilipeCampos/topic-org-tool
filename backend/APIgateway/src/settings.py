from pathlib import Path
from cryptography.fernet import Fernet

MODULE_PATH = Path().resolve()/"src"
 

JWT_KEY = "B" # for encoding the JWTs
SERVER_KEY  = Fernet.generate_key() # for encrypting data to the database, super private
PRIVATE_KEY = "" # for decrypting the pass from user
PUBLIC_KEY  = "" # frontend has access to this guy