function generateHTML (answers) {
    console.log (answers)
return `
<!DOCTYPE html>
        <html lang="en">
    
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            </link>
            <link rel= "stylesheet" type = "text/css" href ="style.css">

            <title>Employee Generator</title>
    
            
        </head>
    
        <body>
    
            <div class="wrapper">
                <div class="card text-center">
                    <div class="card-header card border-dark mb-4">
                        <h5>My Team</h5>
                    </div>
                    <div class="card-body">
    
                        <div class="row row-cols-1 row-cols-md-3">
                            <div class="col mb-4">
                                <div class="card border-dark mb-4" style="width: 19rem;">
                                    <div class="card-header">
                                        <h5>Office Number: ${answers.officeManager}</h5>
                                        <h5></i>Manager: ${answers.nameManager}</h5>
                                    </div>
                                    <div class="card-body text-dark">
                                        <div class="card" style="width: 16rem;">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item" style="text-align:left"><strong>ID: ${answers.idManager}</strong></li>
                                                <li class="list-group-item" style="text-align:left"><strong>Email: ${answers.emailManager}</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="col mb-4">
                                <div class="card border-dark mb-4" style="width: 19rem;">
                                    <div class="card-header">
                                        <h5>Office Number: ${answers.officeEngineer}</h5>
                                        <h5></i>Engineer Name: ${answers.nameEngineer}</h5>
                                    </div>
                                    <div class="card-body text-dark">
                                        <div class="card" style="width: 16rem;">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item" style="text-align:left"><strong>ID: ${answers.idEngineer}</strong></li>
                                                <li class="list-group-item" style="text-align:left"><strong>Email: ${answers.emailEngineer}</strong></li>
                                                <li class="list-group-item" style="text-align:left"><strong>Github: ${answers.githubEngineer} </strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="col mb-4">
                                <div class="card border-dark mb-4" style="width: 19rem;">
                                    <div class="card-header">
                                        <h5>Office Number: ${answers.officeDeveloper}</h5>
                                        <h5></i>Developer Name: ${answers.nameDeveloper}</h5>
                                    </div>
                                    <div class="card-body text-dark">
                                        <div class="card" style="width: 16rem;">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item" style="text-align:left"><strong>ID: ${answers.idDeveloper}</strong></li>
                                                <li class="list-group-item" style="text-align:left"><strong>Email: ${answers.emailDeveloper}</strong></li>
                                                <li class="list-group-item" style="text-align:left"><strong>Github: ${answers.githubDeveloper}</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                    
    
                            <div class="col mb-4">
                                <div class="card border-dark mb-4" style="width: 19rem;">
                                    <div class="card-header">
                                        <h5></h5>
                                        <h5></i>Intern Name: ${answers.nameIntern}</h5>
                                    </div>
                                    <div class="card-body text-dark">
                                        <div class="card" style="width: 16rem;">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item" style="text-align:left"><strong>ID: ${answers.idIntern}</strong></li>
                                                <li class="list-group-item" style="text-align:left"><strong>Email: ${answers.emailIntern}</strong></li>
                                                <li class="list-group-item" style="text-align:left"><strong>Linkedin: ${answers.linkedinIntern} </strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                crossorigin="anonymous"></script>
        </body>
    
        </html> ` ;
    
}
module.exports=generateHTML