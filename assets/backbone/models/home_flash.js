var HomeFlash=null;!function(e){var t=null,o=null;check_localstorage("data_home_flash")?t=new Backbone.LocalStorage("data_home_flash"):o=new Backbone.LocalData("data_home_flash"),HomeFlash=Backbone.Model.extend({urlRoot:"/services/home_flash",idAttribute:"id_home_flash",localStorage:t,localData:o,defaults:{},initialize:function(){}})}(jQuery);