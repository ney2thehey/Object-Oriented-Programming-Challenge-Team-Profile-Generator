const Intern = require("../lib/intern");

test("Create school", () => {
    const testSchool = "New School";
    const employeeInstance = new Intern("Heera", 3, "Heeratest@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Test officeNumber to return new office number", () => {
    const testSchool = "New School";
    const employeeInstance = new Intern("Heera", 3, "Heeratest@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Test role", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Heera", 3, "Heeratest@gmail.com", "New School");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
