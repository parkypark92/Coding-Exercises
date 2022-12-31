//implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.


function arrayDiff(array, secondArray) {
    for(let checkItem of secondArray) {
        array = array.filter(item => 
            item !== checkItem)
    };
    return array;
};

console.log(arrayDiff([1, 3, 7, 12, 50], [50, 9, 1]));