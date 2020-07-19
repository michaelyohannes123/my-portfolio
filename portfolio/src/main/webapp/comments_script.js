google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
/*show opinions on the trolley problem asked by users*/
function drawChart() {
  fetch('/get-userdata').then(response => response.text()).then((ret) => {
    let opinions = JSON.parse(ret);
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Approach');
    data.addColumn('number', 'Count');
    let deo_votes = parseInt(opinions["Deontological_count"]);
    let util_votes = parseInt(opinions['Utilitarian_count']);
    if(util_votes > 0 || deo_votes > 0){
      document.getElementById('chart_div').style.display = 'block';
      document.getElementById('chart_details').style.display = 'block';
      data.addRows([['Deontological', deo_votes], ['Utilitarian', util_votes]]);
      var options = {'title': 'Approach preferences to the Trolley Problem',
      'width': 500, 'height': 350, 'backgroundColor': '#faebd7'};
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
  });
}
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
