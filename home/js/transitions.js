(function(){

  $('.navlink').on('mouseover', function(e){
    $('body').addClass('blue');
    $('.header').addClass('blue');
    $('.desc').addClass('hidden');

    if($(this).attr('id') == 'navlink-left')
      $('.navlink-title').text('studio');
    if($(this).attr('id') == 'navlink-right')
      $('.navlink-title').text('lab');

      $('.navlink-title').addClass('visible');
  });

  $('.navlink').on('mouseout', function(e){
    $('body').removeClass('blue');
    $('.header').removeClass('blue');
    $('.desc').removeClass('hidden');
    $('.navlink-title').removeClass('visible');
  });


})();
