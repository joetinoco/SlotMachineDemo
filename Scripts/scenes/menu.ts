// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _startButton: objects.Button;
        private _welcomeLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // add the WELCOME Label to the scene
            this._welcomeLabel = new objects.Label(
                "SLOT MACHINE",
                "60px Consolas",
                "#000000",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y
            );
            this.addChild(this._welcomeLabel);
            
            // add the START button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 80);
            this.addChild(this._startButton);
            
            // START Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
               
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the START Scene
            scene = config.Scene.SLOT_MACHINE;
            changeScene();
        }
        
    }
}