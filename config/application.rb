require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module PEXCEL
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    config.active_job.queue_adapter = :sidekiq
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.before_configuration do
      if ENV['RAILS_ENV'] == 'development'
        secrets_file = File.join(Rails.root, 'config', 'secrets.yml')
        YAML.load(File.open(secrets_file)).each do |key,value|
          if key == ENV['RAILS_ENV']
            value.each do |k,v|
              ENV[k]=v
            end
          end
        end
      end
    end
  end
end
