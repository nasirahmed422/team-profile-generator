const Intern = require('../lib/Intern');

test('create Intern object', () => {
  const intern = new Intern('John', 1, 'test@email.com', 'Baruch College');
  expect(intern.school).toEqual(expect.any(String));
});

test('get employee school', () => {
  const intern = new Intern('John', 1, 'test@email.com', 'Baruch College');
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get role of employee', () => {
  const intern = new Intern('John', 1, 'test@email.com', 'Baruch College');
  expect(intern.getRole()).toEqual("Intern");
}); 