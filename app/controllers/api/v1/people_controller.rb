class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.all
    render 'index.json.jbuilder'
  end

  def create
    @person = Person.new(name: params[:name], bio: params[:bio])
    if @person.save
      render 'create.json.jbuilder'
    else
      render json: { errors: @person.errors.full_messages }, status: 422
    end
  end
end
