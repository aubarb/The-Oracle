const day = () => {return 1 + Math.floor(Math.random() * 30)};

const month = () => {
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const i = Math.floor(Math.random() * 11);
    return monthList[i];
};

const year = () => {return 2022 + Math.floor(Math.random() * 50);};

const date = () => {return day() + ' ' + month() + ' ' + year()};

const whenArray = [`On the ${date()}`, `Around the ${day()} of ${month()}`, `In ${month()}`, `During year ${year()}`];

const whoArray = ["you", "one of your family member", 'your best friend', 'that guy you hate', 'your colleague', 'your crush', 'your neighboor', 'the President of the United States'];

const actionArray = ['probably die because of', 'discover', 'find', 'learn all about', 'come across', 'dream about', 'watch a strange movie about', 'have an insightful discussion about'];

const objectArray = ['a yogurt', 'an apple', 'a weird bird', 'a WWII buried bomb', 'an old lady', 'a comet', 'a colorful mushroom', 'the truth', 'a heist taking place', 'your biggest fear', 'money', '... Hum, my vision stops here... I think it is related to something...'];

const whereArray = ['in your house', 'in your garden', 'at Starbuck', 'at the grocery store', 'in a dark forest', '... not sure where, but I see the color blue'];

const when = () => {
    let j = Math.floor(Math.random() * 4);
    return whenArray[j];
};

const who = () => {
    let k = Math.floor(Math.random() * 8);
    return whoArray[k];
};

const action = () => {
    let l = Math.floor(Math.random() * 8);
    return actionArray[l];
};

const object = () => {
    let m = Math.floor(Math.random() * 12);
    return objectArray[m];
};

const where = () => {
    let n = Math.floor(Math.random() * 6);
    return whereArray[n];
};

const prediction = () => {
    document.getElementById("output").innerHTML = when() + ' ' + who() + ' will ' + action() + ' ' + object() + ' ' + where();
};
