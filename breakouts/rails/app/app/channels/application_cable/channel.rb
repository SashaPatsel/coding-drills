# Channels support peer-to-peer interactions. They integrate WebSockets into Rails apps 
# "WebSockets provide a persistent connection between a client and server that both parties can use to start sending data at any time."
module ApplicationCable
  class Channel < ActionCable::Channel::Base
  end
end
