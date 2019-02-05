# == Schema Information
#
# Table name: regions
#
#  id         :bigint(8)        not null, primary key
#  name       :text
#  capital    :text
#  population :integer
#  flag       :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Region < ActiveRecord::Base
  has_many :dishes
end
