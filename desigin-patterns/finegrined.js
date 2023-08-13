// state->subs [effect,...]
// effect{
//     execute,
//     deps:(sub,sub...)
// }

const effectStack = [];

function subscribe(subs, effect) {
    subs.add(effect);
    effect.deps.add(subs);
}

function useState(value) {
    const subs = new Set();

    const getter = () => {
        //订阅
        const effect = effectStack[effectStack.length - 1];
        subscribe(subs, effect);
        return value;
    };

    const setter = (newValue) => {
        //触发notify
        value = newValue;
        for (const effect of [...subs]) {
            effect.execute();
        }
    };
    return [getter, setter];
}

function cleanUp(effect) {
    for (const sub of effect.deps) {
        sub.delete(effect);
    }
    effect.deps.clear();
}

function useEffect(callback) {
    const effect = {
        execute: null,
        deps: new Set(),
    };

    const execute = () => {
        cleanUp(effect);
        effectStack.push(effect);
        try {
            callback();
        } finally {
            effectStack.pop();
        }
    };

    effect.execute = execute;
    execute();
}

const [num, setNum] = useState(1);

useEffect(() => {
    console.log(num())
})

setNum(2)
