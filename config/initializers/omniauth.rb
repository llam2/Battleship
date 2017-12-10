OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '278452141588-0ko94chtln8qjenl2j7h867hbcm2i2p2.apps.googleusercontent.com', 'jL6SayDIiHIn-AejWtuGINh1', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end