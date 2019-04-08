export class BubbleSort {
startingArray: number[] = [];

sort( value: number, array: number[]): number[] {
    let tempArray = []
    array.push(value);
    if( array.length >= 2 ) {
        tempArray = array;
        if(tempArray[0] > tempArray[1] ) {
            let tempVal = tempArray[1];
            tempArray[1] = tempArray[0];
            tempArray[0] = tempVal;
        }
    }

    return tempArray;
}
}