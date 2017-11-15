class AddForeignKeys < ActiveRecord::Migration[5.1]
  def change
    add_foreign_key :ships, :players
    add_foreign_key :scores, :players
  end
end
