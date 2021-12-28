from pathlib import Path

MODULE_PATH = Path().resolve()/"src"


SERVER_KEY = "" # for encrypting data to the database, super private
PRIVATE_KEY = "" # for decrypting the pass from user
PUBLIC_KEY  = "" # frontend has access to this guy
