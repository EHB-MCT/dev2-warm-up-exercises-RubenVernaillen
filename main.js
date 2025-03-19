import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();
warmup2();
warmup3();


function warmup1() { //eerst queryslector(waar wil je ) dan eventlistener
    console.log("Exercise week 1");
    document.querySelector("#button-1a").addEventListener('click', function () {
        console.log('clicked OK');
        const p = '<p>Hello world  im Ruben </p>';
        document.querySelector('#content-1').innerHTML = p;

    });



}

function warmup2() {
    console.log("Exercise week 2");
    let scores = getRandomScores(10);


    document.querySelector("#button-2a").addEventListener('click', function () {


        //scores.sort(); (alfabetisch gesorteerd)
        let html = "<ul>";
        scores.forEach(function (score) {
            console.log(score);
            html += `<li>${score}</li>`; // $ variable in string kunnen zetten 
        });
        html += '</ul>';

        document.querySelector('#content-2').innerHTML = html;




    });


    document.querySelector("#button-2b").addEventListener('click', function () {

        scores.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            else (a > b)
            return 1;

        });
        let html = "<ul>";
        scores.forEach(function (score) {
            console.log(score);
            html += `<li>${score}</li>`;
        });

        html += '</ul>';
        document.querySelector('#content-2').innerHTML = html;


    });
    document.querySelector("#button-2c").addEventListener('click', function () {



        scores.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            else (a > b)
            return 1;

        });
        let html = "<ul>";
        scores.forEach(function (score) {
            console.log(score);
            html += `<li>${score}</li>`;
        });
        html += '</ul>';
        document.querySelector('#content-2').innerHTML = html;
        const sum = scores.reduce(function (total, current) {
            return total + current;

        },);
        document.querySelector('#content-2').innerHTML += `<p>Total: ${sum}</p>`;


    });
}



function warmup3() {


    let student = getStudentJSON();
    console.log("Exercise week 1");

    document.querySelector("#button-3a").addEventListener('click', function () {
        const studentObject = JSON.parse(student);
        console.log(studentObject);
    });
    document.querySelector("#button-3b").addEventListener('click', function () {
        const studentObject = JSON.parse(student);

        document.querySelector('#content-3').innerHTML = `<h2>${studentObject.name}</h2>`;
    });

}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}
