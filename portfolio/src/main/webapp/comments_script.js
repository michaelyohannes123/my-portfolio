/*gets comments from servlet doGet and displays it*/
function getComments(){
  let comments_count = document.getElementById('comments_count').value;
  let link = '/data-list?comments_count=' + comments_count;
  fetch(link).then(response => response.text()).then((comments) => {
    let comments_list = JSON.parse(comments);
    document.getElementById('comments').innerHTML = '';
    for(let i = 0; i < comments_list.length; i++){
      let comment = comments_list[i];
      let display = document.createElement('p');
      var date = new Date(comment.time); 
      display.innerText = date + ': ' + comment.text;
      document.getElementById('comments').appendChild(display);
    }
  });
}
