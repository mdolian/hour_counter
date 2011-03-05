class CountHoursController < ApplicationController
  
  def index
    render
  end
  
  def calculate
    difference = DateTime.parse(params["end_date"] + " " + params["end_time"]) -
                 DateTime.parse(params["start_date"] + " " + params["start_time"])
    @hours, @minutes = Date.day_fraction_to_time(difference)
    render
  end
  
end
