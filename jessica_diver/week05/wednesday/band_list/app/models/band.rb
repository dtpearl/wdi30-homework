# == Schema Information
#
# Table name: bands
#
#  id        :bigint(8)        not null, primary key
#  name      :text
#  country   :text
#  genre     :text
#  followers :integer
#  image     :text
#

class Band < ActiveRecord::Base
  has_many :albums
end
