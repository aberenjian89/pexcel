Rails.application.routes.draw do
  require 'sidekiq/web'


  mount Sidekiq::Web => '/sidekiq'


  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    # resources :users, only:[:create,:update,:show] do
    #   resources :images
    #   resources :follows, only:[:create,:destroy]
    # end
    # get '/images', to: 'images#recent_images'
    # resources :images, except:[:index,:update,:destroy,:create,:new,:edit] do
    #   resources :comments, excepts:[:destroy]
    #   resources :likes, only:[:create,:destroy]
    # end
    get '/images/home_user_gallery', to: 'images#home_user_gallery'
    resources :users, only: [:create,:update,:show]
    resources :images, only: [:create,:update,:show,:destroy]


    resource :session, only:[:create,:destroy]
  end

end
