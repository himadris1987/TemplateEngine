// List out the various node packages needed to run application
const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require ("util");

const jest = require("jest");
const generateHTML = require ("./generatehtml")

const writeFileAsync = util.promisify(fs.writeFile);

// Using inquirer, write out questions for Manager, Engineer, Developer and Intern

function promptUser () {
    return inquirer.prompt ([
        {
            type: "input",
            name: "nameManager",
            message: "Enter name of Manager:"
        },
        {
            type: "input",
            name: "idManager",
            message: "Enter ID of Manager:"
        },
        {
            type: "input",
            name: "emailManager",
            message: "Enter email of Manager:"
        },
        {
            type: "input",
            name: "officeManager",
            message: "Enter office number of Manager:"
        },
        {
            type: "input",
            name: "nameEngineer",
            message: "Enter name of Engineer:"
        },
        {
            type: "input",
            name: "idEngineer",
            message: "Enter id of Engineer:"
        },
        {
            type: "input",
            name: "emailEngineer",
            message: "Enter email of Engineer:"
        },
        {
            type: "input",
            name: "githubEngineer",
            message: "Enter github username of Engineer:"
        },
        {
            type: "input",
            name: "officeEngineer",
            message: "Enter office number of Engineer:"
        },
    {
        type: "input",
        name: "nameDeveloper",
        message: "Enter name of Developer:"
    },
    {
        type: "input",
        name: "idDeveloper",
        message: "Enter id of Developer:"
    },
    {
        type: "input",
        name: "emailDeveloper",
        message: "Enter email of Developer:"
    },
    {
        type: "input",
        name: "githubDeveloper",
        message: "Enter github username of Engineer:"
    },
    {
        type: "input",
        name: "officeDeveloper",
        message: "Enter office number of Developer:"
    },
{
    type: "input",
    name: "nameIntern",
    message: "Enter name of Intern:"
},

{
    type: "input",
    name: "idIntern",
    message: "Enter Id of Intern:"
},

{
    type: "input",
    name: "emailIntern",
    message: "Enter email of Intern:"
},

{
    type: "input",
    name: "linkedinIntern",
    message: "Enter linkedin username of Intern:"
},
    ]);
}

// Write files into html
async function init() {
    console.log ("Welcome please Enter Information")

try {
    const answers = await promptUser();
    const html = generateHTML (answers);

    await writeFileAsync ("index.html", html);
    console.log ("Successfully wrote to index.html");
} catch (err) {
    console.log (err);
}
}
init ();