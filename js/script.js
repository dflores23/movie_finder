let movieData;

const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $poster = $('#poster');
const $input = $('input[type="text');

function handleGetData(event){
  event.preventDefault();

  $.ajax({
    url: `https://www.omdbapi.com/?apikey=53aa2cd6&t=${$input.val()}`
  }).then(
    function(data){
      console.log(data);
      movieData = data;
      render();
    },
    function(error){
      console.log("oops something didn't work", error)
    }
  )
}

function render() {
  $title.text(movieData.Title);
  $year.text(movieData.Year);
  $rated.text(movieData.Rated);
  $poster.attr("src", movieData.Poster);
}

$('form').on('submit', handleGetData);
