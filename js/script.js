$(function(){

  if (window.location.hash == '#addded') {
    $('body').addClass('subbed');
    $('#main').click(function() {
      window.location.search = '';
    });
    window.location.hash = '';
  }
});
