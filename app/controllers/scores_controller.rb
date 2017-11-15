class ScoresController < ApplicationController
    @scores = Score.all
end
