# pantry-hacker

## Purpose

```md
A simple search tool for quick recipe information.
```

## Table of Contents

- [Preview](#Preview)
- [Installation](#Installation)
- [Tests](#Tests)
- [Documentation](#Documentation)
- [Feedback](#Feedback)

---

## Preview

Here is how the application appears and functions.

<img src='public\images\pantry-hacker.gif' />

## Installation

_This project requires Node.js and other dependencies_

- [How to install Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Navigate to the directory you would like to use using the CLI and then clone this repository:

```bash
git clone git@github.com:wolfgarb/pantry-hacker.git
```

Create `.gitignore` to include the following:

```bash
node_modules
.env
.DS_Store
package-lock.json
```

`.env` will hold your sensitive information.

```bash
DB_NAME='pantry_hacker_db'
DB_USER='root'
DB_PW='YOUR_PASSWORD_HERE'
```

Open your IDE and use these commands to install _all_ the necessary packages:

```bash
npm i bcrypt mysql2 dotenv express sequelize node
connect-session-sequelize express-handlebars express-session handlebars
npm init
```

`npm init` will create your `package.json` file.
Make sure `package.json` includes the seed in your scripts:

```json
"scripts": {
    "start": "node server.js",
    "seed": "node seeds/index.js"
}
```

Login to MySQL with your credentials.

```bash
mysql -u root -p
```

In the MySQL terminal, start the database

```mysql
USE pantry_hacker_db;
```

Go back to your main terminal or VS Code powershell and enter

```bash
npm run seeds
```

Finally, start the server from the command line:

```bash
npm start
```

## Tests

_This project used Jest for testing_

<a href="https://jestjs.io/docs/getting-started">
<img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" />
</a>

## Documentation

- [npm](https://docs.npmjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Express](https://expressjs.com/en/4x/api.html)
- [Sequelize](https://sequelize.org/master/)
- [Handlebars](https://handlebarsjs.com/guide/)

## Feedback

Have something you'd like to add?<br>
Feel free to contact me via email!<br>

<a href="mailto:sraewolfskill@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
 </a>
