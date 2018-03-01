import sayHello from '../app/sayHello'

test('if sayHello return "Hello, world"', () => {
  expect(sayHello()).toBe('Hello, world!')
})
