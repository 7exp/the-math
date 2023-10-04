<!-- omit in toc -->
# Contributing to The Math

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> -   Star the project
> -   Tweet about it
> -   Refer this project in your project's readme
> -   Mention the project at local meetups and tell your friends/colleagues

<!-- omit in toc -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Code of Conduct](#code-of-conduct)
- [I Want To Contribute](#i-want-to-contribute)
  - [Adding Equations](#adding-equations)
- [Naming Conventions](#naming-conventions)
- [Guidelines for Contributors](#guidelines-for-contributors)
  - [1. Avoid Third-Party Libraries](#1-avoid-third-party-libraries)
  - [2. Commit Code Only](#2-commit-code-only)
  - [3. Prioritize Readability](#3-prioritize-readability)
  - [4. The Markdown](#4-the-markdown)
  - [5. Testing](#5-testing)
  - [6. Code Style](#6-code-style)
  - [7. Reporting Issues](#7-reporting-issues)
  - [8. Pull Requests](#8-pull-requests)

## Code of Conduct

This project and everyone participating in it is governed by the
[The Math Code of Conduct](https://github.com/7exp/the-mathblob/master/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior
to <7exp@andka.me>.

## I Want To Contribute

> ### Legal Notice <!-- omit in toc -->
>
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Adding Equations

I am always looking for new equations to add to the collection. If you have an equation that you would like to see added. Before adding new equations, please check if the equation is already in the collection. If it is not, you can add it by following these steps:

<!-- omit in toc -->
#### 1. Open an issue

Before adding new equations, please check if the equation is already in the collection. If it is not, please search the issues to see if someone else has already requested it. 

If it has not been requested, you can open an issue with the equation you want to add. this will help other contributors know that you are working on the equation and will prevent duplicate work.

<!-- omit in toc -->
#### 2. Fork the repo

Fork the repo and clone it to your local machine. You can find more information on how to do this [here](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo). 

<!-- omit in toc -->
#### 3. Add the new equation in correct folder

After you have cloned the repo, you can add the equation in the correct folder. Following Areas of mathematics and branches, for example, if you want to add the quadratic formula you can add it in the algebra/quadratic-formula folder.

<!-- omit in toc -->
#### 4. Follow the [Guidelines](#guidelines-for-contributors) below

Please follow the [Guidelines](#guidelines-for-contributors) below when adding new equations. This will ensure that your contribution is consistent with the rest of the project and will make it easier for us maintainers and everyone to understand your contribution.

<!-- omit in toc -->
#### 5. Create a pull request

After you have added the equation, you can create a pull request. Please include a description of the equation and why you think it should be added. This will help us understand your contribution and will make it easier for us to review it.

Like:
```markdown
Title: Added Quadratic Formula Equation 
Description: 
Added Quadratic Formula Equation in algebra/quadratic-formula folder as requested in #1
```
> **Note**: If you are adding an equation that has already been requested in an issue, please include the issue number in the pull request description. This will help us keep track of the issues and pull requests.

<!-- omit in toc -->
#### 6. Wait for the pull request to be reviewed and merged

After you have created the pull request, it will be reviewed by the maintainers. If there are any issues with your pull request, we will let you know and work with you to resolve them. If there are no issues, your pull request will be merged as soon as possible.

But remember, pull request that include issue tag will be prioritized over other pull requests. this is to ensure that no one feels left out and that everyone's contributions are valued.

<!-- omit in toc -->
#### 7. Celebrate your contribution

Congratulations! 🎉 You have successfully contributed to this project. Thank you for your contribution. It is greatly appreciated by the community. 🙏


## Naming Conventions

All the files in this project should be named according to the following conventions:

-   All lowercase letters
-   Filenames should be the name of the equation
-   Use kebab-case for filenames (e.g. `quadratic-formula`)
-   Use the file extension of the language you are using (e.g. `.py` for Python, `.js` for JavaScript, `.cs` for C#)

## Guidelines for Contributors

Before making a contribution, please read the following guidelines. These guidelines are designed to ensure that all contributions are consistent and maintainable.

<!-- omit in toc -->

### 1. Avoid Third-Party Libraries

Please refrain from using third-party libraries when implementing mathematical equations in this repository. We want to ensure that the equations are implemented using only native language features and libraries to maintain simplicity and consistency.

<!-- omit in toc -->

### 2. Commit Code Only

When making contributions, commit only the code changes relevant to the mathematical equations. Do not commit unnecessary files, such as initialization modules or other unrelated content.

<!-- omit in toc -->

### 3. Prioritize Readability

While performance is important, prioritize code readability. Ensure that your code includes clear and concise comments to explain the logic behind the mathematical equations. This will help others understand and maintain the code more easily.
Example:

```python
import math

def euclidean_distance(x1, y1, x2, y2):
    """
    In Eucledian distance the distance between two points is the square root
    of the sum of the squares of the differences of their coordinates
    """
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

# Example usage
result = euclidean_distance(1, 2, 3, 4)

print(result) # 2.8284271247461903
```

<!-- omit in toc -->

### 4. The Markdown

Each folder should contain markdown file that explains the equation and how to use it. The markdown file should be named `README.md` and should be placed in the same folder as the equation. The markdown file should contain the following things:

-   **Name**: The name of the equation
-   **Description**: A short description of the equation
-   **Formula**: The formula of the equation can be written in LaTeX or as an image please see [this](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions)
-   **Usage**: Describe how the equation is used
-   **Example**: An example of how the equation is used in either code or math (or both)
-   **References**: A list of references used to implement the equation

> **Note**: You can use any format you want for the markdown file as long as it contains the above information and is easy to read. You can also add more information if you want to.

> **Improvement**: If you have any ideas on how to improve the markdown file, please open an issue or create a pull request. I would love to hear your ideas.

<!-- omit in toc -->

### 5. Testing

Before submitting a contribution, make sure to thoroughly test your code. Perform manual calculations and consider using tools like Wolfram Alpha to verify the correctness of the equations. Testing is crucial to maintain the accuracy of our mathematical implementations.

<!-- omit in toc -->

### 6. Code Style

Please follow the code style of the language you are using. If you are using a language that does not have a code style, please follow the [Google Style Guide](https://google.github.io/styleguide/).

<!-- omit in toc -->

### 7. Reporting Issues

If you encounter any issues, bugs, or have suggestions for improvements, please don't hesitate to report them. You can open an issue on our [GitHub repository](https://github.com/7exp/the-math/issues) and we will try to resolve it as soon as possible.

<!-- omit in toc -->

### 8. Pull Requests

The pull request process is designed to give you the opportunity to review your contribution and ensure that it meets the requirements for inclusion. Thank you for your contributions to this project! 🎉

> **Note**: Your pull request will be reviewed by the maintainers and merged as soon as possible. But if there are any issues with your pull request, we will let you know and work with you to resolve them.
>
> Pull request that include issue tag will be prioritized over other pull requests. this is to ensure that no one feels left out and that everyone's contributions are valued.
