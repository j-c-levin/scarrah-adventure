'use strict';

const { ApiAiApp } = require('actions-on-google');
const functions = require('firebase-functions');

const Actions = {
    UNRECOGNIZED_DEEP_LINK: 'deeplink.unknown',
    TEST: 'test.test'
};

const unhandledDeepLinks = app => {
    app.tell('you aren\'t making any sense');
};

const actionMap = new Map();
actionMap.set(Actions.UNRECOGNIZED_DEEP_LINK, unhandledDeepLinks);

const handleAdventure = functions.https.onRequest((request, response) => {
    const app = new ApiAiApp({ request, response });
    console.log(`Request headers: ${JSON.stringify(request.headers)}\n\n`);
    console.log(`Request body: ${JSON.stringify(request.body)}`);
    app.handleRequest(actionMap);
});

module.exports = {
    handleAdventure
};
