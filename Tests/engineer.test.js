const Engineer = require ("../develop/engineer");



test ("Github username" , () => {
    const testuser = "GithubUser";
    const emp = new Engineer ("Testing", testuser);
    expect(emp.github).toBe(testuser);
});

test ("ID of Engineer", () => {
    const testID = 00001;
    const emp = new Enginner ("Testing", testID);
    expect (emp.id).toBe(testID);
});

test ("Email of Engineer", () => {
    const testEmail = "john@test.com";
    const emp = new Engineer ("testing", testEmail);
    expect(emp.email).toBe(testEmail);
});