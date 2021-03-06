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
    get '/images/landing_recent_images', to: 'images#landing_recent_images'
    get '/images/home_user_gallery', to: 'images#home_user_gallery'
    post '/users/upload_home_user_avatar', to: 'users#upload_home_user_avatar'
    delete '/users/remove_home_user_avatar', to: 'users#remove_home_user_avatar'
    resources :users, only: [:create,:update,:show]
    resources :images, only: [:create,:update,:show,:destroy]

    resource :session, only:[:create,:destroy]
  end

end
