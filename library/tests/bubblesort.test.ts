import { assert, expect } from 'chai';
import { BubbleSort } from '../src/bubblesort';


describe('BubbleSort TDD', function () {
    let bubbleSort = new BubbleSort();
    it('Bubblesort class should contain an array', function () {
        expect(bubbleSort.startingArray).to.be.a('array');
    })
    it('Bubblesort array should contain two elements or more', function () {
        bubbleSort.startingArray.push(20);
        bubbleSort.sort(10, bubbleSort.startingArray);
        expect(bubbleSort.startingArray.length).to.equal(2);
    })
    it('Bubblesort method should return an array', function () {
        expect(bubbleSort.startingArray.length).to.equal(2);
    })
    it('the first element of the array should be bigger than the following', function () {
        expect(bubbleSort.startingArray[0]).to.be.greaterThan(bubbleSort.startingArray[1]);
    })
    it('if the first element is bigger than the second, swap the elements', function () {
        expect(bubbleSort.startingArray[0]).to.be.lessThan(bubbleSort.startingArray[1]);
    })
});
