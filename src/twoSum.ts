function twoSum(numArray: number[], sum: number) {
    let pairs: number[][] = []
    let hashTable: number[] = []

    for (var i = 0; i < numArray.length; i++) {
        let currNum = numArray[i]
        let counterpart = sum - currNum
        if (hashTable.indexOf(counterpart) !== -1) {
            pairs.push([currNum, counterpart])
        }
        hashTable.push(currNum)
    }

    console.log(pairs)
}

twoSum([1, 6, 4, 5, 3, 3], 7)
