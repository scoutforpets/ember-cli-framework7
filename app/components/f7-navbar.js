import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['navbar'],

  fixed: true,

  didInsertElement: function() {

    // If we're using a fixed toolbar, add the necessary class
    if (this.get('fixed')) {
      $('.page').first().addClass('navbar-fixed');
    }

    // TODO: does this do anything?
    // this.$('.center').css('opacity', '0');
    // var _this = this;
    // setTimeout(function() {
    //   _this.get('f7.f7').sizeNavbars();
    //   _this.$('.center').css('opacity', '1');
    // }, 0);
  }
});
