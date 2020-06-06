Rails.application.routes.draw do
  resource :welcome, only: :show
  root to: "welcome#show"

  namespace :api, defaults: { format: :json } do
    resources :dishes
  end 
  
end
