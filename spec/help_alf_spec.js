describe('Help ALF', function() {
    beforeEach(function() {
        finder = new HelpAlf();
    });

    it('should return "Spaceship lost forever." for an empty map', function() {
        expect(finder.findSpaceship('')).toEqual('Spaceship lost forever.');
    });
});