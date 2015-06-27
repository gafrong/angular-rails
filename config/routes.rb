Rails.application.routes.draw do
  namespace :api do
    resources :books
    resources :lists
  end

  get ':id' => 'welcome#index'
  get 'new' => 'welcome#index'
  root to: 'welcome#index'
end
