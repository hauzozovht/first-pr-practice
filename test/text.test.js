const test = require('node:test');
const assert = require('node:assert');
const { capitalize, slugify } = require('../src/text');

test('capitalize viết hoa chữ cái đầu', () => {
  assert.strictEqual(capitalize('hello'), 'Hello');
});

test('capitalize trả về chuỗi rỗng khi đầu vào rỗng', () => {
  assert.strictEqual(capitalize(''), '');
});

test('slugify chuyển chuỗi thường thành slug', () => {
  assert.strictEqual(slugify('Hello World'), 'hello-world');
});

test('slugify bỏ dấu tiếng Việt và chữ đ', () => {
  assert.strictEqual(slugify('Xin Chào Đà Nẵng'), 'xin-chao-da-nang');
});

test('slugify gộp ký tự đặc biệt và bỏ dấu gạch ở hai đầu', () => {
  assert.strictEqual(slugify('  --Giá: 100% !!  '), 'gia-100');
});
