class SessionsController < ApplicationController
    def create
        #changeing these to params[:user][:email], is not part of fixing initial 500 server error, may not be needed
        @user = User.find_by(email: params[:email])


        #to fix 500 status error had to add @user.authenticate, before was @authenticate
        if @user && @user.authenticate(params[:password])
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
