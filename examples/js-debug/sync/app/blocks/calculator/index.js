import $ from 'jquery';
import {mapObject, convertStringToInt} from '../utils';

export default class Calculator {
  constructor() {
    this.$numberA = $('.js-number-a');
    this.$numberB = $('.js-number-b');
    this.$action = $('.js-action');
    this.$result = $('.js-result');

    this.addListeners();
  }

  getSum({a, b}) {
    return a + b;
  }

  display(value) {
    this.$result.text(value);
  }

  addListeners() {
    this.$action.on('click', this.onClickAction.bind(this));
  }

  onClickAction() {
    const numberA = this.$numberA.val();
    const numberB = this.$numberB.val();
    const sum = this.getSum({a: numberA, b: numberB});
    // const sum = this.getSum(mapObject({a: numberA, b: numberB}, convertStringToInt));
    this.display(sum);
  }
}
