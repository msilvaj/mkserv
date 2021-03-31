Rails.application.routes.draw do
  #get 'project/index'
  get 'projects', to: 'project#index'
  get 'projects/:id', to: 'project#show' , as: 'project'
  post 'projects', to: 'project#create'
end
