require_relative "sydney_trains.rb";
require_relative "mta_trains.rb";
require 'pry'




def getRouteDetails(stations, start, finish)

  stations.reverse! if stations.index(start) > stations.index(finish)

  {
    :stations => stations[stations.index(start)..stations.index(finish)],
    :endOfLine => stations.last
  }
end


def journey(options)

  options = options.sort_by { |option| option[:stations].size }

  options.first(10).each { |option|
    output = ""
    output += option[:start]
    output += " > "
    option[:line].size.times do |i|
        output += "Line: #{option[:line][i]} to #{option[:endOfLine][i]}, Route: #{option[:route][i]}, Stops: #{option[:stations][i].size-1}"
        output += " > "
        if i < option[:transfer].size
          output += "Transfer: #{option[:transfer][i]}"
          output += " > "
        end
    end
    output += option[:finish]
    p output
  }
  return ""
end



def getTrip(start, finish, system)

  options = []

  system.keys.each do |line_start|

    system[line_start].keys.each do |route_start|

      stations_start = system[line_start][route_start].keys

      if stations_start.include?(start)

        if stations_start.include?(finish)

          details = getRouteDetails(stations_start, start, finish);

          option = {
            :start => start,
            :finish => finish,
            :stations => [details[:stations]],
            :line => [line_start],
            :route => [route_start],
            :endOfLine => [details[:endOfLine]],
            :transfer => []
          }

          options << option

        else

          system[line_start][route_start].keys.each do |station_transfer|

            lines_transfer = system[line_start][route_start][station_transfer]

            unless lines_transfer.empty?

              lines_transfer.each do |line_transfer|

                system[line_transfer].keys.each do |route_transfer|

                  stations_transfer = system[line_transfer][route_transfer].keys

                  if stations_transfer.include?(finish)

                    details = getRouteDetails(stations_start, start, station_transfer);

                    option = {
                      :start => start,
                      :finish => finish,
                      :stations => [details[:stations]],
                      :line => [line_start],
                      :route => [route_start],
                      :endOfLine => [details[:endOfLine]],
                      :transfer => [station_transfer]
                    }

                    details = getRouteDetails(stations_transfer, station_transfer, finish);

                    option[:stations] << details[:stations]
                    option[:line] << line_transfer
                    option[:route] << route_transfer
                    option[:endOfLine] << details[:endOfLine]

                    options << option

                  end
                end
              end
            end
          end
        end
      end
    end
  end

  return journey(options)
end


p getTrip('Times Square', '33St', $mta_trains)
p "-"*50
p getTrip('33St', 'Times Square', $mta_trains)

p "-"*50
p "-"*50

p getTrip('Times Square', '33St', $mta_trains)
p "-"*50
p getTrip('33St', 'Times Square', $mta_trains)

# p "-"*50
# p "-"*50

# p getTrip("Town Hall", "Blacktown", $sydney_trains)
# p "-"*50
# p getTrip("Waterfall", "Blacktown", $sydney_trains)





# lines_transfer = system[line][route].map { |station, line| line }.flatten.uniq.delete_if {|line| line == l }
# lines_transfer.delete_if {|line| line == l }
