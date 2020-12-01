// Set the program to respond to standard input
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');
// Create a variable for the "beep" from the timer
const sound = () => process.stdout.write('\x07');
// Create a function for when a key is pressed
process.stdin.on('data', keyPress => {
  // Create an if statement for when the 'b' key is pressed
  if (keyPress === 'b') {
    sound();
  }
  // Create an if statement when 1-9 is pressed and delay timer according to number. Also have console print "Setting timer for x seconds..."
  if (keyPress >= 1 && keyPress <= 9) {
    process.stdout.write(`Setting timer for ${keyPress} seconds...\n`);
    setTimeout(() => {
      sound();
    }, keyPress * 1000);
  }
  // Create an if statment to say "Thanks for using me, ciao!" for when ctrl + c is entered to exit the function
  if (keyPress === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});