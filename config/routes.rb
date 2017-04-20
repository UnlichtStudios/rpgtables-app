Rails.application.routes.draw do

  root 'static_pages#index'
  get 'bleh', to: 'static_pages#bleh'
end
