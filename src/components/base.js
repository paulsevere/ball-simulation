import React from 'react';
import 'd3'

function arrayOfRandoms(length, low, high) {
    return new Array(length).fill('').map(e => {
        return Math.floor(Math.random() * (high - low)) + low
    });
}

window.sha = window.d3.path()
