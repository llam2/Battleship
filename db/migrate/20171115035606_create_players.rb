class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :userName
      t.boolean :isBot

      t.timestamps
    end
  end
end
