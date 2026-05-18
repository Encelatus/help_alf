// help_alf.js
function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function(map) {
    if (map === '' || map.indexOf('X') === -1) {
        return 'Spaceship lost forever.';
    }
};