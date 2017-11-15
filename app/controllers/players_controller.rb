class PlayersController < ApplicationController
    
    def new
        @player = Player.new
    end
    
    def show
        @player = Player.find(params[:id])
    end
    
    def create
        @player = Player.all
        
         if @player.save
            
            redirect_to @player
        else
            render 'new'
        end
end

def destroy
    @player = Player.find(params[:id])
    @player.destroy
end
