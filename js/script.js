$(function(){

  if (added) {
    _kmq.push(['record', 'Signed Up']);
    
    $('body').addClass('subbed');
    $('#main').click(function() {
      window.location.search = '';
    });
    window.location.hash = '';
  }
});
