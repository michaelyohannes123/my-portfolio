let country_guesses = [];
let countries_count = Object.keys(countries).length;
let country_keys = Object.keys(countries);
let map;
let count = 0;
let country_markers = [];
let total_time = 600000; //10 minute timer
let timer_count = total_time;
let timer;
let game_timer;
//see if the user input matches with any the countries, as user's typing; non case-sensitive
function checkIfCountry(){
  let guess_input = document.getElementById('guess').value;
  let keys_check = [];
  for(let i = 0; i < country_keys.length; i++){
    keys_check.push(country_keys[i].trim().split(" ").join("").toLowerCase());
  }
  let guess_string = guess_input.trim().split(" ").join("").toLowerCase();
  if(keys_check.includes(guess_string) === true && !country_guesses.includes(guess_string)){ 
    country_guesses.push(guess_string);
    let country_pos = keys_check.indexOf(guess_string);
    let country_name = country_keys[country_pos];
    var marker = new google.maps.Marker({
      position: {lat: countries[country_name]['lat'], lng: countries[country_name]['lon']},
      map: map,
      title: country_name
    });
    country_markers.push(marker);
    document.getElementById('guess').value = '';
    count++;
    if(count === countries_count){
      clearTimeout(game_timer);
      endGame();
    }else{
      document.getElementById('guess_score').innerHTML = count + '/' + countries_count;
    }
  }
}
//show user time they have left
function updateTimer(){
  let time_text = formatTime(timer_count);
  document.getElementById('timer').innerHTML = time_text;
  timer_count -= 1000;
}
//convert milliseconds time to 00:00 string format
function formatTime(time){
  let minutes = Math.floor(time / 60000);
  let seconds = (time - (minutes * 60000)) / 1000;
  let time_text = "";
  if(minutes === 0){
    time_text = seconds + "s";
  }else{
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    time_text = minutes + ":" + seconds;
  }
  return time_text;
}
//called once 10 min elapsed or all countries named, tell them their score and ask them if they want to restart
function endGame(){
  clearInterval(timer);
  let time_to_complete = total_time - timer_count;  
  document.getElementById('timer').style.display = 'none';
  document.getElementById('end_button').style.display = 'none';
  document.getElementById('instruct_text').style.display = 'block';
  let country_score = country_markers.length;
  let instruct_text = document.getElementById('instruct_text');
  if(country_score === countries_count){
    instruct_text.innerHTML = 'Congrats!!! You named all ' + countries_count 
    + ' countries in ' + formatTime(time_to_complete) + '! ';
  }
  if(country_score > 0){
    instruct_text.innerHTML = 'Not bad! you got ' + country_score + '/' + countries_count + 
    ' in ' + formatTime(time_to_complete) + '. ';
  }
  if(country_score === 0){
    instruct_text.innerHTML = 'I think you may have been on another tab. ';
  }
  instruct_text.innerHTML = instruct_text.innerHTML + " If you wish to play another round refresh your screen.";
  document.getElementById('game_text').style.display = 'none';
  document.getElementById('guess').style.display = 'none';
  document.getElementById('guess_score').style.display = 'none';
  clearAllMarkers();
  document.getElementById('map').style.display = 'none';
}
//prevent map markers from appearing should user restarts
function clearAllMarkers(){
  for(let i = 0; i < country_markers.length; i++){
    country_markers[i].setMap(null);
  }
  country_markers = [];
}
//set up ui for user to start typing countries
function startGame(){
  count = 0;
  timer_count = total_time;
  document.getElementById('timer').style.display = 'block';
  game_timer = setTimeout(endGame, total_time); 
  timer = setInterval(updateTimer, 1000);
  document.getElementById('start_button').style.display = 'none';
  document.getElementById('end_button').style.display = 'block';
  document.getElementById('instruct_text').style.display = 'none';
  document.getElementById('game_text').style.display = 'block';
  document.getElementById('guess').style.display = 'block';
  document.getElementById('guess_score').style.display = 'block';
  document.getElementById('map').style.display = 'block';
  document.getElementById('guess_score').innerHTML = '0/' + countries_count;
  document.getElementById('guess').addEventListener('keyup', checkIfCountry);
}
//create the google maps, removing labels and streetview to prevent answers
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 1,
    streetViewControl: false,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      }
    ]
  });
}
