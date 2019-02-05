# == Schema Information
#
# Table name: cities
#
#  id         :bigint(8)        not null, primary key
#  name       :text
#  population :text
#  image      :text
#  time_zone  :text
#  country_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ActiveRecord::Base
  belongs_to :country, :optional => true
end
