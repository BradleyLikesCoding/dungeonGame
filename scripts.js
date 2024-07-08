c = document.getElementById("graphics");
ctx = c.getContext("2d");
var canClick = true;
var keys = [false, false, false, false];
var lockKeys = 0;
var x = 0;
var y = 0;
var eX = [];
var eY = [];
var eAxis = [];
let level = 0;
var levels = [];
var inGame = false;
var mode = 1;
var homeScreen = true;
var homePart = 1;
var win = true;
var recordSet = false;
var newRecord = false;
var touching = false;
var touchX = 0;
var touchY = 0;
var animations = [false, false];
var animationState = 0;
if (localStorage.getItem("personalRecord1") == null) {
  var personalRecord1 = "None";
} else {
  var personalRecord1 = Number(localStorage.getItem("personalRecord1"));
}
if (localStorage.getItem("personalRecord2") == null) {
  var personalRecord2 = "None";
} else {
  var personalRecord2 = Number(localStorage.getItem("personalRecord2"));
}

var key = new Image();
key.src = 'images/key.png';

var resetBTN = new Image();
resetBTN.src = 'images/restart.png';

var homeBTN = new Image();
homeBTN.src = 'images/home.png';

var v1 = new Image();
v1.src = 'images/v-1.png';

var v2 = new Image();
v2.src = 'images/v-2.png';

var clickSound = new Audio('sounds/click.mp3');

function reset() {
  levels = [
    [
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBEBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBWWWWWW",
      "BKBBBBBBBBBBBBWBBBBB",
      "BBBBBBBBBBBBBBWBBBBB",
      "BBBBBBBBBBBBBBDDBBBG",
      "BBBBBBBBBBBBBBWBBBBB",
      "BBBBBBBBBBBBBBWWWWWW",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBKBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
    ],

    [
      "BBBBBBBBBBBBWBBDBBBB",
      "BBBBBBBBBBBBWBBWBBBB",
      "BBBBBBBBBBBBWBBWBBBB",
      "BBBBBBBBBBBBDBBWBBBG",
      "BBBBBBBBBBBBWWWWWWWW",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBKBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBWWWWWWWWWWWW",
      "BBBBBBBBWBKBBBBBBBWE",
      "BBBBBBBBWBBBBBBBBBWB",
      "EBBBBBBBBBBBBBBBBBBB",
    ],
    [
      "BBBBBBBBBBBBBBBBBBBE",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBEBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBE",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBKBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBE",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBE",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBE",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBE",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "WWBBBBBBBBBBBBBBBBBE",
      "GDBBBBBBBBBBBBBBBBBB",

    ],
    [
      "BBBBBBBBBBBBBBBBBBBE",
      "BBBBBBBBWWWWWWWWWWWW",
      "BBBBBBBBBBBBBBBBBBBK",
      "BBBBBBBBWWWWWWWWWWWB",
      "BBBBBBBBBBBBBBBBWBEB",
      "BBBBBBBBBBBBBBBBWBBB",
      "BBBBBBBBBBBBBBBBWBBB",
      "BBBBBBBBBBBBBBBBWWBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBWWWWWWWWWDWWWW",
      "BBBBBBWEWBBBBBBBBBBB",
      "BBBBBBWBWBBBBBBBBBKB",
      "BBBBBBWBBBBBBBBBBBBB",
      "BBBBBBWWWWWDWWWWWWWW",
      "BBBBBBWBBBBDBBBBBBBB",
      "BBBBBBWBBBBBBBBBBBBB",
      "BBBBBBWBBBBBBBBBBBBB",
      "BBBBBBWBBBBBBBBBBBWD",
      "KBBBBKWBBBBBBBBBBBWG",
    ],
    [
      "BBBBBBBBBBBBBEBBBBDK",
      "BBBBBBBBEBBBBBBBBBWK",
      "BBBBBBBBBBBBBBBBBBWK",
      "BBBBBBBBBWDWBBBBBBWD",
      "BBBBBBBBBWDWBBBBBBBB",
      "BBBBEBBBBWDWBBBBBBBB",
      "BBBBBBBBBWDWBBBBBBBB",
      "BBBBBBBBBWDWBBBBBBBB",
      "BBBBBBBBBWGWBBBBBBBB",
      "KBBBBBBBBWWWBBBBBBBK",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBEBBBBBBBEBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBEBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBK",
      "BBBBBBBBWWWWWBBBBBBB",
      "BBBBEBBBDKKKDBBBBBBB",

    ],
    [
      "BBBBBBBBBBEBBBBBBBBK",
      "BBBBBBBBBBBBWBWBEBBB",
      "BBBBBBBBBBEBWKWBBBBE",
      "BBBBBBBBBBBBWEWBBBBB",
      "BBBBBBBBBBEBBBBBBEBB",
      "BBBBBBBBBBBBBBEBBBBB",
      "BBBBBBEBBBEBBBBBBBBB",
      "BBBBBBBBBBBBWWWWWWWW",
      "BBKBBBBBBBEBDDDDDDDG",
      "BBBBBBBBBBBBWWWWWWWW",
      "BBBBWKWBBBBBBBBBBBBB",
      "BBBBWBWBBBEBBBBEBKBB",
      "BBBBWKWBBBBBBBBBBBBB",
      "BBBBBBBBBBBEBBBBEBBB",
      "BBBBKBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBK",
    ],
    [
      "BBBBBBBWBBBBBBBBBBBB",
      "BBBBBBBDBWWWWWWWWWWB",
      "BBBBBBBWWWBBWBBBBBBB",
      "BBBBBBBWBBBBWBBBBBBB",
      "BBBBBBBWBBBBBBBBBBBB",
      "BBBBBBBWBBBBBWDWWWWW",
      "BBBBBBBWBBBBBWBBBBDK",
      "BEBBBBBWBBBBBWBBBBWK",
      "BBBBBBBWBBEBBWBBBBWK",
      "BBBBBBEWBBBBBWBBBBWD",
      "BBBBBBBWBKBBBWBBBBBB",
      "BBBBBBBWBBBBBWKBBBBB",
      "BBBBBBBWWWWWWWWWWDWW",
      "BEBBBBBWBBEBBBBBWDBB",
      "BBBBBBBWBEBBBBBBWBBB",
      "BBBBBBBWEBBBBBBBWBBB",
      "BBBBBBBWBEBBBBBBWBBB",
      "BBBBBBBWBBEBBBBBBBBB",
      "BBBBBBBWBBBBBBBBBBBB",
      "KBBBBBBWBBBBBBBBBBBG",
    ],
    [
      "BBBBWGBBBBBBBBBBBBBB",
      "BBBBWBBBBBBEBBBBBBBB",
      "BBBBWBBBBBBBBBBBBBBB",
      "BBBBWEBEBBBEBBEBBBBB",
      "BBBBWBBBBBBBBBBBBBBB",
      "BBBBWWWWWWBBBWWWWWWW",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "WWWWWWWWWWWWWWBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "WWWBBWWWWWWWWWWWWWWW",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBEBBBBBBBBBBBBBBEBB",
      "BBBBBBBBBBEBBBBBBBBB",
      "BBBBBEBBBBBBBBBBBEBB",
      "BBBEBBBBBBEBBBBBBBBB",
      "BGBBBBBBBBBBBBEBBBBB",
      "BBBBBBBEBBBBBBBBBBBB",
    ],
    [
      "BBBBBBBBBBBBBBBEBBBB",
      "BBBBBBBBBBEBBBBBBBBB",
      "BBBBWWWWWWWWWWBBBBBB",
      "BBBBWBBBBBBBBBBBBBBB",
      "BBBBWBBBBBEBBBBBBBBB",
      "BBBBWWWWWWBBBBBBBBBB",
      "BBBBWBBBBBBBBBBBBBBB",
      "BBBBWBBBBBEBBBBBBBBB",
      "BBBBWWWWWWWWWWBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBWWWWWWWWWWWWBBBB",
      "BBBBBBBBBBEBBBBWBBBB",
      "BBBBBBBBBBBBBWWBBBBB",
      "BBBEEBBBBBBWWWBBBBBB",
      "BBBBBBBBBWWWBBBBBBBB",
      "BBBBBBBWWWBBBBBBBBBB",
      "BEBBBWWWBBBBBBBBBBBB",
      "BBBBWWWBBBBBBBBBBBBB",
      "BBBBWBBBBGBBBBBBBBBB",
      "BBBBWWWWWWWWWWWBBBBB",
    ],
    [
      "BBBBBBBEBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBKBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBKBBBBBBBBBKBBBBBBB",
      "DBBBBBBBBBBBBBBBBBBB",
      "DWBBBBBBBBBBBBBBKBBB",
      "DWBBBBBBBBBBKBEBBBBB",
      "DWBBBBBBKBKBBBBBBBBB",
      "DWBEBBBBBBBBBBBEBBBB",
      "DWKBBBBBBBBBBBBBKBBB",
      "DWBEBBBBBBBBBBBEBBBB",
      "DWBKBBBBBBBBKBBBBBBB",
      "DWBBBBBBBBBBBBBBBBBB",
      "DWBBBEBBBBBEBBBBBBBB",
      "DWBBBBBBBBKBBBEBBBBB",
      "DWBKEBBBBBBBBBBBBBBB",
      "DWBBBBBBBEBBKBBBBBBB",
      "DWWWWWWWWWWWWWWWWWBB",
      "GDDDDDDDDDDDDDDDDDDB",
    ],
    [
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBWBBBBWBBBBBBB",
      "BBBBBBBWBBBBWBBBBBBB",
      "BBBBBBBWBBBBWBBBBBBB",
      "BBBBBBBWBBBBWBBBBBBB",
      "BBBBBBBWBBBBWBBBBBBB",
      "BBBBBBBWWWWWWBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBWBBBBBWBWBWWBBBWBB",
      "BBWBBBBBWBBBWBWBBWBB",
      "BBWBBWBBWBWBWBWBBWBB",
      "BBWBBWBBWBWBWBBWBWBB",
      "BBWBBWBBWBWBWBBWBWBB",
      "BBWWWWWWWBWBWBBBWWBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
      "BBBBBBBBBBBBBBBBBBBB",
    ]
  ];
  x = 0;
  y = 0;
  Efind();
  lockKeys = 0;
}

reset();

function draw(excuse) {
  if (inGame || excuse) {
    setBackground("#453636");
    ctx.clearRect(0, 0, 500, 600);
    for (var loopX = 0; loopX < 20; loopX++) {
      for (var loopY = 0; loopY < 20; loopY++) {
        var fill = true;
        switch (levels[level][loopY][loopX]) {
          case ("B"):
            ctx.fillStyle = "#665050";
            break;
          case ("W"):
            fill = false;
            var img = new Image();
            img.src = 'images/brick.png';
            ctx.drawImage(img, loopX * 25, loopY * 25);
            break;
          case ("K"):
            fill = false;
            ctx.fillStyle = "#ffff94";
            ctx.fillRect(loopX * 25, loopY * 25, 25, 25);
            ctx.drawImage(key, loopX * 25, loopY * 25);
            break;
          case ("D"):
            fill = false;
            ctx.fillStyle = "#5e0600";
            ctx.fillRect(loopX * 25, loopY * 25, 25, 25);
            ctx.fillStyle = "#000000";
            ctx.fillRect((loopX * 25) + 15, (loopY * 25) + 15, 5, 5);
            ctx.fillStyle = "#c9ffff";
            ctx.fillRect((loopX * 25) + 5, (loopY * 25) + 3, 15, 8);
            break;
          case ("G"):
            ctx.fillStyle = "#4dff61";
        }
        if (fill) {
          ctx.fillRect(loopX * 25, loopY * 25, 25, 25);
        }
      }
    }
    for (var i = 0; i < eX.length; i++) {
      var xxx = eX[i];
      var yyy = eY[i];
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(xxx * 25, yyy * 25, 25, 25);
    }
    ctx.fillStyle = "#59e6ff";
    if (level == levels.length - 1) {} else {
      ctx.fillRect(x * 25, y * 25, 25, 25);
    }
    draw2();
  }
}
setInterval(drawIfInGame, 1);

function drawIfInGame() {
	draw(false);
}

function draw2() {
  ctx.fillStyle = "#4500a6";
  ctx.fillRect(0, 500, 600, 100);
  ctx.font = "70px Comic Sans MS";
  if (level + 1 == levels.length) {
    eX = [];
    eY = [];
    eAxis = [];
    win = false;
    var WinTime = (Math.round(timer * 10) / 10);
    if (!recordSet) {
      newRecord = false;
      if (mode == 1) {
        if (WinTime < personalRecord1 || personalRecord1 == null || personalRecord1 == "None") {
          newRecord = true;
        }
      } else {
        if (WinTime < personalRecord2 || personalRecord2 == null || personalRecord2 == "None") {
          newRecord = true;
        }
      }
      if (newRecord) {
        localStorage.setItem("personalRecord" + mode, JSON.stringify(WinTime));
        if (mode == 1) {
          personalRecord1 = WinTime;
        } else {
          personalRecord2 = WinTime;
        }
      }
      recordSet = true;
    }

    if (newRecord) {
      ctx.font = "50px Arial";
      ctx.fillStyle = "blue";
      ctx.textAlign = "center";
      ctx.fillText("NEW RECORD!!!", (c.width / 2) - 50, 40);
    }
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.font = "70px Comic Sans MS";
    ctx.strokeText(WinTime + " Secs", 10, 570);
    if (mode == 1) {
      ctx.strokeText("Thinky Mode", 10, 470);
    } else {
      ctx.strokeText("Speedy Mode", 10, 470);
    }
  } else {
    if (lockKeys == 1) {
      ctx.strokeText(lockKeys + " Key", 10, 570);
    } else {
      ctx.strokeText(lockKeys + " Keys", 10, 570);
    }
  }
  if (level == levels.length - 1) {
    ctx.drawImage(homeBTN, 400, 0);
  } else {
    ctx.drawImage(resetBTN, 300, 500);
    ctx.drawImage(homeBTN, 400, 500);
  }

}

function touch(x2, y2) {
  var rVal = false;
  if (x2 < 0 || x2 > 19 || y2 < 0 || y2 > 19) {
    rVal = true;
  } else {
    if (levels[level][y2][x2] == "W") {
      rVal = true;
    } else if (levels[level][y2][x2] == "K") {
      lockKeys++;
      levels[level][y2] = strChar(levels[level][y2], x2, "B");
    } else if (levels[level][y2][x2] == "D") {
      if (lockKeys > 0) {
        lockKeys--;
        levels[level][y2] = strChar(levels[level][y2], x2, "B");
      } else {
        rVal = true;
      }
    } else if (levels[level][y2][x2] == "G") {
      x = 0;
      y = 0;
      level++;
      reset();
    }
  }
  return (rVal);
}

function Etouch(x2, y2) {
  if (x2 < 0 || x2 > 19 || y2 < 0 || y2 > 19 || levels[level][y2][x2] == "W" || levels[level][y2][x2] == "D") {
    return (true);
  } else {
    return (false);
  }
}
document.addEventListener("keydown", function(event) {
  if (inGame) {
    if (event.keyCode == 87 || event.keyCode == 38) {
      keys[0] = true;
    }
    if (event.keyCode == 65 || event.keyCode == 37) {
      keys[1] = true;
    }
    if (event.keyCode == 83 || event.keyCode == 40) {
      keys[2] = true;
    }
    if (event.keyCode == 68 || event.keyCode == 39) {
      keys[3] = true;
    }
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 87 || event.keyCode == 38) {
    keys[0] = false;
  }
  if (event.keyCode == 65 || event.keyCode == 37) {
    keys[1] = false;
  }
  if (event.keyCode == 83 || event.keyCode == 40) {
    keys[2] = false;
  }
  if (event.keyCode == 68 || event.keyCode == 39) {
    keys[3] = false;
  }
});

function movePlayer() {
  if (inGame) {
    var moves = [0, 0];
    if (keys[0] == true) {
      y--;
      if (touch(x, y)) {
        y++;
      } else {
        moves[0]++;
      }
    }
    if (keys[2] == true) {
      y++;
      if (touch(x, y)) {
        y--;
      } else {
        moves[0]--;
      }
    }
    if (keys[1] == true) {
      x--;
      if (touch(x, y)) {
        x++;
      } else {
        moves[1]--;
      }
    }
    if (keys[3] == true) {
      x++;
      if (touch(x, y)) {
        x--;
      } else {
        moves[1]++;
      }
    }
    if (mode == 1) {
      for (var i = 0; i < (Math.abs(moves[0]) + Math.abs(moves[1])); i++) {
        Emove();
      }
    }
    if (moves[0] == 0) {
      if (keys[0] == true) {
        y--;
        if (touch(x, y)) {
          y++;
        } else {
          moves[0]++;
        }
      }
      if (keys[2] == true) {
        y++;
        if (touch(x, y)) {
          y--;
        } else {
          moves[0]--;
        }
      }
    }
    if (moves[1] == 0) {
      if (keys[1] == true) {
        x--;
        if (touch(x, y)) {
          x++;
        } else {
          moves[1]--;
        }
      }
      if (keys[3] == true) {
        x++;
        if (touch(x, y)) {
          x--;
        } else {
          moves[1]++;
        }
      }
    }
  }
}

function strChar(str, charNum, char) {
  var rVal = "";
  for (var i = 0; i < str.length; i++) {
    if (i == charNum) {
      rVal = rVal + char;
    } else {
      rVal = rVal + str[i];
    }
  }
  return (rVal);
}
setInterval(movePlayer, 150)

function Emove() {
  if (inGame) {
    var axis;
    for (var i = 0; i < eX.length; i++) {
      if (x == eX[i] && y == eY[i]) {
        reset();
        return (0);
      }
      eAxis[i] = !eAxis[i];
      if (eX[i] == x || eY[i] == y) {
        if (eX[i] == x) {
          axis = "y";
        } else {
          axis = "x";
        }
      } else {
        if (eAxis[i]) {
          axis = "y";
        } else {
          axis = "x";
        }
      }
      if (axis == "x") {
        if (eX[i] < x) {
          if (!Etouch(eX[i] + 1, eY[i])) {
            eX[i]++;
          } else {
            REaxis(i, "y");
          }
        } else {
          if (!Etouch(eX[i] - 1, eY[i])) {
            eX[i]--;
          } else {
            REaxis(i, "y");
          }
        }
      } else {
        if (eY[i] < y) {
          if (!Etouch(eX[i], eY[i] + 1)) {
            eY[i]++;
          } else {
            REaxis(i, "x");
          }
        } else {
          if (!Etouch(eX[i], eY[i] - 1)) {
            eY[i]--;
          } else {
            REaxis(i, "x");
          }
        }
      }
      if (x == eX[i] && y == eY[i]) {
        reset();
      }
    }
  }
}

function REaxis(i, axis) {
  if (axis == "x") {
    if (eX[i] < x) {
      if (!Etouch(eX[i] + 1, eY[i])) {
        eX[i]++;
      } else {}
    } else {
      if (!Etouch(eX[i] - 1, eY[i])) {
        eX[i]--;
      } else {}
    }
  } else {
    if (eY[i] < y) {
      if (!Etouch(eX[i], eY[i] + 1)) {
        eY[i]++;
      } else {}
    } else {
      if (!Etouch(eX[i], eY[i] - 1)) {
        eY[i]--;
      } else {}
    }
  }
}

function Efind() {
  eX = [];
  eY = [];
  eAxis = [];
  for (var x2 = 0; x2 < 20; x2++) {
    for (var y2 = 0; y2 < 20; y2++) {
      if (levels[level][y2][x2] == "E") {
        eX.push(x2);
        eY.push(y2);
        eAxis.push(true);
        levels[level][y2] = strChar(levels[level][y2], x2, "B");
      }
    }
  }
}
var mouseX = 0;
var mouseY = 0;
c.addEventListener("mousemove", function(e) {
  var cRect = c.getBoundingClientRect();
  mouseX = Math.round(e.clientX - cRect.left);
  mouseY = Math.round(e.clientY - cRect.top);
});

function enemy() {
  if (inGame && mode == 2) {
    Emove();
  }
}
setInterval(enemy, 175);

function DrawS() {
  if (homeScreen && !animations[0] && !animations[1]) {
    if (homePart == 1) {
      ctx.fillStyle = "black";
      ctx.textAlign = "left";
      ctx.clearRect(0, 0, 500, 600);
      ctx.fillStyle = "#730000";
      setBackground("#730000");
      ctx.fillRect(0, 0, 500, 600);
      ctx.fillStyle = "#95ff00";
      ctx.fillRect(125, 100, 225, 100);
      ctx.fillRect(125, 250, 225, 100);
      ctx.font = "45px Comic Sans MS";
      ctx.strokeText("Thinky", 150, 145);
        ctx.strokeText("Mode", 170, 185);
      ctx.font = "45px Comic Sans MS";
      ctx.strokeText("Speedy", 145, 290);
      ctx.strokeText("Mode", 175, 340);
      ctx.font = "47px arial";
      ctx.strokeText("DUNGEON GAME", 3, 50);
      ctx.font = "25px comic sans MS";
      if (personalRecord1 == "None") {
        ctx.strokeText("Thinky Mode Record: " + personalRecord1, 10, 400);
      } else {
        ctx.strokeText("Thinky Mode Record: " + personalRecord1 + " Secs", 10, 400);
      }
      if (personalRecord2 == "None") {
        ctx.strokeText("Speedy Mode Record: " + personalRecord2, 10, 450);
      } else {
        ctx.strokeText("Speedy Mode Record: " + personalRecord2 + " Secs", 10, 450);
      }
    } else {
      ctx.clearRect(0, 0, 500, 600);
      ctx.fillStyle = "#730000";
      setBackground("#730000");
      ctx.fillRect(0, 0, 500, 600);
      if (mode == 1) {
        ctx.drawImage(v1, 76.5, 0);
      } else {
        ctx.drawImage(v2, 76.5, 0);
      }
      ctx.fillStyle = "#95ff00";
      ctx.fillRect(125, 450, 225, 100);
      ctx.font = "60px arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "left";
      ctx.strokeText("PLAY", 160, 525);
      ctx.drawImage(homeBTN, 400, 0);
    }
  }
}


function drawIntro(y, erase) {
      if(erase) {
      ctx.clearRect(0, 0, 500, 600);
      ctx.fillStyle = "#730000";
      setBackground("#730000");
      ctx.fillRect(0, 0, 500, 600);
      }
      if (mode == 1) {
        ctx.drawImage(v1, 76.5, 0 - y);
      } else {
        ctx.drawImage(v2, 76.5, 0 - y);
      }
      ctx.fillStyle = "#95ff00";
      ctx.fillRect(125, 450 - y, 225, 100);
      ctx.font = "60px arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "left";
      ctx.strokeText("PLAY", 160, 525 - y);
      ctx.drawImage(homeBTN, 400, 0 - y);
}

setInterval(DrawS, 1);
c.onclick = function() {
  if(canClick) {
  if (homeScreen) {
    if (homePart == 1) {
      if (mouseX < 376 && mouseX > 124) {
        if (mouseY > 99 & mouseY < 201) {
          mode = 1;
          homePart = 2;
          animationState = 0;
          canClick = false;
          animations[0] = true;
          clickSound.play()
        } else if (mouseY > 249 & mouseY < 351) {
          mode = 2;
          homePart = 2;
          animationState = 0;
          canClick = false;
          animations[0] = true;
          clickSound.play()
        }
      }
    } else {
      if (mouseY > 449 && mouseY < 551 && mouseX < 376 && mouseX > 124) {
          canClick = false;
          animations[1] = true;
          clickSound.play()
      }
      if (mouseX > 400 && mouseY > 20 && mouseX < 480 && mouseY < 100) {
        homePart = 1;
        inGame = false;
        homeScreen = true;
        recordSet = false;
        level = 0;
        win = false;
        reset();
        clickSound.play()
      }
    }
  }
  if (inGame) {
    if (level == levels.length - 1) {
      if (mouseX > 400 && mouseY < 100) {
        homePart = 1;
        inGame = false;
        homeScreen = true;
        recordSet = false;
        level = 0;
        reset();
        joyActive = false;
        clickSound.play()
      }
    } else {
      if (mouseX > 300 && mouseY > 500 && mouseX < 400) {
        reset();
        clickSound.play()
      }
      if (mouseX > 400 && mouseY > 500) {
        homePart = 1;
        level = 0;
        inGame = false;
        homeScreen = true;
        recordSet = false;
        reset();
        joyActive = false;
        clickSound.play()
      }
    }
  }
}
}

let timer = 0;

function time() {
  if (win) {
    timer += 0.1;
  }
}
setInterval(time, 100);

function setBackground(color) {
  document.body.style = "background-color: " + color + ";"
}
c.addEventListener("touchstart", function(e) {
  touching = true;
  mouseX = Math.round(e.touches[0].pageX - x * 25);
  mouseY = Math.round(e.touches[0].pageY - y * 25);
});
c.addEventListener("touchend", function() {
  touching = false;
  keys = [false, false, false, false];
});
c.addEventListener("touchcancel", function() {
  touching = false;
  keys = [false, false, false, false];
});
c.addEventListener('touchmove', function(e) {
  mouseX = Math.round(e.touches[0].pageX - x * 25) - ((screen.width - 500) / 2);
  mouseY = Math.round(e.touches[0].pageY - y * 25);
});

function setTouchKeys() {
  if (touching) {
    if (mouseX > 12.5) {
      touchX = 1;
    } else if (mouseX < -12.5) {
      touchX = -1;
    } else {
      touchX = 0;
    }
    if (mouseY > 12.5) {
      touchY = -1;
    } else if (mouseY < -12.5) {
      touchY = 1;
    } else {
      touchY = 0;
    }
    if (touchY == 1) {
      keys[0] = true;
      keys[2] = false
    } else if (touchY == -1) {
      keys[2] = true;
      keys[0] = false;
    } else {
      keys[0] = false;
      keys[2] = false;
    }
    if (touchX == 1) {
      keys[3] = true;
      keys[1] = false;
    } else if (touchX == -1) {
      keys[1] = true;
      keys[3] = false;
    } else {
      keys[1] = false;
      keys[3] = false;
    }
  }
}
setInterval(setTouchKeys, 1);

function animate() {
  if(animations[0]) {
    animationState += 20;
    if(animationState <= 600) {
      drawIntro(600 - animationState, true);
    } else {
      animations[0] = false;
      canClick = true;
    }
  } else if(animations[1]) {
    animationState -= 20;
    if(animationState >= 0) {
      draw(true);
      drawIntro(600 - animationState, false);
    } else {
      animations[1] = false;
      canClick = true;
      homePart = 1;
      homeScreen = false;
      inGame = true;
      timer = 0;
      win = true;
    }
  }
}
setInterval(animate, 8);
