var TemplateEnqueteResposta=null;!function(e){var t=null,o=null;check_localstorage("data_template_enqete_resposta")?t=new Backbone.LocalStorage("data_template_enquete_resposta"):o=new Backbone.LocalData("data_template_enquete_resposta"),TemplateEnqueteResposta=Backbone.Model.extend({urlRoot:"/services/template_enquete_resposta",idAttribute:"id_enquete",localStorage:t,localData:o,defaults:{},initialize:function(){}})}(jQuery);