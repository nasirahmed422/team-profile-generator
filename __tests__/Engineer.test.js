const Engineer = require('../lib/Engineer');

test('create  Engineer object', () => {
  const engineer = new Engineer('John', 1, 'test@email.com', 'nasirahmed422');
  expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github value', () => {
  const engineer = new Engineer('John', 1, 'test@email.com', 'nasirahmed422');
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of employee', () => {
  const engineer = new Engineer('John', 1, 'test@email.com', 'nasirahmed422');
  expect(engineer.getRole()).toEqual("Engineer");
});