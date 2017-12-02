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
    
     def edit
        @player =  Player.find(params[:id])
    end
    def update
        @player = Player.find(params[:id])
        if @player.update()
        redirect_to @article
        else
        render 'edit'
        end
    end
end
