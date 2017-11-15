class Player < ApplicationRecord
    has_many :ships
    has_many :scores
    
    def userName
        @players.userName
    end
end
