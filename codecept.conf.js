exports.config = {
  tests: "./tests/*.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "https://anveshak.bajajallianz.com",
      browser: "chrome",
      windowSize: "1200x900",
      smartWait: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: [
              "--ignore-certificate-errors",
            "--allow-insecure-localhost",
            "--allow-running-insecure-content",
            "--disable-web-security",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage"
          ],
        },
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  name: "simple-test",
};