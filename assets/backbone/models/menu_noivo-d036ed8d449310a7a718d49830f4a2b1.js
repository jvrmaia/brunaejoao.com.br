var MenuNoivo=null;!function(e){var t=null,o=null;check_localstorage("data_menu_noivo")?t=new Backbone.LocalStorage("data_menu_noivo"):o=new Backbone.LocalData("data_menu_noivo"),MenuNoivo=Backbone.Model.extend({urlRoot:"/services/menu_noivo",idAttribute:"id_menu_noivo",localStorage:t,localData:o,defaults:{},initialize:function(){}})}(jQuery);