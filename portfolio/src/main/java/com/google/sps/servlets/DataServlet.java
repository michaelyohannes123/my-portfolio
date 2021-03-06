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
@WebServlet("/data")
public class DataServlet extends HttpServlet {
  /*recieves user comment input and Datastores it*/
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String comment_text = request.getParameter("comment_text");
    if(comment_text.isEmpty() == false){
      long time = System.currentTimeMillis();
      Entity entry = new Entity("Comment");
      entry.setProperty("text", comment_text);
      entry.setProperty("time", time);
      DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
      datastore.put(entry);
    }
    response.sendRedirect("/comments.html");
  }
}