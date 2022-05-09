import React, { Component } from "react";
import './rainbow-circle.scss';

interface IRainbowCircleProps {
    label?: string;
}
 
interface IRainbowCircleState {
    label?: string;
}
 
class RainbowCircle extends Component<IRainbowCircleProps, IRainbowCircleState> {
    constructor(props: IRainbowCircleProps) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return ( 
            <div className="rainbow-circle">
                <span>Loading</span>
            </div>
         );
    }
}
 
export default RainbowCircle;