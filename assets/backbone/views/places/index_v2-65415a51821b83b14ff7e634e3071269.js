var PlacesViewV2=null;!function(e){PlacesViewV2=BaseBackboneView.extend({events:{"submit form":"trace_route"},initialize:function(){this.constructor.__super__.initialize.call(this);var t=this;this.adopted=!0;var o=e(".template-local-"+this.options.local.get("id_template_local"));o.get(0)?(this.setElement(o),t.options.onload&&t.options.onload.call(t)):(this.adopted=!1,render_template("template_places_id","/templates/backbone/"+this.options.noivos.get("id_noivo")+"/places/"+this.options.noivos.get("template_html_version")+"/index",{noivos:this.options.noivos.attributes,local:this.options.local.attributes,pagina:this.options.pagina.attributes},function(e){t.setElement(e),t.options.onload&&t.options.onload.call(t)}))},render:function(){var t=this;return e("body").unbind("gmap_loaded").bind("gmap_loaded",function(){if(t.geocoder=new google.maps.Geocoder,t.options.local.get("googlemaps"))if(null!==t.options.local.get("lat")&&null!==t.options.local.get("lng")){var e=new google.maps.LatLng(t.options.local.get("lat"),t.options.local.get("lng"));t.destination_address=e,t.initialize_gmaps(e,function(){setTimeout(function(){t.show_address_marker()},500)})}else{var o=t.options.local.get("endereco")+","+t.options.local.get("numero")+","+t.options.local.get("cidade")+","+t.options.local.get("estado")+","+t.options.local.get("pais");t.find_address(o,function(e,o){e&&(t.destination_address=o,t.initialize_gmaps(o,function(){setTimeout(function(){t.show_address_marker()},500)}))})}}),loadGoogleMapsApi(),this},trace_route:function(){var t=this,o=e("#origem").val();e(".loading").jLoading("start"),e(".def-result-message").html("").hide(),this.find_address(o,function(o,n){if(o){var a={origin:n,destination:t.destination_address,travelMode:google.maps.TravelMode.DRIVING},i=new google.maps.DirectionsService;i.route(a,function(o,n){if(n==google.maps.DirectionsStatus.OK){t.directionsDisplay.setDirections(o);var a=null;if(o.routes.length>0){var i=o.routes[0];if(i.legs.length>0){var r=i.legs[0],s=new Array;for(var l in r.steps){var c=r.steps[l];s.push({info:c.instructions,distance:c.distance.text,duration:c.duration.text})}a={start_address:r.start_address,end_address:r.end_address,distance:r.distance.text,duration:r.duration.text,steps:s}}}render_template("template_places_direction_id","/templates/backbone/"+t.options.noivos.get("id_noivo")+"/places/"+t.options.noivos.get("template_html_version")+"/direction",{direction:a},function(t){e("#directions").empty(),e("#directions").append(e(t)),e("#directions").show(),e(".loading").jLoading("stop")})}else e(".loading").jLoading("stop"),e(".def-result-message").html(I18n.t("places.errors.directions")).addClass("error").show()})}else e(".loading").jLoading("stop"),e(".def-result-message").html(I18n.t("places.errors.address")).addClass("error").show()})},get_address_html:function(e){render_template("template_places_address_id","/templates/backbone/"+this.options.noivos.get("id_noivo")+"/places/"+this.options.noivos.get("template_html_version")+"/address",{noivos:this.options.noivos.attributes,local:this.options.local.attributes,pagina:this.options.pagina.attributes},e)},show_address_marker:function(){var e=this;this.marker.info_window&&(this.marker.info_window.close(),this.marker.info_window=null),this.marker.info_window=new google.maps.InfoWindow,google.maps.event.addListener(this.marker.info_window,"closeclick",function(){e.marker.info_window=null}),this.get_address_html(function(t){e.marker.info_window.setContent(t),e.marker.info_window.open(e.map,e.marker)})},find_address:function(e,t){return e&&""!=e?void(this.geocoder&&this.geocoder.geocode({address:e},function(e,o){o==google.maps.GeocoderStatus.OK?t&&t(!0,e[0].geometry.location):t&&t(!1)})):void(t&&t(!1))},initialize_gmaps:function(t,o){var n=this,a={zoom:17,center:t,mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(e(".map_canvas").get(0),a),this.directionsDisplay=new google.maps.DirectionsRenderer,this.directionsDisplay.setMap(this.map),this.marker=new google.maps.Marker({map:this.map,position:t,draggable:!1,zIndex:1e3}),this.marker.info_window=null,google.maps.event.addListener(this.marker,"position_changed",function(){}),google.maps.event.addListener(this.marker,"click",function(){n.show_address_marker()}),google.maps.event.addListener(this.map,"click",function(e){});var i,r;i=e(".map_canvas"),r=e('<div class="cover"></div>'),i.append(r),r.on("click",function(){r.remove()}),o&&o.call(this)}})}(jQuery);