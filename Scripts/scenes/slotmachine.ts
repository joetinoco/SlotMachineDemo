// SLOT_MACHINE SCENE
module scenes {
    export class SlotMachine extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _slotMachineLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // add the WELCOME Label to the scene
            this._slotMachineLabel = new objects.Label(
                "GAME GOES HERE",
                "60px Consolas",
                "#000000",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y
            );
            this.addChild(this._slotMachineLabel);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {
            // SLot machine updates here
        }
               
        
    }
}