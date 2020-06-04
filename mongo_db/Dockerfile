FROM  mongo:4.2.1

ENV MONGO_INITDB_ROOT_USERNAME=root \
    MONGO_INITDB_ROOT_PASSWORD=Admin123! \
    MONGO_INITDB_DATABASE=tchallenge

COPY create_user.js init_db.js test_db.js ./

RUN echo 'making database with user' && \
    mongo --eval "db.version()" && \
    mongo admin --quiet -u 'root' -p 'Admin123!' < init_db.js && \
    mongo admin --quiet -u 'root' -p 'Admin123!' < create_user.js && \
    mongo admin --quiet -u 'root' -p 'Admin123!' < test_db.js

CMD ["/bin/bash"]
