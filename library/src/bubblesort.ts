export default class BubbleSort {
    startingArray: number[] = [];

    sort(value: number): number[] {
        let tempArray = this.startingArray;
        tempArray.push(value);
        if (tempArray.length >= 2) {
            for (var i = 0; i < tempArray.length - 1; i++) {
                let swapped = false;
                for (var n = 0; n < tempArray.length - i - 1; n++) {
                    if (tempArray[n] > tempArray[n + 1]) {
                        let tempVal = tempArray[n + 1];
                        tempArray[n + 1] = tempArray[n];
                        tempArray[n] = tempVal;
                        swapped = true;
                    }
                }
                if (swapped == false) 
                break; 
            }
        } else {
            console.log('the array contains only one element')
        }
        this.startingArray = tempArray;
        return tempArray;
    }
}