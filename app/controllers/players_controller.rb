class PlayersController < ApplicationController
    
    def new
        @player = Player.new
    end
    
    def show
        @player = Player.find(params[:id])
    end
    
    def create
        #render plain: params[:article].inspect
        @player = Player.new(player_params)
        
        
        if @player.save
    
            redirect_to root_path
        else
            render 'new'
        end
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
    
    private
        def player_params
            params.require(:player).permit(:userName,:password)
        end
end
