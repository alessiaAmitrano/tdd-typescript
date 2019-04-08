import { assert, expect } from 'chai';
import { BubbleSort } from '../src/bubblesort';


describe('BubbleSort TDD', function () {
    let bubbleSort = new BubbleSort();
    it('Bubblesort class should contain an array', function () {
        expect(bubbleSort.startingArray).to.be.a('array');
    })
    it('if the starting array is empty, the sort method should return an array with one element', function () {
        bubbleSort.startingArray.push(20);
        expect(bubbleSort.startingArray.length).to.equal(1);
    })
    it('Bubblesort array should contain two elements or more', function () {
        bubbleSort.startingArray.push(7);
        expect(bubbleSort.startingArray.length).to.equal(2);
    })
    it('Bubblesort method should return an array', function () {
        expect(bubbleSort.sort(10, bubbleSort.startingArray)).to.be.a('array');
    })
    it('if the first element is bigger than the second, swap the elements', function () {
        expect(bubbleSort.startingArray[0]).to.be.lessThan(bubbleSort.startingArray[1]);
    })
    it('the first element of the array should be smaller than the following', function () {
        expect(bubbleSort.startingArray[0]).to.be.lessThan(bubbleSort.startingArray[1]);
    })
    it('adds a third element to the array', function () {
        bubbleSort.sort(5, bubbleSort.startingArray);
        console.log(bubbleSort.startingArray);
        expect(bubbleSort.startingArray.length).to.equal(4);
    })
});
