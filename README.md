# John Ray Morales — AI Video Specialist Portfolio

A responsive, one-page portfolio prepared for GitHub Pages. The site uses locally optimized
poster frames and opens the original public Google Drive videos in an accessible player.

## Live site

[moralesjohnray01212002.github.io/john-ray-morales-portfolio](https://moralesjohnray01212002.github.io/john-ray-morales-portfolio/)

## Included

- 12 selected videos across AI Animation, UGC, French UGC, and VSL/DTC
- Filterable project gallery
- Google Drive video player and links to the full 31-video portfolio
- Responsive navigation, motion preferences, keyboard focus states, and mobile layouts
- GitHub Pages deployment workflow

The publishable website is inside `dist/`.

## Preview locally

```bash
python3 -m http.server 8000 --directory dist
```

Then open `http://localhost:8000`.

## Before launch

- Add John’s preferred professional email and/or social profile.
- Review the short biography and project labels.
- Confirm that the Google Drive folder remains shared with “Anyone with the link.”

## GitHub Pages deployment

In **Settings → Pages**, choose **GitHub Actions** as the source once. The included workflow
publishes `dist/` automatically after each update to `main`.

GitHub Pages hosting is free for this public repository. A custom domain is optional.
