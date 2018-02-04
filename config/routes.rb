Rails.application.routes.draw do

  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create,:update] do
      resources :images
    end
    get '/images', to: 'images#recent_images'
    resources :images, except:[:index,:update,:destroy,:create,:new,:edit] do
      resources :comments, excepts:[:destroy]
      resources :likes, only:[:create,:destroy]
    end
    resource :session, only:[:create,:destroy]
    resources :follows, only:[:create,:destroy]
  end

end
