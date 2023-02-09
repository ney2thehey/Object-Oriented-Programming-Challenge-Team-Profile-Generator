
const Engineer = require("../lib/engineer");

test("Create github", () => {
    const testGithub = "ney2thehey";
    const employeeInstance = new Engineer("Heera", 3, "Heeratest@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "ney2thehey";
    const employeeInstance = new Engineer("Heera", 3, "Heeratest@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Heera", 3, "Heeratest@gmail.com", "ney2thehey");
    expect(employeeInstance.getRole()).toBe(returnValue);
});