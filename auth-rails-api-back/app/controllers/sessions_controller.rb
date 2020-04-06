class SessionsController < ApplicationController
    def create
        @user = User.find_by(email: params[:email])

        if @user && @authenticate(params[:password])
            #success
            render json: @user
        else
            render json: {
                error: "Invalid credentials"

            }, status: :unauthorized
        end


    end
    
    def delete

    end

    
end
