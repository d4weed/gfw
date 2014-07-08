/**
 * The TimelineView class for the Google Map.
 *
 * @return TimelineView class (extends Backbone.View)
 */
define([
  'backbone',
  'underscore',
  'presenters/TimelinePresenter',
  'views/timeline/UMDLossTimeline'
], function(Backbone, _, Presenter, UMDLossTimeline) {

  'use strict';

  var TimelineView = Backbone.View.extend({

    className: 'timeline',

    timelineViews: {
      umd_tree_loss_gain: UMDLossTimeline
    },

    initialize: function() {
      this.presenter = new Presenter(this);
      this.currentTimeline = null;
      this.render();
    },

    render: function() {
      $('.map-container').append(this.el);
      this.$el.hide();
    },

    setTimeline: function(layerSpec) {
      if (this.currentTimeline) {
        this.currentTimeline.remove();
        this.currentTimeline = null;
      }

      var baselayers = layerSpec.forestChange || {};

      _.each(this.timelineViews, _.bind(function(View, lName) {
        if (baselayers[lName]) {
          this.currentTimeline = new View(baselayers[lName]);
          this.$el.show();
        }
      }, this));

      if (!this.currentTimeline) {
        this.$el.hide();
      }
    }

  });

  return TimelineView;
});