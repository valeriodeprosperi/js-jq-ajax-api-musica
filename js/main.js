$(document).ready(function() {
  $.ajax({
    'url': 'https://flynn.boolean.careers/exercises/api/array/music',
    'method': 'GET',
    'success': function(data)
    printAlbum(data.response);
  },
  'error': function(request, state, errors) {
   alert('Errore ' + errors);
        }
      });
});
