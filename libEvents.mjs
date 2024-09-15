import {EventEmitter} from "events";

const emitter = new EventEmitter();

emitter.addListener("hallo", (name) => {
    console.info(`hallo ${name}`);
});
emitter.addListener("hallo", (name) => {
    console.info(`adios amigos ${name}`);
}); 

emitter.emit("hallo", "tara");