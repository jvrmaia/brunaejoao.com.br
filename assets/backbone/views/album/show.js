var AlbumView=null;!function(e){AlbumView=BaseBackboneView.extend({initialize:function(){this.constructor.__super__.initialize.call(this);var t=this;this.adopted=!0;var o=e(".template-album-"+this.options.photos.get("album").id_template_album);o.get(0)?(this.setElement(o),t.options.onload&&t.options.onload.call(t)):(this.adopted=!1,render_template("template_pagination_album_id","/templates/backbone/"+this.options.noivos.get("id_noivo")+"/pagination/default",{noivos:this.options.noivos.attributes,pages_info:this.options.photos.get("pagination")},function(e){render_template("template_album_show_id","/templates/backbone/"+t.options.noivos.get("id_noivo")+"/album/"+t.options.noivos.get("template_html_version")+"/show",{noivos:t.options.noivos.attributes,photos:t.options.photos.attributes,pages_html:e},function(e){t.setElement(e),t.options.onload&&t.options.onload.call(t)})}))},render:function(){var t={theme:"facebook",slideshow:5e3,autoplay_slideshow:!1};return this.options.noivos.get("socialshare")||(t.social_tools=""),e("a[rel^='prettyPhoto']").prettyPhoto(t),this}})}(jQuery);