let items = [{
        humanName: "Ali",

        price: 300
    },
    {
        humanName: "Javlon",

        price: 200
    },
    {
        humanName: "Sardor",

        price: 400
    }
]

var res = items.reduce((acc, elem) => {
    if (!acc.price || acc && acc.price < elem.price) {
        acc = elem
    }
    return acc;
}, {});
console.log(res.humanName)


const arr1 = [true, true, false, true];
const count1 = arr1.filter(value => value === true).length;
console.log(count1);

const arr = [5, -3, -5, -7, -8, 10, 13];
const sumPositives = (arr = []) => {
    const isPositive = num => typeof num === 'number' && num > 0;
    const res = arr.reduce((acc, val) => {
        if (isPositive(val)) {
            acc += val;
        };
        return acc;
    }, 0);
    return res;
};
console.log(sumPositives(arr));