import Ember from 'ember';
import layout from '../templates/components/f7-input';

export default Ember.Component.extend({
  layout,
  classNames: ['item-content'],
  classNameBindings: ['value:not-empty-state'],

  autocorrect: false,
  autocapitalize: false,

  type: 'text',

  isTextArea: Ember.computed('type', function() {
    if (this.get('type') === 'textarea') {
      return true;
    }

    return false;
  })
});
