const Employee = require ("../develop/employee");

test ("testing Employee", () => {
    const emp = new Employee ();
    expect (typeof(emp)).toBe("object");
});

test ("Name of Employee" , () => {
    const name = "John";
    const emp = new Employee (name);
    expect(emp.name).toBe(name);
});

test ("ID of Employee", () => {
    const testID = 00001;
    const emp = new Employee ("Testing", testID);
    expect (emp.id).toBe(testID);
});

test ("Email of Employee", () => {
    const testEmail = "john@test.com";
    const emp = new Employee ("testing", testEmail);
    expect(emp.email).toBe(testEmail);
});