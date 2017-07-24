var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();

    // default platform
    ons.platform.select('android');

    // get initial configurations from file and load first list
    this.getConfig(function() {
      app.loadList();
    });
  },
  // Bind Event Listeners
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {

  },
  // Bind configurations
  getConfig: function(callback) {
    $.get("config.json", function(data, status) {
      console.log('config read');
      app.config = data;
      if(callback) { callback(); }
    });
  },
  setConfig: function() {
    // set new path
  },
  loadList: function() {
    path = app.config.editable.content_path.value;
    reader.read(path);
    // $.get(path, function(data) {
    //   cenas = "";
    // });
    console.log('load list');
  },

  // object variables
  config: {}
};

window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};
