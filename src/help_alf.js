// help_alf.js
function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function(map) {
    if (map === '' || map.indexOf('X') === -1) {
        return 'Spaceship lost forever.';
    }
    var rows = map.split('\n');
    for (var i = 0; i < rows.length; i++) {
        var x = rows[i].indexOf('X');
        if (x !== -1) {
            var y = (rows.length - 1) - i;
            return [x, y];
        }
    }
};