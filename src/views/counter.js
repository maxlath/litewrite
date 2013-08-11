define(function(require) {

  var Backbone = require('backbone');


  var EditorView = Backbone.View.extend({

    el: '#counter',

    initialize: function() {
      this.model.on('change:content', this.render, this);
    },

    render: function(doc) {
      this.$el.html( doc.countWords() );
    }

  });


  return EditorView;
});
