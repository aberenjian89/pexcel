Rails.application.routes.draw do

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
    resource :users, only: [:create,:update,:show]
    resource :images, only: [:create,:update,:show]
    get '/images/user_gallery', to: 'images#user_gallery'
    
    resource :session, only:[:create,:destroy]
  end

end
