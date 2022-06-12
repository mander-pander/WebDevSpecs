const fs = require('fs');
const path = require('path');

let accountData = fs.readFileSync(path.join(__dirname, "json", "accounts.json"), 'utf8');
let accounts = JSON.parse(accountData);

let userData = fs.readFileSync(path.join(__dirname, "json", "users.json"), 'utf-8');
let users = JSON.parse(userData);

const writeJSON = () => {
    let accountsJSON = JSON.stringify(accounts, null, 4)
    fs.writeFileSync(path.join(__dirname, 'json','accounts.json'), accountsJSON, 'utf8');
}

module.exports = {
    accounts,
    users,
    writeJSON
  }; 
