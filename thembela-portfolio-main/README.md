# Thembela Memela — Personal Portfolio

A responsive personal portfolio built with plain HTML, CSS and JavaScript. No framework or build process is required.

## Run locally
1. Open this folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html` and select **Open with Live Server**.

## Personalise before publishing
- Add your real CV as `assets/cv.pdf`. If you use a different filename, update the View CV link in `index.html`.
- Add your Zensa screenshots to `assets/zensa-screenshots/` using the filenames listed in `assets/zensa-screenshots/ADD_ZENSA_SCREENSHOTS_HERE.txt`.
- The Projects section now contains Zensa, Compassion Cloud and Job Application Tracker. StudySync has been removed.
- LinkedIn has been updated to the profile supplied for Thembela Memela.
- The GitHub profile button uses `https://github.com/memeladakalo`.
- The two Netlify buttons currently use the Netlify project dashboard links supplied. For visitors to open the deployed websites directly, replace those `href` values with each site's public `https://....netlify.app` URL.
- The contact form is frontend-only. It opens the visitor's email application using a `mailto:` link; it does not send or store form submissions on a server.
- The WhatsApp link uses the international South African format for 083 431 6432.

## Publish on GitHub and Netlify
1. Create a GitHub repository named `thembela-portfolio` (or your preferred name).
2. In VS Code, open **Terminal → New Terminal** and ensure the terminal is in this project folder.
3. Run:
   ```bash
   git init
   git add .
   git commit -m "Update personal portfolio projects"
   git branch -M main
   git remote add origin https://github.com/memeladakalo/thembela-portfolio.git
   git push -u origin main
   ```
4. Connect the GitHub repository to Netlify and deploy the repository root.
