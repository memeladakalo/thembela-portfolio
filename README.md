# Thembela Memela — Personal Portfolio

A responsive personal portfolio built with plain HTML, CSS and JavaScript. No framework or build process is required.

## Run locally
1. Open this folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html` and select **Open with Live Server**.

## Personalise before publishing
- In `index.html`, replace `YOUR-GITHUB-USERNAME`, `YOUR-LINKEDIN-USERNAME`, and `YOUR-STUDYSYNC-REPOSITORY` with your actual URLs.
- Add your real CV as `assets/cv.pdf`. If you use a different filename, update the View CV link in `index.html`.
- Replace the TM initials placeholder in the hero with a photo if you want one. A web image can be placed in `assets/` and the `.avatar-placeholder` can be changed to an `<img>` element.
- Confirm that the StudySync status badge accurately reflects what currently works. Keep the “Core modules working” wording if accurate; do not claim the entire project is 100% complete unless it is.
- Review the skill list and remove anything you cannot yet discuss or demonstrate in an interview.
- The contact form is frontend-only. It opens the visitor's email application using a `mailto:` link; it does not send or store form submissions on a server.
- The WhatsApp link uses the international South African format for 083 431 6432: `27834316432`.

## Publish on GitHub and Netlify
1. Create a GitHub repository named `thembela-portfolio` (or your preferred name).
2. In VS Code, open **Terminal → New Terminal** and ensure the terminal is in this project folder.
3. Run:
   ```bash
   git init
   git add .
   git commit -m "Build personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/memeladakalo/thembela-portfolio.git
   git push -u origin main
   ```
   If Git asks you to identify yourself first, run `git config --global user.name "Thembela Memela"` and `git config --global user.email "YOUR-EMAIL"` then repeat the commit.
4. Sign in to Netlify, choose **Add new project / Import an existing project**, connect GitHub, and select your portfolio repository.
5. For this plain HTML site, leave the build command blank and set the publish directory to `.` (the repository root), then deploy. Netlify will give you a public URL. Later pushes to the connected branch can trigger new deployments.

## GitHub Pages alternative
In the repository, go to **Settings → Pages**. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save. Wait for the Pages URL to appear.
