class Player < ApplicationRecord
    has_many ships
    has_many scores
end
