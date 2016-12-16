import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //return books;
    return this.store.findAll('post').then((posts) =>
      posts.sortBy('timestamp').reverse()
    );
  }
});