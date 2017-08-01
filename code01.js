require ('rxjs/add/operator/filter');
let Subject = require('rxjs/Subject').Subject;

let number = process.argv[2];

let pair = new Subject();
let unpair = new Subject();

let countPair = 0;
let countUnpair = 0;

let pairSubscription = pair.filter(data =>(data % 2) === 0).subscribe(next => {++countPair});
let unpairSubscription = unpair.filter(data => (data % 2) > 0).subscribe(next => {++countUnpair});

for (let i = 0; i < number; i++){
    pair.next(i);
    unpair.next(i);
}

console.log('Number of pairs: ', countPair);
console.log('Number of unpair: ', countUnpair);
pair.unsubscribe();
unpair.unsubscribe();