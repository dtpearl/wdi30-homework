# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  has_many :songs
  # has_many :through lets you use an associated model as a join table.
  # i.e. you can skip songs and find an artist's genres with @artist.genres
  has_many :genres, :through => :songs
  has_many :albums, :through => :songs
end
