class ScoresController < ApplicationController

    
    def new
    @score = Scores.new
    end

 def show
        @score = Score.find(params[:id])
    end
    
    def create
    @score.new(params.require(:scores).permit(:score))
    @score.save
end
    
     def edit
        @score =  Ship.find(params[:id])
    end
    def update
        @score = Score.find(params[:id])
        if @score.update()
        redirect_to @score
        else
        render 'edit'
        end
    end
        
end
