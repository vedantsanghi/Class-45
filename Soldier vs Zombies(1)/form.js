class Form {
    constructor(){
    this.input = createInput("NAME")
    this.input1 = createInput("PASSWORD")
    this.input2 = createInput("NAME")
    this.input3 = createInput("PASSWORD")
    }
display(){
    push()
    fill("black")
    textSize(50)
    text("Soldier vs Zombies", displayWidth/3, displayHeight/6)
    pop()  
    
    this.input.hide()
    this.input1.hide()
    this.input2.hide()
    this.input3.hide()
   button = createButton("Already a Player")
    button.position(displayWidth/3, displayHeight/2)
   button.size(100,100)

   button1 = createButton("New Player")
    button1.position(displayWidth/2, displayHeight/2)
    button1.size(100,100)

    button.mousePressed(function(){
   Form.display2();
})
 button1.mousePressed(function(){
    Form.display3();
 })
}
static display2(){
    button.hide()
    button1.hide()
    //this.input.position(displayWidth/2, displayHeight/4);

  
  
    button3 = createButton("NEXT")
    button3.position(displayWidth/2, displayHeight/2 )
  
    button3.mousePressed(function(){
      name = this.input.value();
      checkName(name)
      
    //   checkPassword(player.password)
    })
    
}
static display3(){
    push()
    fill("black")
    textSize(20)
    text("Write your name and create a password for your account", displayWidth/3.5, displayHeight/5)
    pop()   

    button.hide()
    button1.hide()
  //this.input2.position(displayWidth/2, displayHeight/4);

  //this.input3.position(displayWidth/2, displayHeight/3)

  
  button4 = createButton("REGISTER")
  button4.position(displayWidth/2, displayHeight/2 )

  button4.mousePressed(function(){
  Form.display4()
  })
}
static display4(){
    plaeyr.name = this.input.value();
      password = this.input1.value()
      playerCount+=1;
      index = playerCount;
     name = player.name + playerCount
     updateRegister(name, password);
     updateCount(playerCount);
      push()
      fill("black")
      textSize(20)
      text("We have added a number to your name because similar names can cause an error.", displayWidth/4, displayHeight/5)
      text("Remember the name and password because when you open the game you will need them.", displayWidth/4, displayHeight/4.5)
      text("Name: "+ name, displayWidth/3, displayHeight/3.5)
      text("Password: "+password, displayWidth/3, displayHeight/3)
      pop()  
  
      button5 = createButton("OKAY")
      button5.position(displayWidth/2, displayHeight/2)
  
      button5.mousePressed(function(){
          
      })
    }
      static display5(){
    //this.input1.position(displayWidth/2, displayHeight/3)
      
    button6 = createButton("NEXT")
    button6.position(displayWidth/2, displayHeight/2 )
  
    button6.mousePressed(function(){
      player.password = this.input1.value();
      checkPassword(player.password)
    })
      }

hide(){
button.hide();
button1.hide();
button2.hide();
button3.hide();
button4.hide();
button5.hide();
button6.hide();
this.input.hide();
this.input1.hide();
this.input2.hide();
this.input3.hide();
}
}