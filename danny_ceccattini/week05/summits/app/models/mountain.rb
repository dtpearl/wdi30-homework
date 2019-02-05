# == Schema Information
#
# Table name: mountains
#
#  id        :integer          primary key
#  name      :text
#  location  :text
#  height    :integer
#  image     :text
#  white_man :text
#

class Mountain < ActiveRecord::Base
end
