# Creatives for Collective Action — five-page website

This is a plain HTML, CSS, and JavaScript project. **Astro and Astro Nano are not required.**

## Open in Visual Studio Code

1. Double-click the ZIP to unzip it, then move the `cca-site` folder somewhere permanent on your computer.
2. In VS Code, choose **File → Open Folder** and select that `cca-site` folder.
3. Choose **Terminal → New Terminal**. The terminal should open inside the folder containing `index.html`.
4. Run:

   ```bash
   python3 -m http.server 8000
   ```

5. Open **http://localhost:8000** in your browser. Keep the terminal running while you preview the website; press **Control + C** to stop the server.
6. Edit the words in the five HTML files. Edit the shared design in `styles.css`, and save with **Command + S**. Refresh the browser to see your changes.

No npm install or build command is needed. If Python 3 is unavailable, install VS Code's Live Server extension and use **Go Live** as an alternative.

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Projects & Events | `projects-events.html` |
| Get Involved | `get-involved.html` |
| Contact | `contact.html` |
| Shared appearance and spacing | `styles.css` |
| Shared navigation and image behavior | `script.js` |
| Photos, flyer, and logo | `images/` |
| Charter web fonts | `fonts/` |
| GitHub Pages custom domain | `CNAME` |

All navigation links are ordinary relative links. You can open the pages directly or publish the folder on a static web host.

## Publish future changes

The GitHub repository is **https://github.com/arijrose/CCA-Official-Website**, and the public website is **https://creativesforcollectiveaction.com**.

Local changes do not update the live website automatically. After reviewing your edits:

1. Open the repository on GitHub and choose **Add file → Upload files**.
2. Upload only the files you changed from inside `cca-site`. HTML, CSS, and JavaScript files belong at the repository's top level. For changed images, open the matching `images` folder in the repository before uploading them.
3. Add a descriptive commit message, select **Commit directly to main**, and click **Commit changes**.
4. Check the latest Pages deployment in **Actions**, then refresh the live website after it succeeds.

Keep the `CNAME` file containing `creativesforcollectiveaction.com`; it preserves the custom domain configuration. Upload the contents of `cca-site`, rather than the enclosing folder or ZIP. You do not need to change Wix DNS settings for ordinary website edits.

If you edit files directly on GitHub, download those updated files into this local folder too before making further edits, so your copies stay in sync.

## Pictures

Your photos are already in the `images` folder. To swap a photo later, replace the corresponding file while keeping its filename. Each illustrated placeholder is replaced automatically when its image loads.

The illustrated CCA logo you supplied is saved as `images/cca-logo.png` and appears in the top-left header on every page. Replace that file with another PNG of the same name to change it later.

| File | Where it appears | Suggested size |
| --- | --- | --- |
| `hero.jpg` | Home introduction (your newest Home photo) | Included |
| `about.jpg` | About (your workshop photo) | Included |
| `ari-rosenthal.jpg` | Ari's Founding Team card on About | Included |
| `adam-torres.png` | Adam's Founding Team card on About | Included |
| `sohara-zafar.png` | Sohara's Founding Team card on About | Included |
| `phone-booth-home.jpg` | Home Future Booth card (your most recent phone booth photo) | Included |
| `phone-booth.jpg` | Upper Future Booth photo on Projects & Events (your phone booth photo 1) | Included |
| `phone-booth-detail.jpg` | Lower Future Booth photo on Projects & Events (your phone booth photo 2) | Included |
| `art-market.jpg` | Home and Projects & Events | Fundraising market flyer; portrait, 1080 × 1350 |

You may use PNG or WebP, but update the image `src` in the HTML pages to match. Update each image's `alt` description to describe any new photo.

## Contact form and publishing

The Contact page is connected to Formspree at `https://formspree.io/f/mbglbqvv`. It uses the Formspree AJAX library from a CDN, so no npm install or build step is required. Visitors stay on the Contact page, see validation and submission errors, and receive a success message after Formspree accepts their submission. The submit button is disabled while sending. If the library is unavailable, the HTML form still submits directly to Formspree.

The hidden `subject` field uses `{{ topic }} {{ name }}`, so a submission from Ari Rosenthal about Joining the Collective has the subject **Joining the Collective Ari Rosenthal**. The `email` field sets the visitor's Reply-To address. The `message` field contains their message. Standard notification emails include the submitted fields; an email body containing only the message requires Formspree's Business-plan custom email templates.

In Formspree, confirm that the form's Email action sends to the verified address **creatives.boston@gmail.com**. The recipient is controlled in Formspree, not in the website code. After uploading these files, submit one test from the Contact page and confirm receipt, subject, and reply address. A real email delivery test has not been performed from this workspace.

The Contact page contains a welcoming introduction, the message form, and Email, Instagram, and Discord links beneath the form. The Get Involved page contains all five ways to participate, the directory form, and Email, Instagram, and Discord links. Collaboration and resource-offer links lead to the form on the Contact page.

The December 5 market is presented as occurring in **2026**, based on the supplied event copy. Check the date, vendor application link, vendor count, fundraiser details, phone booth metrics, and bill status before publishing. The Projects & Events copy is still under review.

The layout is an original implementation informed by the editorial structure of Emerson Collective. It contains no images, logos, CSS, or JavaScript copied from that website.
