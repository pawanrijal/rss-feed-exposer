Here is my solution for your code challenge
rss-feed-exposer


1.clone this git repository
git clone https://github.com/pawanrijal/rss-feed-exposer.git

2.run #npm install to install required packages 

3.setup database and port  using .env file

4.uncomment "sequelize.sync({ alter: true });" in index.js to create required tables in your database

5.run #npm start to run the application



**API**
### GET

{{url}}/rss

Test 

### POST

create section


localhost:3000/section

add a new section



json

```
{
  "title": "Politics"
}
```

### GET

getAllSection

{{url}}/section/getall

retrieve all section in JSON

### POST

add post



localhost:3000/post

add a new post

Bodyraw  (json)

json

```
{  "postType": "liveblog",
   "title": "Another politics news",  
   "sectionId": "politics",  
   "isHosted": false,  
   "pillarName": "news"
}
```

### GET

get rss

{{url}}/section_name

get rss of section and posts which belong to the section
