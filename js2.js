let sum = (arg)=> {
    if (typeof (arg) == "number")
        return Math.sqrt(arg);
    else if (typeof (arg) == "string") return Math.sqrt(+arg);
    else if (typeof (arg) == "boolean") {
        try {
            +arg;
        } catch (err) {
            alert(err);
        }
    } else if (Array.isArray(arg)) {
        return arg.map(n => Math.sqrt(n));
    }
    else if (typeof (arg) == "object") {
        let summa;
        for (prop in arg) {
            if(typeof (prop) == "number") summa += prop;
        }
        return summa;
    }
};
alert(sum(prompt()))