var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    this.link = this.href;
    return false;
});

$('div[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    this.link = this.href;
    return false;
});

$('.logo-caption').css('opacity', '0');

$('.about-me-section__button').hover(function() {
  this.arrow = $(this).find('.without-hover');
  $(this.arrow).addClass('far-hover');
},
function() {
  $(this.arrow).removeClass('far-hover');
}
)

$('.logo').hover(function() {
  this.logoCaption = $(this).parent().find('.logo-caption');
  $(this.logoCaption).fadeTo('400', '0.8');
}, function () {
  $(this.logoCaption).fadeTo('400', '0');
});

$('.menu__item').hover(function() {
  $('.menu__items').removeClass('chosenItem1');
  $(this).parent().addClass('chosenItem1');

  console.log(this.menuItems);
},
function(){
  $('.menu__items').removeClass('chosenItem1');
});
