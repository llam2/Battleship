Rails.application.routes.draw do
  

   
  root 'welcome#index'
  get 'welcome/index'
  get 'game_page/index'
  resources :players
  resources :scores
  
  post 'scores/create' => 'scores#create'
  
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
