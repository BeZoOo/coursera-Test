/*global console*/
(function () {
    'use strict';
    
    var Elbaz,
        Mohamed,
        Atef,
        Koko,
        Botshy,
        John,
        Rewan,
        Youmna,
        David,
        Neilson;
        
    
    var names = [
        'Elbaz',
        'Mohamed',
        'Atef',
        'Jain',
        'Koko',
        'Botshy',
        'John',
        'Jorge',
        'Rewan',
        'Youmna',
        'David'
    ];
    
    for (var i = 0; i < names.length; i++) {
        
        var firstLetter = names[i].charAt(0).toLowerCase();
        
        if (firstLetter === 'j') {
        
            sayBye(names[i]);
        
        } else {
            
            sayHello(names[i]);
        }
    }
    
})();



