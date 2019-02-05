require 'HTTParty'
require 'Nokogiri'
require 'sqlite3'
require 'active_record'
require 'pry'

# SQL setup #################################################################

# Rails will do this automatically for you but meanwhile in Sinatra...
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'wsl.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

class Athlete < ActiveRecord::Base

end

class Location < ActiveRecord::Base

end

class Event < ActiveRecord::Base

end



# Method: scrape_athlete #################################################################

def scrape_athlete url

  doc = HTTParty.get(url)
  parse_page ||= Nokogiri::HTML(doc)

  bio = {
    :fullname => nil,
    :firstname => nil,
    :lastname => nil,
    :abname => nil,
    :country => nil,
    :stance => nil,
    :birthday => nil,
    :height => nil,
    :weight => nil,
    :hometown => nil,
    :url => nil
  }

  fullname = parse_page.css(".only--desktop").css(".avatar-text").css(".avatar-text-primary").css(".athlete-name").text

  bio[:fullname] = fullname
  bio[:firstname] = fullname.split(' ')[0]
  bio[:lastname] = fullname.split(' ')[1]
  bio[:abname] = fullname.split(' ')[0][0] + ". " + fullname.split(' ')[1]

  bio[:country] = parse_page.css(".only--desktop").css(".avatar-text").css(".avatar-text-secondary").css(".country-name").text

  bio_scrape = parse_page.css(".new-athlete-bio-stats").css("li").children.map { |i| i.text }.compact
  bio_scrape = bio_scrape.map { |c| c.strip }
  bio_scrape = bio_scrape.reject { |c| c.empty? }

  bio_scrape.each_with_index { |val, i|
    if val == "Stance"
      bio[:stance] = bio_scrape[i+1]
    elsif val == "Age"
      birthday = bio_scrape[i+1].split('  ').last.split(%r{,\s*})
      bio[:birthday] = birthday[1] + "-" + Date::ABBR_MONTHNAMES.index(birthday[0].split(' ')[0]).to_s  + "-" + birthday[0].split(' ')[1]
    elsif val == "Height"
      bio[:height] = bio_scrape[i+1].split(' ')[-2].to_i
    elsif val == "Weight"
      bio[:weight] = bio_scrape[i+1].split(' ')[-2].to_i
    elsif val == "Hometown"
      bio[:hometown] = bio_scrape[i+1]
    end

  }

  bio[:url] = url

  return bio
end

# Method: scrape_event #################################################################

def get_tour_year_url year, tour
  return "http://www.worldsurfleague.com/events/" + year.to_s + "/" + tour
end


def scrape_tour_events_by_year url, year, tour

  doc = HTTParty.get(url)
  parse_page ||= Nokogiri::HTML(doc)

  events_scrape = parse_page.css(".tour-event")

  events = []

  events_scrape.each do |e|

    event = {}

    event[:tour] = tour
    event[:year] = year
    event[:num] = e.css(".tour-event-tour-stop").text[/\d+/].to_i
    event[:name] = e.css(".tour-event-name").text

    event[:location] = e.css(".tour-event-location").text


    location_ids = Location.where(break: event[:location].split(',').first).ids
    unless location_ids.empty?
      event[:location_id] = location_ids.first
    else
      loc = event[:location].split(', ')
      location = Location.new
      if loc[2] == "Hawaii"
        location.break = loc[0]
        location.district = loc[1]
        location.state = loc[2]
        location.country = "United States"
      else
        location.break = loc[0]
        location.state = loc[1]
        location.country = loc[2]
      end
      location.save
      event[:location_id] = Location.where(break: loc[0]).ids.first
    end


    dates = e.css(".tour-event-range").text.split(' ')

    if dates.size == 5
      event[:startdate] = year.to_s + "-" + Date::ABBR_MONTHNAMES.index(dates[1]).to_s + "-" + dates[2]
      event[:enddate] = year.to_s + "-" + Date::ABBR_MONTHNAMES.index(dates[1]).to_s + "-" + dates[4]
    elsif dates.size == 6
      event[:startdate] = year.to_s + "-" + Date::ABBR_MONTHNAMES.index(dates[1]).to_s + "-" + dates[2]
      event[:enddate] = year.to_s + "-" + Date::ABBR_MONTHNAMES.index(dates[4]).to_s + "-" + dates[5]
    else
      event[:startdate] = ''
      event[:enddate] = ''
    end

    event[:champion] = e.css(".athlete-name").text

    unless event[:champion] == ""
      athlete_ids = Athlete.where(fullname: event[:champion]).ids
      unless athlete_ids.nil?
        event[:athlete_id] = athlete_ids.first
      else
        event[:athlete_id] = nil
      end
    else
      event[:athlete_id] = nil
    end


    if e.css(".tour-event-detail a").nil?
      event[:url] = e.css(".tour-event-detail a").first["href"]
    else
      event[:url] = year.to_s + "/" + tour + "/" + event[:num].to_s + "/" + event[:name]
    end

    events << event

  end

  return events

end



##################################################################


# Run: scrape_athlete #################################################################

urls_athletes = File.readlines('urls_athletes.txt')

# urls_athletes = ["http://www.worldsurfleague.com/athletes/1760/ryan-callinan?resultsEventId=2803", "http://www.worldsurfleague.com/athletes/1215/conner-coffin?resultsEventId=2803"]

urls_athletes.each { |u|

  u.delete!("\n")

  unless Athlete.exists?(:url => u)
    p u
    bio = {}
    bio = scrape_athlete u

    athlete = Athlete.new
    athlete.fullname = bio[:fullname]
    athlete.firstname = bio[:firstname]
    athlete.lastname = bio[:lastname]
    athlete.abname = bio[:abname]
    athlete.country = bio[:country]
    athlete.stance = bio[:stance]
    athlete.birthday = bio[:birthday]
    athlete.height = bio[:height]
    athlete.weight = bio[:weight]
    athlete.hometown = bio[:hometown]
    athlete.url = bio[:url]
    athlete.save
  end

}

# Run:scrape_event #################################################################

events = {
  "mct" => [1989, 2018], #,1989
  "wct" => [2008, 2018],
  "mqs" => [2011, 2018],
  "wqs" => [2011, 2018],
  "mbwt" => [2015, 2018],
  "wbwt" => [2016, 2018],
  "mjun" => [2008, 2018],
  "wjun" => [2008, 2018],
  "mlt" => [2008, 2018],
  "wlt" => [2008, 2018],
  "spec" => [2008, 2018]
}

events.each do |key, value|

  tour = key
  years = (value[0]..value[1]).to_a

  years.each do |year|

    url = get_tour_year_url year, tour

    p url

    events = scrape_tour_events_by_year url, year, tour

    events.each do |event|

      unless Event.exists?(:url => event[:url])

        e = Event.new
        e.year = event[:year]
        e.num = event[:num]
        e.tour = event[:tour]
        e.title = event[:name]
        e.location = event[:location]
        e.location_id = event[:location_id]
        e.startdate = event[:startdate]
        e.enddate = event[:enddate]
        e.champion = event[:champion]
        e.athlete_id = event[:athlete_id]
        e.url = event[:url]
        e.save

      end
    end
  end
end


##############################################################################

# after do
#   ActiveRecord::Base.connection.close
# end
