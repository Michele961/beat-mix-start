// Use this presets array inside your presetHandler
// const _ = require('lodash');
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsIndex, newPresetArray) => {
    const response = [];
    if (presetsIndex > presets.length || presetsIndex < 0) {
        response[0] = 404;
    } else if (!["GET", "PUT"].includes(requestType)) {
        response[0] = 400;
    } else {
        response[0] = 200;
        response[1] = requestType === 'GET' ? presets[presetsIndex] : (presets[presetsIndex] = newPresetArray);
    }

    return response;
};


// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
