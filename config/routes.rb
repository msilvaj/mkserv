Rails.application.routes.draw do
  #get 'project/index'
  get 'projects', to: 'project#index'
  post 'projects', to: 'project#create'
end
