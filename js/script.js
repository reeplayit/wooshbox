$(function(){

  if (added) {
    $('body').addClass('subbed');
    $('#main').click(function() {
      window.location.search = '';
    });
    window.location.hash = '';
  }
});
