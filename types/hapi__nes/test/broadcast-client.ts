// from https://github.com/hapijs/nes#broadcast

import Nes = require('@hapi/nes');

var client = new Nes.Client('ws://localhost');
client.connect().then(() => {

    client.onUpdate = function (update) {

        // update -> 'welcome!'
    };
});

// Added in addition to nes doc example code

import NesClient = require('@hapi/nes/client');

var client = new NesClient('ws://localhost');
client.connect().then(() => {

    client.onUpdate = function (update) {

        // update -> 'welcome!'
    };
});
