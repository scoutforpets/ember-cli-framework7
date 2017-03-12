import Ember from 'ember';
import layout from '../templates/components/f7-sub-navbar';

const { $ } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['subnavbar'],

  didInsertElement() {
    this._super(...arguments);
    $('.page').first().addClass('with-subnavbar');
  }
});
