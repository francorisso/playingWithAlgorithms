export function keyIndexSort(arr, R) {
    const counter = new Array(R + 2).fill(0);
    arr.forEach(({ key }) => {
        counter[key + 1]++;
    });
    for (let i = 0; i < counter.length - 1; i++) {
        counter[i + 1] += counter[i];
    }

    const byKey = [];
    for (let i = 0; i < arr.length; i++) {
        byKey[counter[arr[i].key]++] = arr[i];
    }

    return byKey;
}
