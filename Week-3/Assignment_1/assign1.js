function memorize(fn){       
    const cache = new Map();
    return function (...args){
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key)
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}


function add(a, b){
    return a + b;
}


function time(fn){
    console.time();
    fn();
    console.timeEnd();
}


const addM = memorize(add);


time(() => addM(3, 5));
time(() => addM(3, 5));
time(() => addM(3, 5));