var RsvpViewV2=null;!function(e){RsvpViewV2=BaseBackboneView.extend({events:{"click  .send-form":"submitForm"},initialize:function(){this.constructor.__super__.initialize.call(this);var t=this;this.adopted=!0;var o=e(".template-rsvp");if(o.get(0))this.setElement(o),t.options.onload&&t.options.onload.call(t);else{var n=null;this.adopted=!1,render_template("template_rsvp_id","/templates/backbone/"+this.options.noivos.get("id_noivo")+"/rsvp/"+this.options.noivos.get("template_html_version")+"/index",{noivos:this.options.noivos.attributes,rsvp_config:this.options.rsvp_config.attributes,pagina:this.options.pagina.attributes,convidado:n},function(e){t.setElement(e),t.options.onload&&t.options.onload.call(t)})}},save_rsvp:function(){var t=this,o=e(".confirmacao input[name='nome']").val(),n=e(".confirmacao input[name='evento']:checked").val(),a=e(".confirmacao select[name='adultos'] option:selected").val(),i=e(".confirmacao select[name='criancas'] option:selected").val(),s=e(".confirmacao input[name='email']").val(),r=e(".confirmacao input[name='ddd']").val(),l=e(".confirmacao input[name='telefone']").val(),c=e(".confirmacao textarea[name='mensagem']").val(),d=0;t.options.convidado&&(d=t.options.convidado.get("id_convidado"));var u=Validator.Assert,p=new Validator.Validator,m={id_noivo:(new u).NotNull(),nome:(new u).NotBlank(),email:(new u).Email(),evento:(new u).NotNull(),qtd_pessoas:(new u).NotNull(),ddd:(new u).NotBlank(),telefone:(new u).NotBlank()},h={id_noivo:t.options.noivos.get("id_noivo"),nome:o,evento:n,qtd_pessoas:a,criancas:i,convidado:"noiva",email:s,ddd:r,telefone:l,acompanhantes:c,id_convidado:d},f=p.validate(h,m);if(1==f){var g=new TemplateRsvp;window.loading.jLoading("block",!0),g.save(h,{wait:!0,success:function(){window.loading.jLoading("block",!1),t.options.convidado=null;render_template("template_rsvp_id","/templates/backbone/"+t.options.noivos.get("id_noivo")+"/rsvp/"+t.options.noivos.get("template_html_version")+"/index",{noivos:t.options.noivos.attributes,rsvp_config:t.options.rsvp_config.attributes,pagina:t.options.pagina.attributes,convidado:null},function(o){t.setElement(o),change_content(o,function(){t.render(),e(".send-form").off("click").on("click",function(){t.submitForm()}),e(".def-result-message").addClass("success").removeClass("error"),e(".def-result-message").html(I18n.t("rsvp.messages.success.success")),e(".def-result-message").show()},{template:"front",noivos:t.options.noivos,destroy_view:!1})})},error:function(t,o,n){window.loading.jLoading("block",!1);var a=o.responseText,i=JSON.parse(a);for(var s in i.errors){var r=i.errors[s];e("*[data-field='"+r.key+"']").parent(".cnt").addClass("error").find(".txt-error").html(r.value).show()}e(".def-result-message").addClass("error").removeClass("success"),e(".def-result-message").html(I18n.t("formhelper.formhelper_invalid_values")),e(".def-result-message").show();var l=e(".txt-anchor").offset().top;e("html,body").animate({scrollTop:l},200)}})}else{for(validation in f)e("*[data-field='"+validation+"']").parent(".cnt").addClass("error").find(".txt-error").html(I18n.t("validatorjs."+f[validation][0].assert.__class__.toLowerCase())).show();e(".def-result-message").addClass("error").removeClass("success"),e(".def-result-message").html(I18n.t("formhelper.formhelper_invalid_values")),e(".def-result-message").show();var v=e(".txt-anchor").offset().top;e("html,body").animate({scrollTop:v},200)}},submitForm:function(){var t=this;if(1!=t.options.rsvp_config.get("aberto")||t.options.convidado)t.save_rsvp();else{var o=e(".confirmacao #nome").val(),n=Validator.Assert,a=new Validator.Validator,i={nome:(new n).NotBlank()},s=a.validate({nome:o},i);if(1==s){var r=new TemplateRsvpConvidado;window.loading.jLoading("block",!0),r.fetch({data:{id_noivo:t.options.noivos.get("id_noivo"),nome:o},success:function(){if(window.loading.jLoading("block",!1),r.get("error")){e(".def-result-message").addClass("error").removeClass("success"),e(".def-result-message").html(I18n.t("rsvp.messages.error.not_found")),e(".def-result-message").show();var o=e(".txt-anchor").offset().top;e("html,body").animate({scrollTop:o},200)}else e(".def-result-message").hide(),t.options.convidado=r,t.options.convidado&&render_template("template_rsvp_form_id","/templates/backbone/"+t.options.noivos.get("id_noivo")+"/rsvp/"+t.options.noivos.get("template_html_version")+"/index",{noivos:t.options.noivos.attributes,rsvp_config:t.options.rsvp_config.attributes,pagina:t.options.pagina.attributes,convidado:t.options.convidado.attributes},function(o){change_content(o,function(){t.setElement(o),t.render();var n=e(".txt-anchor").offset().top;e("html,body").animate({scrollTop:n},200),e(".send-form").off("click").on("click",function(){t.save_rsvp()})},{template:"front",noivos:t.options.noivos,destroy_view:!1})})},error:function(){window.loading.jLoading("block",!1),e(".def-result-message").addClass("error").removeClass("success"),e(".def-result-message").html(I18n.t("rsvp.messages.error.error")),e(".def-result-message").show();var t=e(".txt-anchor").offset().top;e("html,body").animate({scrollTop:t},200)}})}else{for(validation in s)e("*[data-field='"+validation+"']").parent(".cnt").addClass("error").find(".txt-error").html(I18n.t("validatorjs."+s[validation][0].assert.__class__.toLowerCase())).show();e(".def-result-message").addClass("error").removeClass("success"),e(".def-result-message").html(I18n.t("formhelper.formhelper_invalid_values")),e(".def-result-message").show();var l=e(".txt-anchor").offset().top;e("html,body").animate({scrollTop:l},200)}}},render:function(){var e=this;return load_js("//assets1.icasei.com.br/assets/plugins/validator.js",function(){e.delegateEvents()}),this}})}(jQuery);