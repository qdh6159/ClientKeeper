class ClientsController < ApplicationController

    def index
        render json: Client.all
        # render json: {status: 200, clients: clients}
    end

    def show
        puts params
        render json: Client.find(params[:id])
        # render json: {status: 200, client: client}
      end
end
