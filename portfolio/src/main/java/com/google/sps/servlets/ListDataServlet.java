// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package com.google.sps.servlets;
import java.util.List;
import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.sps.data.Comment;
/* Servlet that handles commenting functionality */
@WebServlet("/data-list")
public class ListDataServlet extends HttpServlet {
  private ArrayList<Comment> comment_history = new ArrayList<Comment>();
  private int comments_count;
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String co = request.getParameter("comments_count");
    //get 20 comments by default 
    if(co == null){
      comments_count = 20;
    }else{
      comments_count = Integer.valueOf(co);
    }
    comment_history.clear();
    Query query = new Query("Comment").addSort("time", SortDirection.DESCENDING);
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);
    int count = 0;
    for(Entity entity : results.asIterable()){
      if(count < comments_count){
        long id = (long) entity.getKey().getId();
        String text = (String) entity.getProperty("text");
        long time = (long) entity.getProperty("time");
        Comment c = new Comment(id, text, time);
        comment_history.add(c);
      }
      count++;
    }
    String json = new Gson().toJson(comment_history);
    response.setContentType("application/json");
    response.getWriter().println(json);
  }
}