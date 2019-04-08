import { assert, expect } from 'chai';
import { BubbleSort } from '../src/bubblesort';


describe('BubbleSort TDD', function () {
    let bubbleSort = new BubbleSort();
    it('Bubblesort class should contain an array', function () {
        expect(bubbleSort.startingArray).to.be.a('array');
    })
    it('if the starting array is empty, the sort method should return an array with one element', function () {
        expect(bubbleSort.sort(20, bubbleSort.startingArray).length).to.equal(1);
    })
    it('if a smaller element is added to the array, swap the elements', function () {
        bubbleSort.sort(15, bubbleSort.startingArray);
        expect(bubbleSort.startingArray[0]).to.be.lessThan(bubbleSort.startingArray[1]);
    })
    it('Bubblesort array should contain two elements', function () {
        expect(bubbleSort.startingArray.length).to.equal(2);
    })
    it('adds a third element to the array', function () {
        bubbleSort.sort(5, bubbleSort.startingArray);
        expect(bubbleSort.startingArray.length).to.equal(3);
    })
    it('the third element must have been swapped with the second', function() {
        expect(bubbleSort.startingArray[1]).to.equal(5);
    })
    it('the first element must be smaller than the new element in second position', function() {
        expect(bubbleSort.startingArray[0]).to.be.lessThan(bubbleSort.startingArray[1]);
    })
});
