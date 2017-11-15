class PlayersController < ApplicationController
    @players = Player.all
    
end
