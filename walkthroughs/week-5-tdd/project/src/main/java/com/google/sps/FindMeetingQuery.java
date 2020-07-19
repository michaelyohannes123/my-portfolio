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

package com.google.sps;

import java.util.*;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Comparator;

public final class FindMeetingQuery {
  //find a list of open time slots for requested meeting attendees
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
    List<TimeRange> event_times = new ArrayList<TimeRange>();
    List<TimeRange> times_mandatory = new ArrayList<TimeRange>();    
    long duration = request.getDuration();
    List<TimeRange> results = new ArrayList<TimeRange>();
    if((int) duration > TimeRange.END_OF_DAY - TimeRange.START_OF_DAY){
      return results;
    }
    Collection<String> attendees = request.getAttendees();
    Collection<String> optional_attendees = request.getOptionalAttendees();
    int e_count = 0;
    for(Event event : events){
      TimeRange event_time = event.getWhen();
      Collection<String> event_people = event.getAttendees();
      boolean people_in_request_and_event = false;
      for(String attendee : attendees){
        if(event_people.contains(attendee) == true){
          times_mandatory.add(event_time);
          people_in_request_and_event = true;
          break;
        }
      }
      for(String attendee : optional_attendees){
        if(event_people.contains(attendee) == true){
          people_in_request_and_event = true;
          break;
        }
      }
      if(people_in_request_and_event == true){
        event_times.add(event_time);
      }
      e_count++;
    }
    List<TimeRange> time_ranges = removeNested(event_times);
    Collections.sort(time_ranges, TimeRange.ORDER_BY_START);
    if(time_ranges.size() > 0){
      results = findSlots(results, time_ranges, duration);//accounts for both optional and mandatory
      if(results.size() == 0){
        time_ranges = removeNested(times_mandatory);
        results = findSlots(results, time_ranges, duration);//accounts for just mandatory
      }
    }else{
      results.add(TimeRange.fromStartEnd(TimeRange.START_OF_DAY, TimeRange.END_OF_DAY, true));
    }
    return results;
  }
  //find the time slot spaces between the ordered list of events occuring 
  public List<TimeRange> findSlots(List<TimeRange> results, List<TimeRange> time_ranges, long duration){
    for(int i = 0; i < time_ranges.size(); i++){
      TimeRange time_range = time_ranges.get(i);
      if(i == 0){
        int pre_events_time = time_range.start() - TimeRange.START_OF_DAY;
        if(pre_events_time >= (int) duration){
          results.add(TimeRange.fromStartDuration(TimeRange.START_OF_DAY, pre_events_time));
        }
      }else{
        int pre_event_end = time_ranges.get(i - 1).end();
        int event_start = time_range.start();
        if(event_start - pre_event_end >= (int) duration){
          results.add(TimeRange.fromStartEnd(pre_event_end, event_start, false));
        }
      }
    }
    int last_event_end = time_ranges.get(time_ranges.size() - 1).end();
    int after_events_time = TimeRange.END_OF_DAY - last_event_end;
    if(after_events_time >= (int) duration){
      results.add(TimeRange.fromStartEnd(last_event_end, TimeRange.END_OF_DAY, true));
    }
    return results;
  }
  //ignore the nested loops prior to assessing free time slots
  public List<TimeRange> removeNested(List<TimeRange> event_times){
    List<TimeRange> time_ranges = new ArrayList<TimeRange>();
    int n_count = 0;
    for(TimeRange r : event_times){
      boolean nested = false;
      int n2_count = 0;
      for(TimeRange t : event_times){
        if(n2_count != n_count){
          if(t.contains(r) == true){
            nested = true;
          }  
        }
        n2_count++;
      }
      if(nested == false){
        time_ranges.add(r);
      }
      n_count++;
    }
    return time_ranges;
  }
}
