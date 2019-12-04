const Port = require('../src/Port.js');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('has a name', () => {
    const port = new Port('Good Ship Lollipop');
    expect(port.name).toBe('Good Ship Lollipop');
  });
});
