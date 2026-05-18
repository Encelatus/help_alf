describe("Help ALF", function () {
  beforeEach(function () {
    finder = new HelpAlf();
  });

  it('should return "Spaceship lost forever." for an empty map', function () {
    expect(finder.findSpaceship("")).toEqual("Spaceship lost forever.");
  });
  it('should return "Spaceship lost forever." when X is not in the map', function () {
    expect(finder.findSpaceship(".........")).toEqual(
      "Spaceship lost forever.",
    );
  });
  it("should find X in a single-row map", function () {
    expect(finder.findSpaceship(".X.")).toEqual([1, 0]);
  });
  it("should find X in a multi-row map with bottom-left as [0, 0]", function () {
    var map = "..\n..\nX.\n..";
    expect(finder.findSpaceship(map)).toEqual([0, 1]);
  });
});
