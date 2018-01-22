Blockly.Blocks['page_settings'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendStatementInput("page_header")
        .appendField("Header:");
    this.appendValueInput("page_color")
        .setCheck("color")
        .appendField("Text Color:");
    this.appendValueInput("page_background")
        .setCheck("color")
        .appendField("Background Color:");
    this.appendValueInput("page_paragraph")
        .setCheck("String")
        .appendField("Paragraph:");
    this.setTooltip('');
  }
};

Blockly.Blocks['page_header'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(240);
    this.appendValueInput("header_text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header Text:");
    this.appendValueInput("page_color")
        .setCheck("color")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color:");
    this.setPreviousStatement(true, "page_settings");
    this.setTooltip('');
  }
};

Blockly.Blocks['page_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Your text."), "page_text");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_blue'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Blue:")
        .appendField(new Blockly.FieldColour("#3333ff"), "blue");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_red'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Red:")
        .appendField(new Blockly.FieldColour("#ff3333"), "red");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_green'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Green:")
        .appendField(new Blockly.FieldColour("#33ff33"), "green");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_black'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Black:")
        .appendField(new Blockly.FieldColour("#000000"), "black");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_white'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("White:")
        .appendField(new Blockly.FieldColour("#ffffff"), "white");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['led_on'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour('#ff0066');
    this.appendDummyInput()
        .appendField("ON");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['led_off'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour('#ff0066');
    this.appendDummyInput()
        .appendField("OFF");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['led_status'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour('#ff0066');    
    this.appendValueInput("page_color")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("LED:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['led_port'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour('#ff0066');    
    this.appendValueInput("page_color")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("nodebot.png", 100, 100))
        // .appendField("LED PORT:");
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['analog_in'] = {
    init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(240);    
    this.appendValueInput("page_color")
        .setAlign(Blockly.ALIGN_RIGHT)
        // .appendField(new Blockly.FieldImage("nodebot.png", 100, 100))
        .appendField("ANALOG PORT:");
    this.setOutput(true, "Number")
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


Blockly.Blocks['button_init'] = {
  init: function() {
    this.setColour('#9966ff');
    this.appendStatementInput("page_header")
        .appendField("button init:")
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3']]), "port");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
Blockly.Blocks['button_pressed'] = {
  init: function() {
    this.setColour('#9966ff');
    this.appendDummyInput()
        .appendField('On Button')
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3']]), "port")
        .appendField('pressed');

    this.appendStatementInput("page_header");
    // this.appendValueInput("page_color")
    //     .appendField("Pin Number:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['button_released'] = {
  init: function() {
    this.setColour('#9966ff');
    this.appendDummyInput()
        .appendField('On Button')
        .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3']]), "port")
        .appendField('Released');

    this.appendStatementInput("page_header");
    // this.appendValueInput("page_color")
    //     .appendField("Pin Number:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


Blockly.Blocks['rotate'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour('#ff0066');    
    this.appendDummyInput()
        .appendField("Rotate: ")
        .appendField(new Blockly.FieldTextInput("100"), "page_text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['move'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour('#ff0066');    
    this.appendDummyInput()
        .appendField("Move: ")
        .appendField(new Blockly.FieldTextInput("100,100"), "page_text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

