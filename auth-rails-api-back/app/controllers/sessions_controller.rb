class SessionsController < ApplicationController
    def create
        #changeing these to params[:user][:email], is not part of fixing initial 500 server error
        #these changes below, [:user][:email] and [:user][:password]
        #ensure credentials are passed in, without these correct credentials throw the error "invalid credentials"
        @user = User.find_by(email: params[:user][:email])


        #to fix 500 status error had to add @user.authenticate, before was @authenticate
        if @user && @user.authenticate(params[:user][:password])
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
