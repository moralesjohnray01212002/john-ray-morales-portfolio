# John Ray Morales — AI Video Specialist Portfolio

A responsive, one-page portfolio prepared for GitHub Pages. The site uses locally optimized
poster frames and opens the original public Google Drive videos in an accessible player.

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

## Publish with GitHub Pages

1. Create a new public GitHub repository.
2. Upload this project or push the `main` branch.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.
4. The included workflow publishes `dist/` after each update to `main`.

GitHub Pages hosting is free for public repositories. A custom domain is optional; the standard
address will be `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
