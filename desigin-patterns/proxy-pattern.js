const person = {
    name: "John Doe",
    age: 42,
    nationality: "American",
};

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        if (!obj[prop]) {
            console.log(
                `Hmm.. this property doesn't seem to exist on the target object`
            );
        } else {
            console.log(`The value of ${prop} is ${obj[prop]}`);
        }
        return obj[prop]; // 返回属性的值
    },
    set: (obj, prop, value) => {
        if (prop === "age" && typeof value !== "number") {
            console.log(`Sorry, you can only pass numeric values for age.`);
        } else if (prop === "name" && value.length < 2) {
            console.log(`You need to provide a valid name.`);
        } else {
            console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
            obj[prop] = value;
        }
        return true; // 返回 true 表示设置属性成功
    },
});

personProxy.name; // 输出: The value of name is John Doe
personProxy.age = 44; // 输出: Changed age from 42 to 44.
personProxy.name = "Tom"; // 输出: Changed name from John Doe to Tom.
personProxy.age; // 输出: The value of age is 44
