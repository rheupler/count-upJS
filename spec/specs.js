describe('count', function() {
  it('counts up to multiple by a given numner', function() {
    expect(count(5, 20)).to.eql([5, 10, 15, 20]);
  });
});
