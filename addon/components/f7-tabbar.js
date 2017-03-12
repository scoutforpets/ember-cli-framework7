import Ember from 'ember';
import layout from '../templates/components/f7-tabbar';

const { $ } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['toolbar', 'tabbar'],

  didInsertElement: function() {
    $('.page').first().addClass('toolbar-fixed');
  }
});
