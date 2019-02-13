/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var body = document.querySelector('body');

var blauwKnop = document.querySelector('form input[name=blauw]');

var bruinKnop = document.querySelector('form input[name=bruin]');



blauwKnop.onclick = function () {
    body.classList.toggle('blauw');
};


bruinKnop.onclick = function () {
    body.classList.toggle('bruin');
};

