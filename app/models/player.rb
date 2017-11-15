class Player < ApplicationRecord
    has_many :ships
    has_many :scores
    
    def getUserName
        @players.userName
    end
end
