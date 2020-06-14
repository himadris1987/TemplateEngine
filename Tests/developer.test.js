const Developer = require ("../develop/developer");



test ("Github username" , () => {
    const testuser = "GithubUser";
    const emp = new Developer ("Testing", testuser);
    expect(emp.github).toBe(testuser);
});

test ("ID of Engineer", () => {
    const testID = 00001;
    const emp = new Developer ("Testing", testID);
    expect (emp.id).toBe(testID);
});

test ("Email of Engineer", () => {
    const testEmail = "john@test.com";
    const emp = new Developer ("testing", testEmail);
    expect(emp.email).toBe(testEmail);
});