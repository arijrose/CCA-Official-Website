# Creatives for Collective Action — four-page website

This is a plain HTML, CSS, and JavaScript project. **Astro and Astro Nano are not required.**

## Open in Visual Studio Code

1. Unzip the project, then open the `cca-site` folder in VS Code.
2. Open `index.html` in your browser. For live reloading, use VS Code's Live Server extension.
3. Edit the words in the four HTML files. Edit the shared design in `styles.css`.

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Projects & Events | `projects-events.html` |
| Contact | `contact.html` |

All navigation links are ordinary relative links. You can open the pages directly or publish the folder on a static web host.

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

The Contact page includes the `creatives.boston@gmail.com` email link and a link to `https://www.instagram.com/creatives.boston/`.

The December 5 market is presented as occurring in **2026**, based on the supplied event copy. Check the date, vendor application link, vendor count, fundraiser details, phone booth metrics, and bill status before publishing. The Projects & Events copy is still under review.

The layout is an original implementation informed by the editorial structure of Emerson Collective. It contains no images, logos, CSS, or JavaScript copied from that website.
