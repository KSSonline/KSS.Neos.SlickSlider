/**
 * Created by kapale on 30.11.16.
 */

$(document).ready(function(){
    // random init slide
    var sliderClass = '.kss-neos-slickslider-carousel',
        sliderStageClass = '.slick-stage',
        neosContentCollectionClass = '.neos-contentcollection',
        _$slider = $(sliderClass),
        total = $( sliderClass + ' ' + neosContentCollectionClass + ' > div').length,
        slickRand = Math.floor( Math.random() * total ),
        slickConfig = _$slider.find(sliderStageClass).attr('data-slick-config'),
        _$slickSlider = $(sliderClass + ' ' + sliderStageClass + ' ' + neosContentCollectionClass);

    slickConfig = JSON.parse(slickConfig);

    if(slickConfig.responsive != ''){
        slickConfig.responsive = JSON.parse(slickConfig.responsive);
    }

    console.log(slickConfig);

    _$slickSlider.on('init', function(event, slick, currentSlide, nextSlide){
        $(sliderStageClass).removeClass('showafterinit');
    });


    if(!$('body').hasClass('neos-backend')) {
        _$slickSlider.slick(slickConfig);
    }

});
