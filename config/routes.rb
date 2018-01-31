Rails.application.routes.draw do

  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create,:index,:update]
    resource :session, only:[:create,:destroy]
    resources :images do
      resources :comments, excepts:[:destroy]
      resources :likes, only:[:create,:destroy]
    end
    resources :follows, only:[:create,:destroy]

  end

end
