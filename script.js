        function App(){
    const[On,SetOn]=React.useState(false);
    function HandleToggle(){
        var element = document.getElementById("drum-pad");
       if(On === false) SetOn(true);
       else if(On=== true){ SetOn(false) 
        setString("----")};
    }
    const [String,setString]= React.useState("----"); 
    let playQ = function(){
        if(On===true){ document.getElementById("Q").play() 
        setString("Clap")
    }
   
}
    let playW = function(){
        if(On===true){document.getElementById("W").play()
setString("Clap2")}
    }
    let playE = function(){
        if(On===true){document.getElementById("E").play()
    setString("Clap3")
}
}
    let playA = function(){if(On===true){document.getElementById("A").play()
    setString("Clap4")}}
    let playS = function(){if(On===true){document.getElementById("S").play()
    setString("Clap5")}}
    let playD = function(){if(On===true){document.getElementById("D").play()
    setString("Clap6")}}
    let playZ = function(){if(On===true){document.getElementById("Z").play()
    setString("Clap7")}}
    let playX = function(){if(On===true){document.getElementById("X").play()
    setString("Clap8")}}
    let playC = function(){if(On===true){document.getElementById("C").play()
    setString("Clap9")}}
            //function on key pressed
            document.addEventListener("keydown", function(event) {
                if (event.code === "KeyQ") {
                   playQ();
                     }
              else if (event.code === "KeyW") {
                    playW()
                     }
              else if (event.code === "KeyE") {
                         playE();
                    }
             else if (event.code === "KeyA") {
                 playE();
                   }
             else if (event.code === "KeyS") {
                   playS();
                    }
            else if (event.code === "KeyD") {
                    playD();
                     }
             else if (event.code === "KeyZ") {
                    playZ();
                      }
             else if (event.code === "KeyX") {
                         playX();
                           }
             else if (event.code === "KeyC") {
                         playC();
                        }
                 });
     //end of key pressed
    return (
        <div id="drum-machine">
           
            <div id="DrumKeys">
            <button class="drum-pad" id="Clap" onClick={playQ}>Q
            <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            </button>
            <button class="drum-pad" id="Clap2" onClick={playW}>W
            <audio  class="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            </button>
            <button class="drum-pad" id="Clap3" onClick={playE}>E
            <audio class="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            </button>
            <button class="drum-pad" id="Clap4" onClick={playA}>A
            <audio class="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            </button>
            <button class="drum-pad" id="Clap5" onClick={playS}>S
            <audio class="clip" id="S"src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
            </button>
            <button class="drum-pad"  id="Clap6" onClick={playD}>D
            <audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
            </button>
            <button class="drum-pad" id="Clap7" onClick={playZ}>Z
            <audio class="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
            </button>
            <button class="drum-pad" id="Clap8" onClick={playX}>X
            <audio class="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
            </button>
            <button class="drum-pad" id="Clap9" onClick={playC}>C
            <audio class="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
            </button>
            </div>
            <div id="display">
            <h1>{String}</h1>
            <input class="toggle" type="checkbox" onClick={HandleToggle}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#drum-machine-view"))