#!/bin/bash

mongo --eval "db.version()"
mongo admin --quiet -u 'root' -p 'Admin123!' < init_db.js
mongo admin --quiet -u 'root' -p 'Admin123!' < create_user.js
mongo admin --quiet -u 'root' -p 'Admin123!' < test_db.js