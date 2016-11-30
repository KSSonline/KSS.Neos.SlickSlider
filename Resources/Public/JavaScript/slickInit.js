/**
 * Created by kapale on 30.11.16.
 */
$(document).ready(function(){
// random init slide
var s=".kss-neos-slickslider-carousel",e=".slick-stage",o=".neos-contentcollection",n=$(s),i=$(s+" "+o+" > div").length,a=(Math.floor(Math.random()*i),n.find(e).attr("data-slick-config")),t=$(s+" "+e+" "+o);a=JSON.parse(a),""!=a.responsive&&(a.responsive=JSON.parse(a.responsive)),console.log(a),t.on("init",function(s,o,n,i){$(e).removeClass("showafterinit")}),$("body").hasClass("neos-backend")||t.slick(a)});