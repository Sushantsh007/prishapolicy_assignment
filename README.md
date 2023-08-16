create a file named .env inside packages/client folder & declare two variables PORT & DATABASE_URL
for example:
```
    PORT=4000
    DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<DB_NAME>?schema=public"
```

Make two empty folders "files" & "images" inside 
```
    packages/server/src folder
```
To run the project:
```
    npm i
    npm start
```