/**
 * Created by kapale on 30.11.16.
 */
$(document).ready(function(){
// random init slide
var s=".kss-neos-slickslider-carousel",e=".slick-stage",n=".neos-contentcollection",o=$(s),i=$(s+" "+n+" > div").length,a=(Math.floor(Math.random()*i),o.find(e).attr("data-slick-config")),t=$(s+" "+e+" "+n);a=JSON.parse(a),""!=a.responsive&&(a.responsive=JSON.parse(a.responsive)),t.on("init",function(s,n,o,i){$(e).removeClass("showafterinit")}),$("body").hasClass("neos-backend")||t.slick(a)});