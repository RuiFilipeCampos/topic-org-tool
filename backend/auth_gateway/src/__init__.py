from .settings import MODULE_PATH


import sys
sys.path.append(str(MODULE_PATH))

print(sys.path)

from .view import app
