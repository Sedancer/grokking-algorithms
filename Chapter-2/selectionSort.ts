function findSmallestIndex(arr: number[]): number {
    let smallestElement = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestElement) {
            smallestElement = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort(arr: number[]): number[] {
    const newArr: number[] = [];
    const sourceArr = [...arr]; 

    while (sourceArr.length > 0) {
        const smallestIndex = findSmallestIndex(sourceArr);
        const [removedElement] = sourceArr.splice(smallestIndex, 1);
        newArr.push(removedElement);
    }

    return newArr;
}


function selectionSort2(arr: number[]): number[] {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        let smallestIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }
         
        if (smallestIndex !== i) {
            [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
console.log(selectionSort2([5, 4, 3, 27, 1]));