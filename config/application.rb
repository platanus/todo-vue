require File.expand_path('../boot', __FILE__)

require 'rails/all'
Bundler.require(*Rails.groups)

module TodoVue
  class Application < Rails::Application
    config.middleware.insert_before 0, "Rack::Cors" do
      allow do
        origins '*'
        resource '*',
          headers: :any,
          expose: ['X-Page', 'X-PageTotal'],
          methods: [:get, :post, :delete, :put, :options]
      end
    end
    config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')
    config.i18n.default_locale = :es
    config.active_record.raise_in_transactional_callbacks = true

    # Configure Browserify to use babelify to compile ES6
    config.browserify_rails.commandline_options = "-t [ babelify --presets [ es2015 ] ]"
  end
end
