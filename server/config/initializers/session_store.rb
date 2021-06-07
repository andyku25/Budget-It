if Rails.env === "production"
  Rails.application.config.session_store :cookie_store, key: "_Budget-It",
  domain: "http://localhost:3000" #production domain when known
else
  Rails.application.config.session_store :cookie_store, key: "_Budget-It"