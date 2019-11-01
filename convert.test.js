const currency = require('./convertToB.js')

test('return $0.00 if money = 0', () => {
    expect(currency(0)).toEqual('$0.00');
});

test('return $0.03 if money = 1', () => {
    expect(currency(1)).toEqual('$0.03');
});

test('return $-0.03 if money = -1', () => {
    expect(currency(-1)).toEqual('$-0.03');
});

test('return $0.09 if money = 3', () => {
    expect(currency(3)).toEqual('$0.09');
});

test('return $-0.09 if money = -3', () => {
    expect(currency(-3)).toEqual('$-0.09');
});

test('return $0.15 if money = 5', () => {
    expect(currency(5)).toEqual('$0.15');
});

test('return $-0.15 if money = -5', () => {
    expect(currency(-5)).toEqual('$-0.15');
});

test('return $0.30 if money = 10', () => {
    expect(currency(10)).toEqual('$0.30');
});

test('return $-0.30 if money = -10', () => {
    expect(currency(-10)).toEqual('$-0.30');
});

test('return $0.60 if money = 10', () => {
    expect(currency(20)).toEqual('$0.60');
});

test('return $-0.60 if money = -10', () => {
    expect(currency(-20)).toEqual('$-0.60');
});