// get input from stdin and pipe it to stdout
process.stdin.resume();
process.stdin.setEncoding('utf8');

let input_stdin = '';
let stdin_counter = 0;
let stdin_prompt = '';

process.stdin.on('data', (char) => {
  input_stdin += char;
  stdin_counter++;

  if (stdin_counter >= 1) {
    if (input_stdin.slice(-1) == '\n') {
      input_stdin = input_stdin.slice(0, -1);
      stdin_prompt = '';
      stdin_counter = 0;
      process.stdout.write(stdin_prompt);
    }
  }
});

process.stdin.on('end', () => {
  process.stdout.write(input_stdin);
});

process.stdin.on('close', () => {
  process.stdout.write('\n');
  process.exit(0);
});

process.stdin.on('error', (err) => {
  process.exit(1);
});
