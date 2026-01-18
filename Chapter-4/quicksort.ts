function quicksort(array: number[]): number[] {
    if (array.length < 2) {
        return array;
    } else {
        const pivot = array[0];
        const less: number[] = array.slice(1).filter(i => i <= pivot);
        const greater: number[] = array.slice(1).filter(i => i > pivot);
        return [...quicksort(less), pivot, ...quicksort(greater)];
    }
}
console.log(quicksort([10, 5, 2, 3]));