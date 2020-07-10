// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/*gets comments from servlet doGet and displays it*/
function checkLogin(){
  fetch('/login').then(response => response.text()).then((output) => {
    let user;
    let login_link = document.getElementById('login_link');
    let status = JSON.parse(output);
    if(status['login-status'] === 'out'){
      login_link.innerHTML = 'Login';
    }
    if(status['login-status'] === 'in'){
      localStorage.setItem('userEmail', status['userEmail']);
      localStorage.setItem('highScore', status['highScore']);
      document.getElementById('greet-user').innerHTML = 'Hello ' + status['userEmail'] + '!';
      document.getElementById('greet-user').style.display = 'block';
      login_link.innerHTML = 'Logout';
      user = status['user'];
    }
    login_link.href = status['url'];
    login_link.onclick = '#';
    login_link.style.display = 'block';
    if(status['first-time?'] === true){
      document.getElementById('question').style.display = 'block';
    }
  });
}
/*enter user into database, storing their answer to the question*/
function updateUserData(){
  if(document.getElementById('d').checked === true){
    let link = '/enter-user?userEmail=' + localStorage.getItem('userEmail') + '&answer=Deontological';
    fetch(link).then(response => response.text()).then((data) => {
      setUpClose();
    });
  }
  else if(document.getElementById('u').checked === true){
    let link = '/enter-user?userEmail=' + localStorage.getItem('userEmail') + '&answer=Utilitarian';
    fetch(link).then(response => response.text()).then((data) => {
      setUpClose();
    });
  }
}
/*inform user their question will be stored*/
function setUpClose(){
  document.getElementById('thanks').style.display = 'block';
  document.getElementById('close').style.display = 'block';
  document.getElementById('qp1').style.display = 'none';
  document.getElementById('qp2').style.display = 'none';
  document.getElementById('qp3').style.display = 'none';
  document.getElementById('choices').style.display = 'none';
  document.getElementById('answer_button').style.display = 'none';
}
//called after the thanks response given to user notifying them their response is being store
function closeModal(){
  document.getElementById('question').style.display = 'none';
}
/*president is randomly picked from array, enabling the questions and answers to be formed*/ 
function getRandomPresident() {
  document.getElementById('game_button').style.display = 'none';
  let presidents = ['George Washington', 'John Adams', 'Thomas Jefferson', 
  'James Madison', 'James Monroe', 'John Quincy Adams', 'Andrew Jackson', 
  'Martin Van Buren', 'William Henry Harrison', 'John Tyler', 'James K. Polk',
  'Zachary Taylor', 'Millard Fillmore', 'Franklin Pierce', 'James Buchanan', 
  'Abraham Lincoln', 'Andrew Johnson', 'Ulysses S. Grant', 'Rutherford B. Hayes', 
  'James A. Garfield', 'Chester A. Arthur', 'Grover Cleveland', 'Benjamin Harrison', 
  'Grover Cleveland', 'William McKinley', 'Theodore Roosevelt', 'William Howard Taft',
  'Woodrow Wilson', 'Warren G. Harding', 'Calvin Coolidge', 'Herbert Hoover', 
  'Franklin D. Roosevelt', 'Harry S. Truman', 'Dwight D. Eisenhower', 'John F. Kennedy',
  'Lyndon B. Johnson', 'Richard Nixon', 'Gerald Ford', 'Jimmy Carter', 'Ronald Reagan', 
  'George H. W. Bush', 'Bill Clinton', 'George W. Bush', 'Barack Obama', 'Donald Trump'];
  const president_answer_pos = Math.floor(Math.random() * presidents.length);
  const president_answer = presidents[president_answer_pos];
  localStorage.setItem('president_answer', president_answer);
  presidents.splice(president_answer_pos, 1); 
  let choices = makeChoices(presidents, president_answer, president_answer_pos);
  updateQuestion(president_answer_pos);
  updateOptions(choices);
}
/*picks a unique set of 4 presidents (including the proposed correct one) and returns them as an options array*/
function makeChoices(presidents, president_answer, president_answer_pos){
  const choice_pos = Math.floor(Math.random() * 4);
  let choices = [];
  let count = 0;
  while(choices.length < 4){
    if(count === choice_pos){
      choices.push(president_answer);
    }else{
      const president_pos = Math.floor(Math.random() * presidents.length);
      const president = presidents[president_pos];
      presidents.splice(president_pos, 1); 
      choices.push(president);
    }
    count++;
  }
  return choices;
}
/*takes president's position in array to implement the ordinal-based 'who's the __th' president question format*/
function updateQuestion(president_answer_pos){
  const name_num = president_answer_pos + 1;
  let name = name_num + '';
  if(name_num % 10 === 1 && name_num !== 11){
    name += 'st';
  }
  else if(name_num % 10 === 2 && name_num !== 12){
    name += 'nd';
  }
  else if(name_num % 10 === 3 && name_num !== 13){
    name += 'rd';
  }
  else{
    name += 'th';
  }
  let question = document.getElementById('question');
  question.style.display = 'block';
  question.innerText = 'Who was the ' + name + ' president of the United States?';
}
/*Changes the button option texts and values so that the next question can be displayed*/
function updateOptions(choices){
  let ids = ['one', 'two', 'three', 'four'];
  for(let i = 0; i < ids.length; i++){
    let option = document.getElementById(ids[i]);
    option.value = choices[i];
    option.innerText = choices[i];
    option.style.display = 'block';
  }
}
/*checks if the president name they clicked matches the answer set up in getRandomPresident(), updating the screen*/
function isRightUpdate(button_id){
  const choice = document.getElementById(button_id);
  let right = document.getElementById('right');
  let slash = document.getElementById('slash');
  let total = document.getElementById('total');
  right.style.display = 'block';
  slash.style.display = 'block';
  total.style.display = 'block';
  if(choice.value === localStorage.getItem('president_answer')){//prevents an issue from grover cleveland being in 2 different spots in presidents array  
    const right_update = parseInt(right.innerText) + 1;
    right.innerText = right_update + '';
    document.getElementById('result').innerText = 'Correct!';
    getRandomPresident();
  }else{
    document.getElementById('result').innerText = 'Guess again!';
  }
  const new_total = parseInt(total.innerText) + 1;
  total.innerText = new_total + '';
}
/*if player tries to click the plane, it'll give them a secret message*/
function no(){
  document.getElementById('secret_no').innerText = '(no... you cannot shoot it down)';
}
/*once website opens, plane image moves across the top of the screen infinitely*/
window.onload = 
function plane_fly(){
  checkLogin();
  let plane_image = document.getElementById('plane_id');
  let pos = 0;
  let move = setInterval(
  function(){
    if(pos === screen.width + (4 * plane_image.clientWidth)) {
      pos = 0;
      plane_image.style.left = pos + 'px'; 
    }else{
      pos++;
      plane_image.style.left = pos + 'px'; 
    }
  }, 3);
};