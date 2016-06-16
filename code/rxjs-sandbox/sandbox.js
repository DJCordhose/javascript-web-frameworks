// import Rx from 'rxjs/Rx';

const Rx = require('@reactivex/rxjs');

// const observable = Rx.Observable.of(1,2,3);
// console.log(observable);

// Rx.Observable.of('hello world')
Rx.Observable.of(1, 2, 3)
    .subscribe(function(x) { console.log(x); });