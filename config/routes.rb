Rails.application.routes.draw do
  

   
  get 'sessions/create'

  get 'sessions/destroy'

  get 'home/show'

  root 'welcome#index'
  get 'welcome/index'
  get 'game_page/index'
  resources :players
  resources :scores
  
  post 'scores/create' => 'scores#create'
  
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Battleship::Application.routes.draw do
  get 'auth/google_oauth2/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

 
end