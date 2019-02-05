class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token # ONLY FOR HAND WRITTEN FORMS
end
