import { add } from "./index"


test('Wir testen die add function 3 + 3 ergibt 6, .toBe', () => {
    expect(add(3, 3)).toBe(6)
})

test('Wir testen die add function um .toEqual zu testen', () => {
    expect(add(10, 10)).toEqual(20)
})