# == Schema Information
#
# Table name: authors
#
#  id          :bigint(8)        not null, primary key
#  name        :text
#  nationality :text
#  dob         :date
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Author < ActiveRecord::Base
  has_many :books
end
