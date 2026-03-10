let sum = (arg) => {
    let toifasi = typeof arg;
    switch (toifasi) {
        case "number":
            return Math.sqrt(arg);
            break;
        case "string":
            return Math.sqrt(+arg);
            break;
        case "boolean":
            try {
                +arg;
            } catch (err) {
                alert(err);
            }
            break;
        case "object":
            if (Array.isArray(arg)) {
                return arg.map(n => Math.sqrt(n));
            } else if (toifasi !== null) {
                let summa = 0;
                for (prop in arg) {
                    if (typeof (prop) == "number") summa += prop;
                }
                return summa;
            }
    }
};
alert(sum(prompt()))