DS.RESTAdapter.configure('App.Truck', {
  sideloadAs: 'trucks'
});

App.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.RESTAdapter.create()
});
