# wig-solver-chrome
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ngenolmnmkjiobmdbnikmphoaecdlcaa?label=Install&logo=googlechrome&logoColor=white&style=for-the-badge)](https://chrome.google.com/webstore/detail/wig-solver/ngenolmnmkjiobmdbnikmphoaecdlcaa)

A chrome extension that allows you to call [wig-solver](https://github.com/diracdeltafunk/wig-solver) from any [Whenisgood](https://whenisgood.net) results page.

When you press the solve button, the extension finds an optimal collection of time slots satisfying your criteria. You can have wig-solver:
* Find a minimal set of times which cover everyone
* Find a minimal set of times which cover everyone, except at most n people
* Find a set of at most n times which cover a maximal number of people

This make take a few seconds, especially since the API is running on a free server!

## Manual Installation

You can load the `extension` directly into chromium-based browsers as an unpacked extension.

![Screenshot of a Whenisgood results page, with two boxes highlighted in blue by wig solver!](ss2.png?raw=true)
