class CreateShips < ActiveRecord::Migration[5.1]
  def change
    create_table :ships do |t|
      t.string :owner
      t.integer :size
      t.string :directionFacing
      t.integer :ownerId
      
      add_foreign_key :ownerId

      t.timestamps
    end
  end
end
