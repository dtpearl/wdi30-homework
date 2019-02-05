# == Schema Information
#
# Table name: albums
#
#  id      :bigint(8)        not null, primary key
#  title   :text
#  year    :text
#  songs   :integer
#  length  :integer
#  cover   :text
#  band_id :integer
#

class Album < ActiveRecord::Base
  belongs_to :band, :optional => true
end
