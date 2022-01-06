/**
 * Configuration for Gmail2GDrive
 * See https://github.com/ahochsteger/gmail2gdrive/blob/master/README.md for a config reference
 * Customized to only extract JP(E)G images by https://github.com/jasoneppink
 */
function getGmail2GDriveConfig() {
  return {
    // Global filter
    "globalFilter": "-in:trash -in:drafts -in:spam",
    // Gmail label for processed threads (will be created, if not existing):
    "processedLabel": "to-gdrive/processed",
    // Sleep time in milli seconds between processed messages:
    "sleepTime": 100,
    // Maximum script runtime in seconds (google scripts will be killed after 5 minutes):
    "maxRuntime": 280,
    // Only process message newer than (leave empty for no restriction; use d, m and y for day, month and year):
    "newerThan": "1m",
    // Timezone for date/time operations:
    "timezone": "GMT",
    // Processing rules:
    "rules": [
      { // Store all jp(e)g attachments to folder "Digital Photo Frame"
        "filter": "has:attachment",
        "folder": "'Digital Photo Frame'",
        "filenameFromRegexp": ".*\.jpe*g$|.*\.JPE*G$"
      }
    ]
  };
}
