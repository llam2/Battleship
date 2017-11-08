 def create
        #render plain: params[:article].inspect
        @ship = Ship.new(article_params)
        byebug
        
        if @ship.save
            byebug
            redirect_to @ship
        else
            render 'new'
        end
        
        
    end