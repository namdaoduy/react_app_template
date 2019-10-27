const { exec } = require('child_process');
const c = require('chalk');

const log = console.log.bind(console, c.cyan('linting: '));

const WITH_FIX = process.env.FIX;
const WITH_WARN = process.env.WARN;

let command = './node_modules/.bin/eslint src';
if (WITH_FIX) {
  command += ' --fix';
}

const logOutput = (out, summaryOnly = false) => {
  let haveProblem = false;
  out.split('\n').forEach((line) => {
    if (line.includes('✖')) {
      log(c.red(line));
      haveProblem = true;
    } else if (!summaryOnly) {
      log(c.blue(line));
    }
  });
  if (!haveProblem) {
    log(c.green('✔ 0 problems'));
  }
};

const checkProblem = (out) => out.includes('✖');

process.stdout.write(c.cyan('linting: ') + c.yellow('Searching for errors ... '));
exec(command, (err, stdout) => {
  const haveProblem = checkProblem(stdout);
  if (err || (WITH_WARN && haveProblem)) {
    console.log(c.red('ERROR'));
    logOutput(stdout);
    log(
      c.yellow('Run ')
      + c.green('npm run lint:fix')
      + c.yellow(' to auto-fix problems.')
    );
    log(
      c.yellow('Please double-check the changes after auto-fixing, then run ')
      + c.green('git add .\n')
    );
    process.exit(1);
  }

  console.log(c.green('PASSED'));
  logOutput(stdout, true);
  if (haveProblem && !WITH_WARN) {
    log(
      c.yellow('Run ')
      + c.green('npm run lint:warn')
      + c.yellow(' to check warnings if needed.')
    );
  }
  process.exit(0);
});
