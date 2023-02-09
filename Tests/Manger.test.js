
const Manager = require("../lib/manager");

test("Create an office number", () => {
    const testOfficeNumber = 3;
    const employeeInstance = new Manager("Heera", 3, "Heeratest@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 3;
    const employeeInstance = new Manager("Heera", 3, "Heeratest@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Heera", 3, "Heeratest@gmail.com", 3);
    expect(employeeInstance.getRole()).toBe(returnValue);
});