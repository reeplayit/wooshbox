$(function(){
  
  
  if (window.location.search == '?vip=added') {
    $('body').addClass('subbed');
    $('#main').click(function() {
      window.location.search = '';
    })
  }
});
