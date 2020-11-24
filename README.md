# getircasestudy

This project is a nodejs web application that enables the api endpoint to filter data from mongodb via express.js.
After downloading the repo with the git clone command, you will need to download and install the npm package and node.js.
I used web storm ide for nodejs in this project.

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) to install
```bash
npm install
```
After you installed, you can start the project from terminal with access the project folder and you can get in with using 

```bash
npm run start:dev
```
After we get in we can use postman to send a request to our api
We need to add 4 keys and values to the x-www-form-encoded type under Body into the Postman's post request.

  ```python
  startDate: "2016-01-26",
  endDate: "2018-02-02",
  minCount: 2700,
  maxCount: 3000

And we can see the results.
