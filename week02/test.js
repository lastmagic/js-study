const assert = e => {
    if (!e) throw 'asdf'
    return true
}

try {
    assert(false);
} catch (e) {
    console.log(e);
}

test('1 is 1', () => {
    expect(1).toBe(1);
  });
  