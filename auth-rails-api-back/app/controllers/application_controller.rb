class ApplicationController < ActionController::API


    def current_user
        #for example purposes and temporary
        User.first
    end

    def logged_in?
        #for example purposes and temporary
        true

    end

end
