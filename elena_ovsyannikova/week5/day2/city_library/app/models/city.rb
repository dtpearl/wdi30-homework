# == Schema Information
#
# Table name: cities
#
#  id         :integer          primary key
#  name       :text
#  image      :text
#  population :float
#  square     :float
#  country    :text
#

class City < ActiveRecord::Base
end
