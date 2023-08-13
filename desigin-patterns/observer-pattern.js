import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { Button, Switch, FormControlLabel } from "@material-ui/core";

class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter((observer) => observer !== func);
    }

    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }
}

const observable = new Observable();

function logger(data) {
    console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
    toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
    function handleClick() {
        observable.notify("User clicked button!");
    }

    function handleToggle() {
        observable.notify("User toggled switch!");
    }

    return (
        <div className="App">
            <Button>Click me!</Button>
            <FormControlLabel control={<Switch />} />
            <ToastContainer />
        </div>
    );
}
