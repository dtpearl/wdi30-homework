class CustomersController < ApplicationController
  def index
    @customer = Customer.all
  end
  def new
    @customer = Customer.new
  end
end
