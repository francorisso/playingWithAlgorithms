export function lsd(arr, W) {
    const N = arr.length;
    const DICTIONARY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let aux = [];

    for (let letterIdx = W - 1; letterIdx >= 0; letterIdx--) {
        const count = [0];

        // count the chars
        for (let i = 0; i < N; i++) {
            const pos = DICTIONARY.indexOf(arr[i][letterIdx]);
            count[pos + 1] = (count[pos + 1] || 0) + 1;
        }

        for (let i = 1; i < count.length; i++) {
            count[i] = (count[i] || 0) + (count[i-1] || 0);
        }


        aux = [];
        for (let i = 0; i < N; i++) {
            const pos = DICTIONARY.indexOf(arr[i][letterIdx]);
            aux[ count[pos]++ ] = arr[i];
        }
        arr = aux;
    }

    return aux;
}
