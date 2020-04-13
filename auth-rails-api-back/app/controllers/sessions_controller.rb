class SessionsController < ApplicationController
    #my sessions had some error that wasn't allowing login, after switching to this version it worked - try to find error
    def create
      @user = User.find_by(email: params[:user][:email])
  
      if @user && @user.authenticate(params[:user][:password])
        # if success!!!!
        # generate a JWT
        # "beans" should be EVN['SECRET']
        token = generate_token({id: @user.id})
        # include that token in the response back to the client
        # include the user in the reponse as well
  
        resp = {
          user: user_serializer(@user),
          jwt: token
        }
  
        render json: resp
      else
        resp = {
          error: "Invalid credentials",
          details: @user.errors.full_messages
        }
        render json: resp, status: :unauthorized
      end
    end
  
    def get_current_user
      if logged_in?
        render json: {
            user: user_serializer(current_user)
          }, status: :ok
      else
        render json: {error: "No current user"}
      end
    end
  end

# class SessionsController < ApplicationController
#     #sessions as it is built here is not a true sessions as in a usual rails app, it is for organizational and use purposes for jwt token idea
#     #--api flag removes middleware that usually helps rails to understand and allow access to usual session functions
#     def create
#         #changeing these to params[:user][:email], is not part of fixing initial 500 server error
#         #these changes below, [:user][:email] and [:user][:password]
#         #ensure credentials are passed in, without these correct credentials throw the error "invalid credentials"
#         #jsons and error formats change in later code, but don't affect these errors
#         @user = User.find_by(email: params[:user][:email])


#         #to fix 500 status error had to add @user.authenticate, before was @authenticate
#         if @user && @user.authenticate(params[:user][:password])
#             #success

#             token = generate_token({id: @user.id}) #include token in resp back to client/front and include user in the response as well
#             resp = {user: user_serializer(@user),
#                     jwt: token
#             }


          

#             render json: @user
#         else
#             resp = {
#                 error: "Invalid credentials",
#                 details: @user.errors.full_messages
#                 #allows mapping through and returning various details on errors
#             }
#             render json: resp, status: :unauthorized 
#         end
#     end

#     def get_current_user
        
#         if logged_in?
#             render json: {
#                 user: user_serializer(current_user)

#         }, status: :ok
#         else
#             render json: {error: "No Current user"}
#         end
#     end

#     # def delete
#     # end 


    
# end
