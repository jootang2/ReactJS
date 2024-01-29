if(1){
    const _sum = (a, acc) => {
        return a.length === 0 ? acc : _sum(a.slice(1), acc + a[0])
    }

    const sum = (a) => _sum(a, 0)

    const array = [15,2,3,1,6];

    console.log("sum", sum(array));
}

if(1) {
    const array = [15,2,3,1,6];
    let acc = 0;
    for(let i = 0; i <array.length; i ++){
        acc += array[i]
    }
    console.log("acc", acc)
}

if(1) {
    const array = [15,2,3,1,6];
    const _sum = (a, acc) => {
        return a.length > 1 ? _sum(a.slice(1), acc + a[0]): acc + a[0]
    }
    const sum = (a) => _sum(a,0);
    console.log("sum", sum(array))
}

if(1) {
    const array = [15,2,3,1,6];
    let acc = 0;
    for(let i = array.length-1 ; i > 0; i --) {
        acc += array[i];
    }
    acc += array[0];
    console.log("acc", acc)
}