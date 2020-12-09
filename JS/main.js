var VanillaTilt = (function(){
     'use strict';

    class VanillaTilt {
        constructor(element , settings ={}){
            if (!(element instanceof Node)){
                throw ("Can't initalizze VanillaTilt because" + element + "is not a Node.");
            }
            this.width        = null;
            this.height       = null;
            this.clientWidth  = null;
            this.clientHeight = null;
            this.left         = null;
            this.top          = null;

        }
    }
});