const mathOperations = require('./mathOperations') 
 
describe("Testing Calculations", () => {
 test('1 + 2 should be 3', () => {
   var result = mathOperations.sum(1,2)
   expect(result).toBe(3);
 });
 
 test("10 - 2 should be 8", () => {
   var result = mathOperations.diff(10,2)
   expect(result).toBe(8);
 });
 
 test("2 * 8 should be 16", () => {
   var result = mathOperations.product(2,8)
   expect(result).toBe(16);
 });
})