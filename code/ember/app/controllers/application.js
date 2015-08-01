import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  greeting : "Hello",
  actions: {
    clear: function() {
      this.set('greeting','');
      $('#in').focus();
    }
  }
});
