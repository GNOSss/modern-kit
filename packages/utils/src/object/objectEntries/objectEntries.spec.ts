import { describe, it, expect } from 'vitest';
import { objectEntries } from '.';

describe('objectEntries', () => {
  it('Object.entries()와 동일하게 동작해야 합니다', () => {
    const symbol = Symbol('d');
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      [symbol]: 4,
    } as const;

    const entries = objectEntries(obj); // ["a" | "b" | "c", 1 | 2 | 3][]

    expect(entries).toStrictEqual(Object.entries(obj));
    expect(entries).toStrictEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
