let day = () => {return 1 + Math.floor(Math.random() * 30)};

let month = () => {
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const i = Math.floor(Math.random() * 11);
    return monthList[i];
};

let year = () => {return 2022 + Math.floor(Math.random() * 50);};

let date = () => {return day() + ' ' + month() + ' ' + year()};

const when = () => {
    let whenArray = [`On the ${date()}`, `Around the ${day()} of ${month()}`, `In ${month()}`, `During year ${year()}`];
    let j = Math.floor(Math.random() * 4);
    return whenArray[j];
};

const who = () => {
    let whoArray = ["you", "one of your family member", 'your best friend', 'that guy you hate', 'your colleague', 'your crush', 'your neighboor', 'the President of the United States'];
    let k = Math.floor(Math.random() * 8);
    return whoArray[k];
};

const action = () => {
    let actionArray = ['probably die because of', 'discover', 'find', 'learn all about', 'come across', 'dream about', 'watch a strange movie about', 'have an insightful discussion about'];
    let l = Math.floor(Math.random() * 8);
    return actionArray[l];
};

const object = () => {
    let objectArray = ['a yogurt', 'an apple', 'a weird bird', 'a WWII bomb buried', 'an old lady', 'a comet', 'a colorful mushroom', 'the truth', 'a heist taking place', 'your biggest fear', 'money', '... Hum, my vision stops here... I think it is related to something...'];
    let m = Math.floor(Math.random() * 12);
    return objectArray[m];
};

const where = () => {
    let whereArray = ['in your house', 'in your garden', 'at Starbuck', 'at the grocery store', 'in a dark forest', '... not sure where, but I see the color blue'];
    let n = Math.floor(Math.random() * 6);
    return whereArray[n];
};

const prediction = () => {
    document.getElementById("output").innerHTML = when() + ' ' + who() + ' will ' + action() + ' ' + object() + ' ' + where();
};
