class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.decimal :price, null: false

      t.timestamps null: false
    end
  end
end
