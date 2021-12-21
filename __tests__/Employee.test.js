const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('John', 1, 'test@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employee name', () => {
    const employee = new Employee('John', 1, 'test@email.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee ID', () => {
    const employee = new Employee('John', 1, 'test@email.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () => {
    const employee = new Employee('John', 1, 'test@email.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get role of employee', () => {
    const employee = new Employee('John', 1, 'test@email.com');
    expect(employee.getRole()).toEqual("Employee");
}); 