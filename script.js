
// Where the scripting will go
let scriptContent = "";
let sampleNum = 0;

function runScript () {
  let scriptParsed = scriptContent.split("\n");
  for (let i = 0; i < scriptParsed.length; i++) {
    let codeLine = scriptParsed[i].split(" ");
  }
}

function parseLine (line) {
  let firstCode = "";
  let moreSuppose = 0;
  switch (line[0]) {
    default:
      firstCode = "Syntax Error (this means that you miswrote a piece of your code.)";
      break;
    case "import" :
      firstCode = "lib";
      moreSuppose = 1;
      break;
    case "print" :
      firstCode = "output";
      moreSuppose = 1;
      break;
    case "move" :
      firstCode = "robomove";
      moreSuppose = 1;
      break;
    case "turn" :
      firstCode = "robomove";
      moreSuppose = 1;
      break;
    case "collect" :
      moreSuppose = 0;
      firstCode = "Collected a sample!";
      sampleNum += 1;
      break;
    case "sample_num" :
      firstCode = sampleNum;
      moreSuppose = 0;
      break;
    case "var" :
      firstCode = "var";
      moreSuppose = 3;
      break;
    case "if" :
      firstCode = "if";
      moreSuppose = 4;
      break;
  }
}

// Random events

function decideEvent () {
  let randomNum = Math.floor(Math.random() * 5);

  switch (randomNum) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
  }
}