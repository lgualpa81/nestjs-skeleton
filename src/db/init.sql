-- CREATE DATABASE IF NOT EXISTS testdb
SELECT 'CREATE DATABASE testdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'testdb')\gexec