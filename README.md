# Recreation of Honeybank Studios Site

Please note that this was not intended to be a complete 1:1 recreation of the site. This demo site was created to demonstrate my skills as a developer to complement the job application I sent to Honeybank Studios. Additionally, I aimed to address and resolve some issues that I observed on the original site.

[Check out the demo site here](https://honey-bank-studio-recreation.vercel.app/)

## Identified Issues

- **Mobile Layout**: The layout appears to break around a viewport width of approximately 400px. This seems to be related to the `position: absolute` declaration in the `.scroller` class.

## Implemented Improvements

- **Mobile Layout**: Fixed the breaking layout.
- **Mobile Navigation Menu**: Smoothed out the navigation toggle. Now it features an animated hamburger menu.
- **Contact Form**: Enhanced the form progressively to include validation on both client and server sides. Added a toast notification for successful submission and error feedback.

## Running the Project Locally

```bash
# clone the repo
gh repo clone edwardspresume/honey_bank_studio_recreation

# change directory to the project
cd honey_bank_studio_recreation

# install dependencies
pnpm install

# start the dev server
pnpm dev
```
