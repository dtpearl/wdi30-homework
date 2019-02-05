# == Schema Information
#
# Table name: teams
#
#  id         :bigint(8)        not null, primary key
#  name       :text
#  city       :text
#  stadium    :text
#  title      :integer
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  has_many :players
  belongs_to :country, optional: :true
end
