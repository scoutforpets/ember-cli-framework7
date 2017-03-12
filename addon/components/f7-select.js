import Ember from 'ember';
import layout from '../templates/components/f7-select';

export default Ember.Component.extend({
  layout,
  classNames: ['item-content'],

  mustFallback:true,
  fallbackWhen: 'mobile',
  options: null,
  selected: null
});
