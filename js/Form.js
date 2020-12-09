class Form {
    constructor() {
      this.input = createInput("Enter Your Name!");
      this.button = createButton('Lets Encounter Space!');
      this.greeting = createElement('h3');
      this.title = createElement('h2');
    }
    hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }
  
    display(){
      background(bg);

      this.title.html("Welcome to Space Encounter!");
      this.title.position(displayWidth/2 - 50,0);
      this.title.style('font-size', '40px');
      this.title.style('color', 'blue');
      this.title.style('font-family','Brush Script MT');

      this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);    
      this.input.style('width', '200px');
      this.input.style('height', '20px');
      this.input.style('background', 'black');
      this.input.style('font-size', '15px');
      this.input.style('color', 'pink');
      this.input.style('font-family','Brush Script MT');

      this.button.position(displayWidth/2 + 30,displayHeight/2);
      this.button.style('width', '200px');
      this.button.style('height', '40px');
      this.button.style('font-size', '20px');
      this.button.style('background', 'lightpink');
      this.button.style('color', 'purple');
      this.button.style('font-family','Brush Script MT');
  
      this.button.mousePressed(() => {
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
        playerCount += 1;
        player.index = playerCount;
        
        player.update();
        player.updateCount(playerCount);
  
        this.greeting.html("Good Day Mate!  " + player.name);
        this.greeting.style('font-family','Brush Script MT');
        this.greeting.style('color', 'cyan');
        this.greeting.style('font-size', '50px');
        this.greeting.position(displayWidth/2 - 70,displayHeight/4);
      });
    }
  }
  