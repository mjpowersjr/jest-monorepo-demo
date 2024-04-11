import { max } from '../src/index';

describe('max', () => {
    it('should return the maximum of two numbers', () => {
        expect(max(2, 5)).toBe(5);
        expect(max(10, 3)).toBe(10);
        expect(max(-1, -5)).toBe(-1);
    });

    it('should return the first number if both numbers are equal', () => {
        expect(max(5, 5)).toBe(5);
        expect(max(0, 0)).toBe(0);
        expect(max(-10, -10)).toBe(-10);
    });
});
