
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
    // case "var" :
    //   firstCode = "var";
    //   moreSuppose = 3;
    //   break;
    // case "if" :
    //   firstCode = "if";
    //   moreSuppose = 4;
    //   break;
  }

  if (moreSuppose == 0) {
    terminalOutput(firstCode);
  }

  switch (firstCode) {
    case "output" :
      let printedArr = line;
      printedArr[0] = "";

      let printedStatement = printedArr.join(" ");
      let finalPrint = printedStatement.slice(1);
      
      terminalOutput(finalPrint);
      break;
    case "lib" :
      switch (line[1]) {
        case "robot" :
          break;
        default:
          terminalOutput("Error: no such library exists! Try importing 'robot' instead.");
          break;
      }
      break;
    case "robomove" :
      switch (line[0]) {
        case "move" :
          break;
        case "turn" :
          break;
      }
      break;
  }
}

// Terminal

function terminalOutput (output) {
  
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