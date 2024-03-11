if(1){
    const recursive = (arr, acc, i) => i < arr.length ? recursive(arr, acc + `,${el.stringify(arr[i])}`, i + 1) : `[${acc.substr(1)}]`;
    const stringify = arr => {
        if(!Array.isArray(arr)) throw "invalid arr";
        if(arr.length == 0) return "[]";
        else return recursive(arr, "", 0);
    }
}