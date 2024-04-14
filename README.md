# WebDevFinalSprintApril2024
My final project for Web Development in my first semester of software development at Keyin College in St. John's, Newfoundland.

To disable CORS (Cross-Origin Resource Sharing) in Google Chrome for a locally hosted JSON file, you can follow these steps:

Launch Chrome with Disabled Web Security:
The easiest way to temporarily disable CORS in Chrome is by launching it with the --disable-web-security flag.
However, note that this opens your browser to potential security risks, so only use this for local development purposes.

Windows:
Close all Chrome windows.
Press Win + R to open the Run dialog.
Enter chrome.exe --disable-web-security --user-data-dir="C:\chrome_dev" and press Enter.

macOS:
Open Terminal.
Enter open -na "Google Chrome" --args --disable-web-security --user-data-dir="/tmp/chrome_dev" and press Enter.

Linux:
Open Terminal.
Enter google-chrome --disable-web-security --user-data-dir="/tmp/chrome_dev" and press Enter.

I chose to do my final project on houseplants. Now that this project is finished, I guess I owe my houseplants some water. I also incorporated elements I learned from "Build an AI Tool with JavaScript" as offered by get Coding.
