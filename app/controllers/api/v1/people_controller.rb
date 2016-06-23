class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.all
    render 'index.json.jbuilder'
  end

  def create
    @person = Person.new(name: params[:name], bio: params[:bio])
    if @person.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @person.errors.full_messages }, status: 422
    end
  end

  def update
    @person = Person.find_by(id: params[:id])
    if @person.update(name: params[:name] || @person.name, bio: params[:bio] || @person.bio)
      render 'show.json.jbuilder'
    else
      render json: { errors: @person.errors.full_messages }, status: 422
    end
  end

  def destroy
    @person = Person.find_by(id: params[:id])
    @person.destroy
    render json: { message: "Person Destroyed!" }
  end
end
