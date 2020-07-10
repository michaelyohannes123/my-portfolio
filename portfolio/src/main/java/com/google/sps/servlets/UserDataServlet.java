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
import java.util.*; 
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
/* handles getting total opinions on the question for the chart */
@WebServlet("/get-userdata")
public class UserDataServlet extends HttpServlet {
  private ArrayList<String> comment_history = new ArrayList<String>();
  private long deo_count = 0;
  private long util_count = 0;
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Query query = new Query("User");
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);
    for(Entity entity : results.asIterable()){
      String answer = (String) entity.getProperty("answer");
      if(answer.equals("Utilitarian")){
        util_count++;
      }
      else if(answer.equals("Deontological")){
        deo_count++;
      }
    }
    Dictionary dict = new Hashtable();
    dict.put("Deontological_count", deo_count);
    dict.put("Utilitarian_count", util_count);
    deo_count = 0;
    util_count = 0;
    String json = new Gson().toJson(dict);
    response.setContentType("application/json");
    response.getWriter().println(json);
  }
}