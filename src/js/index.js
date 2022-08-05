import { recordActions, stopRecording, saveActualState } from './helper/recorder.js'
import Runner from './classes/runner.js'

let fields = {}

const runner = new Runner(fields);

const keysPressed = {}

document.addEventListener('keydown', ({ key }) => {

    keysPressed[key] = true;

    if (keysPressed['Control'] && key === '.') {
        fields = []
        recordActions(runner)

        console.log('Recording...');

    }

    if (keysPressed['Control'] && key === ',') {
        stopRecording(runner)
        console.log('Saving...');
    }

    if (keysPressed['Control'] && key === 'Enter') {
        console.log('Playing...');

        console.log(runner.fields);

        runner.run();
    }

    if (keysPressed['Control'] && keysPressed['Shift'] && key === '>') {
        console.log('Saving Actual State...');

        saveActualState()
    }
})

document.addEventListener('keyup', ({ key }) => {
    delete keysPressed[key];
})