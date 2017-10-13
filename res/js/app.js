$(document).ready(function() {

  // topology select
  $('.topology-item').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).parent().find('.active').toggleClass('active');
    }
    $(this).toggleClass('active');
  });

  // policy row select
  $('.policy-data-container').find('tr').click(function() {
    $(this).toggleClass('selected');
    $(this).find('i').toggleClass('far fa-square fa fa-check-square');
  });

});
