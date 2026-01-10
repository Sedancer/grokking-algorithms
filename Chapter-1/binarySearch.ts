interface SearchProps<T> {
  arr: T[];
  target: T;
}

function binarySearch<T>({ arr, target }: SearchProps<T>): number {
    let left = 0;
    let right = arr.length - 1;
    let index = 0

    while (left <= right) {
        index = Math.floor((left + right) / 2); 
        if (arr[index] === target) {
            return index;
        } else if (arr[index] < target) {
            left = index + 1;
        } else {
            right = index - 1;
        } 
    }          

    return -1;
}

const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetNumber = 29;
const resultIndex = binarySearch({ arr: numbers, target: targetNumber });
const foundMessage = resultIndex !== -1 ? `at found index: ${resultIndex}` : "not found";
const stringTemplate = `Target number ${targetNumber} ${foundMessage}`;
console.log(stringTemplate);  

const alphabet = ["a" , "b", "c", "d", "e"];
const targetSrt = "c";
const resultIndexCh = binarySearch({ arr: alphabet, target: targetSrt });
console.log(`Target string ${targetSrt} found at index: ${resultIndexCh}`);