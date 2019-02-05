# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                    cities GET    /cities(.:format)                                                                        cities#index
#                           POST   /cities(.:format)                                                                        cities#create
#                  new_city GET    /cities/new(.:format)                                                                    cities#new
#                 edit_city GET    /cities/:id/edit(.:format)                                                               cities#edit
#                      city GET    /cities/:id(.:format)                                                                    cities#show
#                           PATCH  /cities/:id(.:format)                                                                    cities#update
#                           PUT    /cities/:id(.:format)                                                                    cities#update
#                           DELETE /cities/:id(.:format)                                                                    cities#destroy
#                 countries GET    /countries(.:format)                                                                     countries#index
#                           POST   /countries(.:format)                                                                     countries#create
#               new_country GET    /countries/new(.:format)                                                                 countries#new
#              edit_country GET    /countries/:id/edit(.:format)                                                            countries#edit
#                   country GET    /countries/:id(.:format)                                                                 countries#show
#                           PATCH  /countries/:id(.:format)                                                                 countries#update
#                           PUT    /countries/:id(.:format)                                                                 countries#update
#                           DELETE /countries/:id(.:format)                                                                 countries#destroy
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  resources :cities
  resources :countries
end
