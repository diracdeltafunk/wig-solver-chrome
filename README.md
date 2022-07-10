# wig-solver-chrome

A chrome extension that allows you to call [wig-solver](https://github.com/diracdeltafunk/wig-solver) from any [Whenisgood](https://whenisgood.net) results page.

When you press the solve button, the extension finds an optimal collection of time slots satisfying your criteria. You can have wig-solver:
* Find a minimal set of times which cover everyone
* Find a minimal set of times which cover everyone, except at most n people
* Find a set of at most n times which cover a maximal number of people

This make take a few seconds, especially since the API is running on a free server!

## Installation

You can load the extension directly into chrome. Simply clone the repository and load the folder "extension" as an unpacked extension. wig-solver will also be up on the chrome web store soon!

![Screenshot of a Whenisgood results page, with two boxes highlighted in blue by wig solver!](ss2.png?raw=true)
