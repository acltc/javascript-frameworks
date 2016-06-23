class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.all
    render 'index.json.jbuilder'
  end
end
