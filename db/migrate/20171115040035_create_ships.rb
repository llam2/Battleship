class CreateShips < ActiveRecord::Migration[5.1]
  def change
    create_table :ships do |t|
      t.integer :playerId
      t.string :directionFacing
      t.integer :size
      t.integer :coord1
      t.integer :coord2

      t.timestamps
    end
  end
end
