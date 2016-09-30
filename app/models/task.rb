class Task < ActiveRecord::Base
end

# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  finished    :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category    :string
#  string      :string
#
