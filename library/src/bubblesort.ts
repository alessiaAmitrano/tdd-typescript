export class BubbleSort {
startingArray: number[] = [];

sort( value: number, array: number[]): number[] {
    let tempArray = array;
    array.push(value);
    if( array.length >= 2 ) {
        for (var n = 0; n < tempArray.length - 1; n++)
        if(tempArray[n] > tempArray[n+1] ) {
            let tempVal = tempArray[n+1];
            tempArray[n+1] = tempArray[n];
            tempArray[n] = tempVal;
        }
    } else {
        console.log('the array contains only one element')
    }
    return tempArray;
}
}