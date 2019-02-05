# == Schema Information
#
# Table name: dishes
#
#  id             :bigint(8)        not null, primary key
#  name           :text
#  region         :text
#  course         :text
#  wine           :text
#  key_ingredient :text
#  image          :text
#

class Dish < ActiveRecord::Base
  belongs_to :region, :optional => true
end
