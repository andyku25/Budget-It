class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword

  has_secure_password

  validates_presence_of :first_name, :last_name, :email, :password_digest
  validates_uniqueness_of :email

  field :first_name, type: String
  field :last_name, type: String
  field :email, type: String
  field :password_digest, type: String

  validates :password, :length => { :minimum => 6 }, :on => :create

end
