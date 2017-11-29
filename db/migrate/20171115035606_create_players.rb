class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :userName
      t.boolean :isBott
      t.string :password
      

      t.timestamps
    end
  end
end
