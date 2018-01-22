Blockly.JavaScript['page_settings'] = function(block) {
  var statements_page_header = Blockly.JavaScript.statementToCode(block, 'page_header');
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background = Blockly.JavaScript.valueToCode(block, 'page_background', Blockly.JavaScript.ORDER_ATOMIC);
  var value_paragraph = Blockly.JavaScript.valueToCode(block, 'page_paragraph', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.body.style.color = "' + value_color + '";\n';
  code +=    'document.body.style.backgroundColor = "' + value_background + '";\n';
  code +=    'document.getElementById("description").innerHTML = "' + value_paragraph + '";\n';
  code +=    statements_page_header;
  return code;
};

Blockly.JavaScript['button_pressed'] = function(block) {
  var statements_page_header = Blockly.JavaScript.statementToCode(block, 'page_header');
  var value_color = block.getFieldValue('port');
  

  var code = 'var button = new five.Button({\n';
  code += ' pin: '+value_color+',\n';
  code += ' isPullup: true\n';
  code += '});\n';
  code += 'button.on("down", function(value) {\n';
  code += statements_page_header
  code += '});\n';

  return code;
};

Blockly.JavaScript['button_init'] = function(block) {
  var port = block.getFieldValue('port');
  // var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);
  

  var code = 'var button = new five.Button({\n';
  code += ' pin: '+ port +',\n';
  code += ' isPullup: true\n';
  code += '});\n';

  return code;
};

Blockly.JavaScript['button_released'] = function(block) {
  var statements_page_header = Blockly.JavaScript.statementToCode(block, 'page_header');
  var value_color = block.getFieldValue('port');
  

  var code = 'var button = new five.Button({\n';
  code += ' pin: '+value_color+',\n';
  code += ' isPullup: true\n';
  code += '});\n';
  code += 'button.on("up", function(value) {\n';
  code += statements_page_header
  code += '});\n';


  return code;
};

Blockly.JavaScript['page_header'] = function(block) {
  var value_header_text = Blockly.JavaScript.valueToCode(block, 'header_text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.getElementById("header").innerHTML = "' + value_header_text + '";\n';
  code +=    'document.getElementById("header").style.color = "' + value_color + '";\n';
  return code;
};

Blockly.JavaScript['led_status'] = function(block) {

  var status = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);

  // var code = 'var five = require("johnny-five");\n';
  // code += 'var board = new five.Board();\n';
  // code += 'board.on("ready", function() {\n';
  // code += 'var led = new five.Led(13);\n';
  // code += 'led.blink();\n';
  // code += '});\n';
  console.warn(status);
  // if(status == true)
  //   var code = 'led.off();\n';
  // else
  //   var code = 'led.on();\n';

  var code = 'if('+status+'==true)\n';
  code += '    led.on();\n';
  code += 'else\n';
  code += '    led.off();\n';

  return code;
};

Blockly.JavaScript['led_port'] = function(block) {

  var status = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);

  // board.on('ready', function() {
  //   // create Led component connected to the pin 13
  //   led = new five.Led({
  //     pin: 13
  //   });
  
  // });

  var code = 'led = new five.Led({\n';
  code += 'pin: '+status+'\n';
  code += '});\n';

  return code;
};

Blockly.JavaScript['analog_in'] = function(block) {

  var status = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);

  // board.on('ready', function() {
  //   // create Led component connected to the pin 13
  //   led = new five.Led({
  //     pin: 13
  //   });
  
  // });

  var code = 'an = new five.Pin({\n';
  code += '    pin: "A0"\n';
  code += '});\n';
  code += '\n';
  code += 'five.Pin.read(an, function(error, value) {\n';
  code += 'if(value > 600)\n';
  code += 'led.on();\n';
  code += 'else\n';
  code += 'led.off();\n';
  code += '});\n';

  return code;
};

Blockly.JavaScript['led_on'] = function(block) {
  var code = true;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['led_off'] = function(block) {
  var code = false;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_blue'] = function(block) {
  var colour_blue = block.getFieldValue('blue');

  var code = '#3333FF';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_red'] = function(block) {
  var colour_red = block.getFieldValue('red');

  var code = '#FF3333';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_green'] = function(block) {
  var colour_green = block.getFieldValue('green');

  var code = '#33FF33';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_black'] = function(block) {
  var colour_black = block.getFieldValue('black');

  var code = '#000000';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_white'] = function(block) {
  var colour_white = block.getFieldValue('white');

  var code = '#FFFFFF';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['page_text'] = function(block) {
  var text_text = block.getFieldValue('page_text');

  var code = text_text;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['move'] = function(block) {
  var text_text = block.getFieldValue('page_text');

  // var code = text_text+';\n';

  // var code = 's.select(\'#path3799\').animate({\n';
  // code += 'transform: "t'+text_text+'"\n';
  // code += '}, 700, mina.elastic);\n';

  var code = 'p.addTransform("t'+text_text+'");\n';


  return code;
};

Blockly.JavaScript['rotate'] = function(block) {
  var text_text = block.getFieldValue('page_text');

  var code = 'p.addTransform("r'+text_text+'");\n';

  return code;
};