module.exports = {
  src_folders: ['tests/e2e/specs'],
  output_folder: 'tests/e2e/reports',
  page_objects_path: 'tests/e2e/page-objects',
  custom_assertions_path: 'tests/e2e/custom-assertions',
  custom_commands_path: 'tests/e2e/custom-commands',
  globals_path: 'tests/e2e/globals.js',

  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    cli_args: ['--verbose'],
    port: 9515,
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: './tests/e2e/reports',
        on_failure: true,
        on_error: true,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
          args: ['--no-sandbox'],
        },
        loggingPrefs: { driver: 'INFO', server: 'OFF', browser: 'INFO' },
      },
    },
  },
};
