var TemplateProduto=null,TemplateProdutos=null;!function(e){var t=null,o=null;check_localstorage("data_template_produto")?t=new Backbone.LocalStorage("data_template_produto"):o=new Backbone.LocalData("data_template_produto"),TemplateProduto=Backbone.Model.extend({urlRoot:"/services/template_produto",idAttribute:"id_template_produtos",localStorage:t,localData:o,defaults:{},initialize:function(){}}),TemplateProdutos=Backbone.Collection.extend({model:TemplateProduto,localStorage:t,localData:o,url:"/services/template_produto"})}(jQuery);