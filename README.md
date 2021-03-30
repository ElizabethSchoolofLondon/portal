# [Portal](#https://elizabethschool.com)
> Note: This README file will be updated accordingly (latest update: 28/03/2021)
> 
Portal is a purposefully built web based dashboard that aims to provide an easy user experience
while dealing with internal communication amongst different departments.

It includes a 'three-level' privilege scheme that gives different permissions depending on the account type.

## Technology
We have used The 'MERN Stack'. If you would like to get more information on what it is, you can visit the following [article by MongoDB](https://www.mongodb.com/mern-stack).

The MERN Stack uses the following framework for each part of our web application:
1. M - MongoDB (Database)
2. E - Express (Server/Back end)
3. R - React (Client/Front end)
4. N - Node.js (Server/Back end)


## Level Features
| Level One    | Level Two      | Level Three   |
|----------------------------------|----------------------------------|----------------------------------|
|<ul><li>[x] Data Entry</li></ul> |  <ul><li>[x] Data Entry</li></ul>  |<ul><li>[ ] Data Entry</li></ul>|
|<ul><li>[ ] Data Modification</li></ul>|  <ul><li>[x] Data Modification</li></ul> |<ul><li>[ ] Data Modification</li></ul>|
|<ul><li>[x] File Upload</li></ul> |  <ul><li>[x] File Upload</li></ul>  |<ul><li>[ ] File Upload</li></ul>|
|<ul><li>[x] File Removal</li></ul> |  <ul><li>[x] File Removal</li></ul>  |<ul><li>[ ] File Removal</li></ul>|
|<ul><li>[ ] Weekly Data Entry Overview</li></ul>|  <ul><li>[ ] Weekly Data Entry Overview</li></ul>  |<ul><li>[x] Weekly Data Entry Overview</li></ul>|
|<ul><li>[ ] Monthly Data Entry Overview</li></ul>|  <ul><li>[ ] Monthly Data Entry Overview</li></ul>  |<ul><li>[x] Monthly Data Entry Overview</li></ul>|
|<ul><li>[ ] General Overview</li></ul>|  <ul><li>[ ] General Overview</li></ul>  |<ul><li>[x] General Overview</li></ul>|

## Installation Instructions
1. To run the latest stable version of 'Portal', clone the `master` repository by running:
`git clone https://github.com/ElizabethSchoolofLondon/portal.git && cd portal`
2. Then run
`npm install && cd client && npm install`
3. You will need to setup your `default.json` file, which should be located in `/portal/config`
Your file should look like this:
```json
{
  "mongoURI": "mongodb+srv://xxxxxxxxxxxxxxxx",
  "jwtSecret": "secretTokenName"
}
```
