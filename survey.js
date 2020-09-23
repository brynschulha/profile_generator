const { floralwhite } = require('color-name');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let paragraph = [];
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  paragraph.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    paragraph.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      paragraph.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        paragraph.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          paragraph.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            paragraph.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              paragraph.push(answer);
              rl.close();
              let paragraphOutput = (paragraph[0] + " loves listening to " + paragraph[2] + " while " + paragraph[1] + ", devouring " + paragraph[4] + " for " + paragraph[3] + ", prefers " + paragraph[5] + " over any other sport, and is amazing at " + paragraph[6] + ".");
              console.log(paragraphOutput);
              return paragraphOutput;
            })
          })
        })
      })
    })
  })
});