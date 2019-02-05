require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Team < ActiveRecord::Base
  belongs_to :league, :optional => true
end

class League < ActiveRecord::Base
  has_many :teams
end

# Home page......
get '/' do
  @teams = Team.all
  erb :home
end

# Team details .........
get '/teams/:id' do
  @team = Team.find params[:id]

  erb :team_view
end

# Create teams form......
get '/team_create' do
  erb :team_create
end

# Create teams results.....
post '/new_team' do
  team = Team.new
  team.name = params[:name]
  team.city = params[:city]
  team.stadium = params[:stadium]
  team.stadium_capacity = params[:stadium_capacity]
  team.last_rank = params[:last_rank]
  team.title = params[:title]
  team.logo = params[:logo]
  team.league_id = params[:league_id]
  team.save

  redirect to('/')
end

# Edit team.......
get '/teams/:id/edit' do
  @team = Team.find params[:id]
  erb :team_edit
end

post '/edit' do
  team = Team.find params[:id]
  team.league_id = params[:league_id]
  team.name=params[:name]
  team.city=params[:city]
  team.stadium=params[:stadium]
  team.stadium_capacity=params[:stadium_capacity]
  team.last_rank=params[:last_rank]
  team.title=params[:title]
  team.logo=params[:logo]
  team.id=params[:id]
  team.save

  redirect to("/teams/#{params[:id]}")
  # params.to_s
end



# Delete teams......
get '/teams/:id/delete' do
  team = Team.find params[:id]
  team.destroy;

  redirect to('/')
end

############# Leagues ###################
get '/leagues_view' do
  @leagues = League.all
  erb :leagues_show
end

get '/leagues/:id' do
  @league = League.find params[:id]

  erb :leagues_view
end

get '/leagues_create' do
  erb :leagues_create
end

post '/new_league' do
  league = League.new
  league.name = params[:name]
  league.country = params[:country]
  league.logo = params[:logo]
  league.save

  redirect to('/leagues_view')
end

get '/leagues/:id/edit' do
  @league = League.find params[:id]
  erb :leagues_edit
end

post '/league_edit' do
  league = League.find params[:id]
  league.name = params[:name]
  league.country = params[:country]
  league.logo = params[:logo]
  league.save

  redirect to('/leagues_view')
end

get '/leagues/:id/delete' do
  league = League.find params[:id]
  league.destroy;

  redirect to('/leagues_view')
end


get '/leagues/:id/show_teams' do
  @league = League.find params[:id]
  @teams = Team.all
  erb :show_teams_in_league
end
