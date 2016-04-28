'use strict';

$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax('/', {
      method: 'POST',
      data: { form_url: $(e.currentTarget).find('[type="text"]').val() },
      success: function(response) {
        $('code').text(response.html);
      }
    })
  })
});
