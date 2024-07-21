
// Where the scripting will go
let scriptContent = "";
let sampleNum = 0;
let robotImport = true;

const whereRU = document.getElementById("whereru");
const adviceHolder = document.getElementById("advice");

const commandForm = document.getElementById("cmd-form");

function runScript () {
  // alert(scriptContent);
  const cleanedContent = DOMPurify.sanitize(scriptContent);
  let finalStuffing = destroyDiv(cleanedContent);

  // alert(finalStuffing);
  let scriptParsed = finalStuffing.split("[n");
  for (let i = 0; i < scriptParsed.length; i++) {
    let codeLine = scriptParsed[i].split(" ");
    parseLine(codeLine);
  }
}

function parseLine (line) {
  let firstCode = "";
  let moreSuppose = 0;
  
  switch (line[0]) {
    default:
      firstCode = "Syntax Error (this means that you miswrote a piece of your code.)";
      break;
    case "" :
      break;
    case "import" :
      firstCode = "lib";
      moreSuppose = 1;
      break;
    case "print" :
      firstCode = "output";
      moreSuppose = 1;
      break;
    case "up" :
      firstCode = "robomove";
      moreSuppose = 1;
      break;
    case "down" :
      firstCode = "down";
      moreSuppose = 1;
      break;
    case "right" :
      firstCode = "right";
      moreSuppose = 1;
      break;
    case "left" :
      firstCode = "left";
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
    case "":
      break;
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
          robotImport = true;
          break;
        default:
          terminalOutput("Error: no such library exists! Try importing 'robot' instead.");
          break;
      }
      break;
    case "robomove" :
      if (robotImport == false) {
        terminalOutput("Error: robot library was not imported.");
        return false;
      }
      if (isNaN(line[1])) {
        terminalOutput('Error: "' + line[1] + '" is not a valid number.');
      }

      else {
        yRobot(parseInt(line[1]));
      }
      break;

    case "down" :
      if (isNaN(line[1])) {
        terminalOutput('Error: "' + line[1] + '" is not a valid number.');
      }

      else {
        // alert("test");
        dyRobot(parseInt(line[1]));
      }
      break;

    case "right" :
      if (robotImport == false) {
        terminalOutput("Error: robot library was not imported.");
        return false;
      }
      if (isNaN(line[1])) {
        terminalOutput('Error: "' + line[1] + '" is not a valid number.');
      }

      else {
        xRobot(parseInt(line[1]));
      }
      break;

    case "left" :
      // alert("here");
      if (robotImport == false) {
        terminalOutput("Error: robot library was not imported.");
        return false;
      }
      if (isNaN(line[1])) {
        terminalOutput('Error: "' + line[1] + '" is not a valid number.');
      }

      else {
        // alert("r");
        dxRobot(parseInt(line[1]));
      }
      break;

    case "collect" :
      if (robotImport == false) {
        terminalOutput("Error: robot library was not imported.");
        return false;
      }
      sampleNum += 1;
      terminalOutput("Collected one sample.");
      break;
  }
}

function destroyDiv (line) {
  line = line.replace("<div>", "[n");
  line = line.replace("</div>", "[n");
  line = line.replace(/<[^>]*>/g, '[n');
  
  return line;
}

// Terminal
cmdReq = document.getElementById("cmd-req");
terminalOutputs = document.getElementById("terminal-outputs");

commandForm.onsubmit = function () {
  event.preventDefault();

  commandRaw = cmdReq.value;
  terminalOutput(commandRaw);
  cmdReq.value = "";

  shortCmd = commandRaw.toLowerCase();

  switch (shortCmd) {
    case "run" :
      let myStream = document.getElementById("code-editor").innerHTML;
      // while(document.getElementById("code-editor").attributes.length > 0) {
      //   document.getElementById("code-editor").removeAttribute(document.getElementById("code-editor").attributes[0].name);
      // }
      
      let thyStream = myStream.replace("<div>", "[n");
      let whyStream = thyStream.replace("</div>", "[n");
      let kaiStream = whyStream.replace("<br>", "[n");
      let shyStream = kaiStream.replace("<span>", "[n");

      let hiStream = shyStream.replace("<div>", "[n");
      let skyStream = hiStream.replace("</div>", "[n");
      let pieStream = skyStream.replace("<br>", "[n");
      let cryStream = pieStream.replace("<span>", "[n");
      
      scriptContent = cryStream;
      runScript();
      break;
    case "help" :
      terminalOutput("help - Get a list of commands");
      terminalOutput("run - Run your code");
      terminalOutput("reset - Reset robot");
      terminalOutput("guide - Access scripting guide");
      break;
    case "reset" :
      resetRobot();
      break;
    case "guide" :
      window.open("https://github.com/BurlingtonEmperor/Mars-Code-Camp/blob/main/README.md");
      break;
  }
}

function terminalOutput (output) {
  const clean = DOMPurify.sanitize(output);
  terminalOutputs.innerHTML += "<p>" + clean.replace(/<[^>]*>/g, '') + "</p>"
}

terminalOutput('Type "help" for a list of commands.');

// Random events

function decideEvent () {
  let randomNum = Math.floor(Math.random() * 5);

  switch (randomNum) {
    case 0:
      errorGenerator();
      break;
    case 1:
    case 2:
    case 3:
    case 4:
      break;
  }
}

function errorGenerator () {
  let randomNum = Math.floor(Math.random() * 5);
  let geeWhiz = "";

  switch (randomNum) {
    case 0:
      alert("Hardware Error: Inconsistent voltage occurs, and the robot moves much slower than before.");
      break;
    case 1:
      alert("Hardware Error: Your sensors are malfunctioning.");
      break;
    case 2:
      alert("Hardware Error: Your robot is having trouble connecting to the main server.");
      break;
    case 3:
      alert("Hardware Error: Your robot is moving in a crooked manner and it appears to be slower.");
      break;
    case 4:
      alert("Hardware Error: Your robot is having trouble moving, but there is no visible electrical issue.");
      break;
  }

  geeWhiz = prompt("You have 5 options for a part to fix: battery, wires, radio, motor, or wheels. Which part is it?");
  geeGives = geeWhiz.toLowerCase().replace(" ", "");

  switch (geeGives) {
    case "battery":
      if (randomNum == 0) {
        terminalOutput("Congrats! The hardware issue was resolved.");
      }

      else {
        terminalOutput("Wrong part was replaced. The robot will blame you for this.");
      }
      break;
    case "wires":
      if (randomNum == 1) {
        terminalOutput("Congrats! The hardware issue was resolved.");
      }

      else {
        terminalOutput("Wrong part was replaced. The robot will blame you for this.");
      }
      break;
    case "radio" :
      if (randomNum == 2) {
        terminalOutput("Congrats! The hardware issue was resolved.");
      }

      else {
        terminalOutput("Wrong part was replaced. The robot will blame you for this.");
      }
      break;
    case "motor" :
      if (randomNum == 3) {
        terminalOutput("Congrats! The hardware issue was resolved.");
      }

      else {
        terminalOutput("Wrong part was replaced. The robot will blame you for this.");
      }
      break;
    case "wheels" :
      if (randomNum == 4) {
        terminalOutput("Congrats! The hardware issue was resolved.");
      }

      else {
        terminalOutput("Wrong part was replaced. The robot will blame you for this.");
      }
      break;
  }
}

// buttons
$("#tm-button").click(function () {
  $("#code-editor").hide();
  $("#robot-run").hide();

  whereRU.innerText = "[Terminal]";

  $("#terminal").show();
});

$("#ce-button").click(function () {
  $("#terminal").hide();
  $("#robot-run").hide();

  whereRU.innerText = "[Code Editor]";

  $("#code-editor").show();
});

$("#run-button").click(function () {
  $("#terminal").hide();
  $("#code-editor").hide();

  whereRU.innerText = "[Robot]";

  $("#robot-run").show();
});

// Terminal Blink

const blink = document.getElementById("blink");
setInterval(function () {
  blink.style.visibility = "hidden";

  setTimeout(function () {
    blink.style.visibility = "visible";
  }, 200);
}, 400);

// Robot movements

const mars = document.getElementById("mars");

// mars.width = "80%";
// mars.height = "60%";

const ctx = mars.getContext("2d");

let tryX = 0;
let tryY = 0;

function Robot (x, y, size, color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
  this.draw = () => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  };
}

const marsRobot = new Robot(0, 0, 12, "green");
marsRobot.draw();

function resetRobot () {
  ctx.clearRect(0, 0, mars.width, mars.height);
  tryX = 0;
  tryY = 0;
  marsRobot.x = 0;
  marsRobot.y = 0;
  marsRobot.draw();
}

function yRobot (y) {
  ctx.clearRect(0, 0, mars.width, mars.height);
  marsRobot.y += -y;
  marsRobot.draw();
}

function dyRobot (y) {
  ctx.clearRect(0, 0, mars.width, mars.height);
  marsRobot.y += y;
  marsRobot.draw();
}

function xRobot (x) {
  ctx.clearRect(0, 0, mars.width, mars.height);
  marsRobot.x += x;
  marsRobot.draw();
}

function dxRobot (x) {
  ctx.clearRect(0, 0, mars.width, mars.height);
  // alert(marsRobot.x);
  marsRobot.x += -(2 * x);
  // alert(marsRobot.x);
  marsRobot.draw();
}