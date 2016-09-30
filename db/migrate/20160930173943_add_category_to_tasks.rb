class AddCategoryToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :category, :string
    add_column :tasks, :string, :string
  end
end
