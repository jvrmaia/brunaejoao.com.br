var ConfirmView=null;!function(e){ConfirmView=BaseBackboneView.extend({initialize:function(){this.constructor.__super__.initialize.call(this);var t=this;this.adopted=!0;var o=e(".template-confirm");o.get(0)?(this.setElement(o),t.options.onload&&t.options.onload.call(t)):(this.adopted=!1,render_template("template_store_confirm_id","/templates/backbone/"+this.options.noivos.get("id_noivo")+"/store/"+this.options.noivos.get("template_html_version")+"/confirm",{noivos:this.options.noivos.attributes,cart:this.options.cart.attributes,loja_dado:this.options.loja_dado.attributes},function(e){t.setElement(e),t.options.onload&&t.options.onload.call(t)}))},render:function(){if(e("div.cart-link").hide(),void 0!==window.ga){var t=this.options.cart.get("payment"),o=get_meta("ga_dominio");window.ga("create","UA-1786921-1","auto",{allowLinker:!0}),window.ga("require","linker"),window.ga("linker:autoLink",o);var n=t.valor_total-t.valor_total_liquido;window.ga("event","Compra","Presente","Noivos",t.valor_total),window.ga("require","ecommerce","ecommerce.js"),window.ga("ecommerce:addTransaction",{id:t.id_template_pedidos,affiliation:"Loja Site dos Noivos",revenue:t.valor_total_liquido,shipping:0,tax:n});var a=this.options.cart.get("products");for(var i in a){var s=a[i].product,r=a[i].qtd,l=s.cotas>1?s.valor/s.cotas:s.valor;window.ga("ecommerce:addItem",{id:t.id_template_pedidos,name:s.id_template_produtos,sku:s.produto,category:"Presente Virtual - Front",price:l,quantity:r})}window.ga("ecommerce:send")}return this}})}(jQuery);