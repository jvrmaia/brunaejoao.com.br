var TemplateRsvp=null;!function(e){var t=null,o=null;check_localstorage("data_template_rsvp")?t=new Backbone.LocalStorage("data_template_rsvp"):o=new Backbone.LocalData("data_template_rsvp"),TemplateRsvp=Backbone.Model.extend({urlRoot:"/services/template_rsvp",idAttribute:"id_template_rsvp",localStorage:t,localData:o,defaults:{},initialize:function(){}})}(jQuery);