# Contributing

Welcome to Pantelwar's JS Utils - your go-to package for versatile utility functions! We greatly appreciate and welcome contributions from the community, as they play a pivotal role in enhancing this project. To ensure a positive and inclusive environment for all contributors, we adhere to the [Contributor Covenant Code of Conduct](http://contributor-covenant.org).

If you're reading this, you're awesome! Thank you for being part of the JS Utils community. We encourage all participants to review the full [Code of Conduct] to understand the expected behavior and what actions will or will not be tolerated. Together, let's make JS Utils even better!

## Reporting and Inquiries

Before opening an issue, please check our [issue tracker] to ensure it hasn't been reported already.

New to contributing? Learn with this free video series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

To get started easily, explore our labeled ["good first issues"] for tasks with clear scopes and solutions. These labels indicate that there's already a working solution or a well-defined direction for the issue.

Feel free to choose any issue, but please check the comments to avoid duplication. If you start working on an issue, leave a comment to inform others. If an issue isn't progressing, it's okay to take it over after a week, but still, notify with a comment. If an issue remains inactive for 7 to 14 days, assume no one is working on it. Happy contributing!

## New Feature Requests

Prior to embarking on any new feature or refactoring work, we kindly request that you first open an issue to propose your idea. This preliminary step ensures that you don't invest time and effort into a pull request that might not align with our project's goals or vision. Your proposal will help us evaluate the feasibility and alignment of your contribution with the project's objectives. Thank you for considering this important step in our collaborative process.

## Coding style

Please make sure that you are following the same code style as the rest of the project before committing or submitting a Pull Request. That includes the following things:

- files and folders names must be using `kebab-case` syntax
- variable names must be using `camelCase` syntax
- each folder must export its contained files using an `index.ts` file
- every folder must be exported through the root `index.ts` file

It is recommended to use VS Code as the code editor and using certain extensions that will help give real time feedback on code styling and linting:

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - for real time linting
2. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - for real time formatting

In addition to that, there are some useful commands that helps with formatting and linting the code

- `yarn format` formats the whole code using prettier.
- `yarn lint` lints the whole code using the eslint configuration.

**Note**: both of these commands will run automatically before you commit the code

When a Pull Request is submitted, we will run all the continuous integration steps to make sure that the code is clean, but we hope that your code passes that already.

## Git workflow / Submitting Changes

### 0. Raise an issue

Before starting anything, make sure to open a new issue in the [Issue tracker] first, and discuss with the maintainers to make sure it is feasible. Another reason to create an issue is to make sure that no one else is working on the same thing to prevent duplicate efforts.

### 1. Fork the repo

To begin, please fork [this repository] (learn more about [forking](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).

### 2. Clone the repo

Now, locally run these commands to clone the repository

```bash
git clone https://github.com/<your username>/js-utils.git
cd js-utils
```

Make sure to add an upstream remote

```bash
git remote add upstream https://github.com/pantelwar/js-utils.git
```

### 3. Setup the repo

If you do not have yarn, you can install it using the following command

```bash
npm install -g yarn
```

Install the dependencies with yarn (npm isn't supported):

```bash
yarn
```

### 4. Create a topic branch

Create a new feature branch based off the `main` branch.

```bash
git checkout -b my-topic-branch
```

Now you can continue working on this branch, until you are done with your tasks.

### 5. Checks before pushing

Before committing or pushing, always synchronize your local topic branch with the upstream `main` branch, to make sure that you have the latest changes:

```bash
git rebase upstream/main
```

or

```bash
git merge upstream/main
```

Please do write or modify the tests before pushing, everything should be properly tested and meet the code coverage threshold, you can run tests for all packages with:

```
yarn test
```

To continuously watch and run tests, run the following:

```
yarn test --watch
```

You can build the package with the following command:

```
yarn build
```

Finally, add the files using `git add` and move on to committing, we are using the [commitlint's conventional configuration](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#rules) for linting the commit messages and we are running `eslint` and `prettier` before every commit using `husky`, so that your code is automatically linted and formatted at every commit.

```bash
git commit -m "fix(test): #23 this is a test commit"
```

### 6. Push the repo

Finally, you are ready to push the code to your fork

```bash
git push -u origin HEAD
```

### 7. Create the pull request

Go to [this repository] and make a Pull Request against the `main` branch.

Try to make sure that your Pull Request is as small and precise as possible and doesn't include any unneccessary changes or resolves multiple issues at once, it's always better to have multiple small Pull Requests than a single big one.

Our maintainers will be monitoring for Pull Requests and will review the changes, and either merge it, request changes, or close it with an appropriate comment.

Thank you for contributing!

## License

By contributing your code to the [@pantelwar/js-utils](https://github.com/Pantelwar/js-utils) GitHub repository, you agree to license your contribution under the [MIT license](/LICENSE).

[this repository]: https://github.com/Pantelwar/js-utils
[code of conduct]: https://github.com/Pantelwar/js-utils/blob/main/CODE_OF_CONDUCT.md
[issue tracker]: https://github.com/Pantelwar/js-utils/issues
["good first issues"]: https://github.com/Pantelwar/js-utils/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22
