$(document).ready(function() {

  // topology select
  $('.topology-item').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).parent().find('.active').toggleClass('active');
    }
    $(this).toggleClass('active');
  });

  // policy row select
  $('.policy-data-container > table > tbody > tr').click(function() {
    $(this).toggleClass('selected');
  });

  // policy modal tabs
  $('#policy-tab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  // custom check-box
  $('.check-box').click(function() {
    $(this).toggleClass('selected');
  });

});
