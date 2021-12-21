const Manager = require('../lib/Manager');

test('create Manager object', () => {
  const manager = new Manager('John', 1, 'test@email.com', 100);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get role of employee', () => {
  const manager = new Manager('John', 1, 'test@email.com', 100);
  expect(manager.getRole()).toEqual("Manager");
}); 