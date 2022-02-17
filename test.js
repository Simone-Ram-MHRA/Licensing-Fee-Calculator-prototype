var readline = require('readline');
const category_standard = 1000;
const category_extended = 2000;


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


rl.question("Has the active substance(s) of your product previously been authorised in the UK? ", function(answer) {
    console.log("Thank you for your valuable feedback:", answer);
    switch (answer) {
        case '1':
            question_two();
          break;
        case '2':
            showFeeStandard();
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        case '3':
            showFeeExtended();
            break;
            default:
          console.log(`Sorry, we are out of ${answer}.`);
      }      
    rl.close();
});


function question_two(answer){
    switch(answer){
        case '1':
            question_three();
        case '2':
            showFee();
    }
}


function question_three(){
    console.log(category_extended);
}

function showFeeStandard(){
    console.log(category_standard);
}

function showFeeExtended(){
    console.log(category_extended);
}
