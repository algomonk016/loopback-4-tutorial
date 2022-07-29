# Developer's Guide

We use Visual Studio Code for developing LoopBack and recommend the same to our
users.

### Other editors/IDEs

1. Open a new terminal window/tab and start the continuous build process via
`npm run build:watch`. It will run TypeScript compiler in watch mode,
  recompiling files as you change them. Any compilation errors will be printed
  to the terminal.

  2. In your main terminal window/tab, run `npm run test:dev` to re-run the test
  suite and lint the code for both programming and style errors. You should run
  this command manually whenever you have new changes to test. Test failures
  and linter errors will be printed to the terminal.
