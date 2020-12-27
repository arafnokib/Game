class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.stitle = createElement('h3')
    this.reset = createButton('Reset')
    this.info = createElement('h2')
    this.warn = createElement('h4');
  //  this.game = createButton('3')
    this.next = createButton('Next')
    this.start = createButton('Start Your Story');
    this.end = createButton('End The Game');
  }
   hideStuff(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.stitle.hide();
    this.warn.hide();
  }

  display(){
    this.title.html("The Pong Battle");
    this.title.position(600, 100);
    this.stitle.html("Tell a friend to join!");
    this.stitle.position(600, 125);
    this.warn.html("IMPORTANT: Tell a friend to join you, and play it together! This game is a 2 player game and not suited for singleplayer.")
    this.warn.position(5,0)

    this.input.position(450, 200);
    this.button.position(650,200);
   // this.game.mousePressed(()=>{
     // gameState = 3;
   // })
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Welcome " + player.name)
      this.greeting.position(600, 300);
      this.info.html(player.name + " is the red paddle!")

    });
    this.reset.mousePressed(()=>{
      var dbRef;
      dbRef = database.ref('players')
      dbRef.remove();
      player.resetCount();
      window.location.reload();
    });
    //text("Start the story!",600,100)
    this.start.position(600,300);
    

    
    this.start.mousePressed(()=>{
     
      this.start.hide();
      this.next.show();
      storyState=1;

      if(storyState===1){
        image(a,0,0,700,490);
        form.start.hide();
        console.log("hi")
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();      
        this.stitle.hide();
        this.warn.hide();
      }
    })
    this.end.mousePressed(()=>{
      game.end();
    })
    if(storyState===0){
      //console.log("HI")

      this.next.hide();
      this.start.show();
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();      
      this.stitle.hide();
      this.warn.show();
    }



    this.next.mousePressed(()=>{
      storyState+=1;
     // this.next = createButton('Next')
     
    
    
      
     
      if(storyState===2){
        strokeWeight(0);
        fill("white")
        rect(0,0,700,490)
        image(b,0,0,700,490);
        form.start.hide();

        form.hideStuff();
        

  
      }
  
      if(storyState===3){
        strokeWeight(0);
        fill("white")
        rect(0,0,700,490)
        image(c,0,0,700,490);
        form.hideStuff();
        form.start.hide();

  
      }
  
      if(storyState===4){
        strokeWeight(0);

        fill("white")
        rect(0,0,700,490)
        image(d,0,0,446,452);
        form.hideStuff();
        form.start.hide();

      }

      if(storyState===5){
        strokeWeight(0);

        fill("white")
        rect(0,0,700,490)
        image(e,0,0,446,452);
        form.hideStuff();
        form.start.hide();

      }

      if(storyState===6){
        strokeWeight(0);

        fill("white")
        rect(0,0,700,490)
        image(f,0,0,700,490);
        form.hideStuff();
        form.start.hide();

      }

      if(storyState===7){
        strokeWeight(0);

        fill("white")
        rect(0,0,700,490)
        image(g,0,0,700,490);
        form.hideStuff();
        form.start.hide();

      }

      if(storyState===8){
        strokeWeight(0);

        fill("white")
        rect(0,0,700,490)
        image(h,0,0,700,490);
        form.hideStuff();
        form.start.hide();

      }

      if(storyState===9){
        fill("white")
        rect(0,0,700,490)
        this.greeting.show();
        this.button.show();
        this.input.show();
        this.title.show();
        this.stitle.show();
        this.next.hide();
      }

    })

    


   

  }
}
