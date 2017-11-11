class CreateShips < ActiveRecord::Migration[5.1]
  def change
    create_table :ships do |t|
      t.integer :size
      t.string :directionFacing
      t.integer :playerId

      t.timestamps
    end
  end
end
