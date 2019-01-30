# Jobs can help us do background work. For example, assume we wanted to send an e-mail to new users that have signed up. Traditionally, we can have that in our controller, and the app would need to wait for that e-mail to be sent. Setting it as a job with the ActiveJob class will smooth out this behavior. 
# So for the above example, the app would continue to run the script (perhaps it redirects to a new page), and will then send that e-mail when it has some time freed up. 
class ApplicationJob < ActiveJob::Base
end
