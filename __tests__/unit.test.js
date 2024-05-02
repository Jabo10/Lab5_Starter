// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('correct phone number format - ', () => {
    expect(isPhoneNumber('999-999-9999')).toBe(true);
  });

  test(' correct phone number format () ', () => {
    expect(isPhoneNumber('(999) 999-9999')).toBe(true);
  });

  test('false incomplete phone number', () => {
    expect(isPhoneNumber('999-999')).toBe(false);
  });

  test('false non number string', () => {
    expect(isPhoneNumber('the-the-thee')).toBe(false);
  });
});

describe('isEmail', () => {
  test('correct email format', () => {
    expect(isEmail('email@email.com')).toBe(true);
  });

  test('correct email with numbers + underscore', () => {
    expect(isEmail('email145@email.com')).toBe(true);
  });

  test('false email no domain', () => {
    expect(isEmail('email@')).toBe(false);
  });

  test('false email without no @', () => {
    expect(isEmail('emailemail.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('correct strong password', () => {
    expect(isStrongPassword('Z5v8n4f9')).toBe(true);
  });

  test('correct minimal password', () => {
    expect(isStrongPassword('Zvn5')).toBe(true);
  });

  test('false too short', () => {
    expect(isStrongPassword('Zv5')).toBe(false);
  });

  test('false not allowed special characters', () => {
    expect(isStrongPassword('Z5v8n4#@!')).toBe(false);
  });
});

describe('isDate', () => {
  test('correct date format', () => {
    expect(isDate('4/12/2000')).toBe(true);
  });

  test('correct date single digit day and month', () => {
    expect(isDate('4/1/2000')).toBe(true);
  });

  test('false date format', () => {
    expect(isDate('122/22/2000')).toBe(false);
  });

  test('false writen date', () => {
    expect(isDate('April 12, 2000')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('correct 6 character hex color', () => {
    expect(isHexColor('#ffffff')).toBe(true);
  });

  test('correct 3 character hex color', () => {
    expect(isHexColor('#fff')).toBe(true);
  });

  test('false hex color without #', () => {
    expect(isHexColor('12345')).toBe(false);
  });

  test('false hex color', () => {
    expect(isHexColor('#54321h')).toBe(false);
  });
});

