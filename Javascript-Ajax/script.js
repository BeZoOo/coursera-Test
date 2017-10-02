/*global $ajaxUtils*/

// Event handling
document.addEventListener('DOMContentLoaded',
    function (event) {
        'use strict';
    
        // Unobstrusive event binding
        document.querySelector('button').addEventListener('click', function () {
        // Call server to get the name
            $ajaxUtils.sendGetRequest('name.json',
                function (res) {
                
                    var message = res.firstName + " " + res.lastName;
                   
                    if (res.likesChineseFood) {
                        message += " likes Chinese food";
                   
                    } else {
                        message += " doesn't like Chinese food";
                    }
                    
                    message += " and uses ";
                    message += res.numberOfDisplays + 1;
                    message += " display for coding.";
                
                    document.querySelector('#content')
                            .innerHTML = '<h2>Hello ' + message + ' !';
                });
    
        });
    
    }
                         );