const Employee = require ("../lib/Employee")

test("Create a new instance of employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Test name", () => {
    const name = "Heera";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Test ID", () => {
    const id = 3;
    const employeeInstance = new Employee("Heera", id);
    expect(employeeInstance.id).toBe(id);
})

test("Test email", () => {
    const email = "Heeratest@gmail.com";
    const employeeInstance = new Employee("Heera", 3, email);
    expect(employeeInstance.email).toBe(email);
})



test("Name here from getName method", () => {
    const testName = "Heera";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Test ID here from getID method", () => {
    const testID = 3;
    const employeeInstance = new Employee("Heera", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Testing email from getEmail method", () => {
    const testEmail = "Heeratest@gmai.com";
    const employeeInstance = new Employee("Heera", 3, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Test role here", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Heera", 3, "Heeratest@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})