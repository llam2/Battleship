class PlayerController < ApplicationController
    def index

    end
    
    def new
    end
    
    def create
        render plain:params[:player].inspect
    end
end
