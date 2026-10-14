const test = require('node:test');
const assert = require('node:assert');
const { capitalize } = require('../src/text');

test('capitalize viết hoa chữ cái đầu', () => {
  assert.strictEqual(capitalize('hello'), 'Hello');
});

test('capitalize trả về chuỗi rỗng khi đầu vào rỗng', () => {
  assert.strictEqual(capitalize(''), '');
});
