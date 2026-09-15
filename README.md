# Chunyu Zhao — Academic Website

Source for [chunyuzhao.com](https://chunyuzhao.com), a public academic website built with Jekyll and AcademicPages and hosted on GitHub Pages.

## Content locations

- Homepage and news: `_pages/about.md`
- Publications: `_publications/`
- Presentations: `_talks/`
- Curriculum vitae: `_pages/cv.md`
- Blog landing page: `_pages/blog.md`
- Site identity and academic profiles: `_config.yml`

## Safe update workflow

1. Pull the latest `master` branch.
2. Create a short-lived branch for the change.
3. Preview or run `bundle exec jekyll build --strict_front_matter`.
4. Open a pull request and wait for the site-build check.
5. Merge to `master`; GitHub Pages publishes the update.

Internal or confidential content must not be added to this repository. Keep private-site source and assets in a separate private repository and deployment environment.
