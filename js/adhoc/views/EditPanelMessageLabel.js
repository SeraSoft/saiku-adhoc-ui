/**
 * Sets up workspace drop zones for DnD and other interaction
 */
var ReportEditPanel = Backbone.View.extend({
	id: "edit_panel",
	
    template: function() {
        return _.template($("#template-report-edit-panel").html())();
    },

    initialize: function(args) {
        _.bindAll(this, "render");
    },
    
    render: function() {

    	$("#edit_panel").empty();
        $("#edit_panel").html(this.template());

        return this; 
    }
});
  