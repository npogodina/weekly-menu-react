Rails.application.routes.draw do
  resource :welcome, only: :show
  root to: "welcome#show"

  namespace :api, defaults: { format: :json } do
    resources :dishes
  end 

  get "*page", to: "welcome#show"

  # get "*page", to: "welcome#show", constraints: ->(req) do
  #   !req.xhr? && req.format.html?
  # end
  
end
