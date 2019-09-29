const { exec } = require('child_process');
const c = require('chalk');

const log = console.log.bind(console, c.cyan('linting: '));

const WITH_FIX = process.env.FIX;
let command = './node_modules/.bin/eslint src';
if (WITH_FIX) {
  command += ' --fix';
}

process.stdout.write(c.cyan('linting: ') + c.yellow('Searching for errors ... '));
exec(command, (err, stdout) => {
  if (err) {
    console.log(c.red('ERROR'));
    stdout.split('\n').forEach((line) => {
      log(c.blue(line));
    });
    log(
      c.yellow('Run ')
      + c.green('npm run fix')
      + c.yellow(' to auto-fix problem.')
    );
    log(
      c.yellow('Please double-check the changes after auto-fixing, then run ')
      + c.green('git add .\n')
    );
    process.exit(1);
  }

  console.log(c.green('PASSED'));
  process.exit(0);
});
