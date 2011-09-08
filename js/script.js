$(function(){

  if (window.location.hash == '#added') {
    $('body').addClass('subbed');
    $('#main').click(function() {
      window.location.search = '';
    });
    window.location.hash = '';
  }
});
