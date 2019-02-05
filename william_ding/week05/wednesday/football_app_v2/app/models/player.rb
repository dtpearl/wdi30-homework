# == Schema Information
#
# Table name: players
#
#  id       :bigint(8)        not null, primary key
#  name     :text
#  nation   :text
#  team     :text
#  position :text
#  age      :integer
#  rating   :integer
#  image    :text
#

class Player < ApplicationRecord
  belongs_to :team, optional: :true
end
