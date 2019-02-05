# == Schema Information
#
# Table name: mountains
#
#  id      :integer          primary key
#  name    :text
#  ranking :integer
#  image   :text
#  height  :float
#  country :text
#  climb   :date
#

class Mountain < ActiveRecord::Base
end
