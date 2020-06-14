const Intern = require ("../develop/intern");



test ("Github username" , () => {
    const testuser = "linkedin";
    const emp = new Intern ("Testing", testuser);
    expect(emp.linkedin).toBe(testuser);
});

test ("ID of Engineer", () => {
    const testID = 00001;
    const emp = new Intern ("Testing", testID);
    expect (emp.id).toBe(testID);
});

test ("Email of Engineer", () => {
    const testEmail = "john@test.com";
    const emp = new Intern ("testing", testEmail);
    expect(emp.email).toBe(testEmail);
});