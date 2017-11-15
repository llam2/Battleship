class PlayersController < ApplicationController
    
    def new
        @player = Player.new
    end
    
    def show
        @player = Player.find(params[:id])
    end
    
    def create
        @player = Player.all
end

    

end
