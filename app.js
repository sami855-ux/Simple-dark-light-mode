'use strict';

const btnSwapp = document.querySelector('.btn-light');
const body = document.body;
const span = document.querySelectorAll('.item span');
const btnOrder = document.querySelector('.btn');
const item = document.querySelectorAll('.item');
const wrapp = document.querySelectorAll('.wrapper');
const box = document.querySelector('.dark-light');

let swappedClicked = false;

btnSwapp.addEventListener('click', () => {
    if (swappedClicked === false) {
        btnSwapp.style.backgroundColor = '#666';
        body.style.backgroundColor = '#f8f8f8';
        item.forEach(ite => {
            ite.style.backgroundColor = '#f6f6f6';
            ite.style.borderColor = '#f5f5f5';
            ite.style.boxShadow = '2px 2px 10px #d6cb9a';
        })

        span.forEach(spa => {
            spa.style.color = '#222';

        });
        wrapp.forEach(wrap => {
            wrap.style.borderColor = '#f6f6f6';
            wrap.style.backgroundColor = 'rgba(223, 221, 211, 0.3)';
            wrap.style.boxShadow = '5px 5px 12px #dfddd3';

        });
        swappedClicked = true;
    }
    else if (swappedClicked === true) {
        btnSwapp.style.backgroundColor = '';
        body.style.backgroundColor = '';
        item.forEach(ite => {
            ite.style.backgroundColor = '';
            ite.style.borderColor = '';
            ite.style.boxShadow = 'none';
        })

        span.forEach(spa => {
            spa.style.color = '';

        });
        wrapp.forEach(wrap => {
            wrap.style.borderColor = '';
            wrap.style.backgroundColor = '';
            wrap.style.boxShadow = '';

        });
        swappedClicked = false;
    }
});