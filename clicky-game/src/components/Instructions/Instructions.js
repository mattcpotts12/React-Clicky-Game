import React from "react";
import "./Instructions.css";

const Instructions = props => {
    <div className="col-sm-12">
        <div className="instructionPanel">  
            <ul>Game Instructions</ul>
                <li>Click on one of the images below</li>
                <li>The images will then reshuffle</li>
                <li>Do not click on any of the previous selected</li>
                <li>The score will increment when clicking an image for the first time</li>
                <li>If you click on an image more than once the score will reset back to 0</li>
        </div>
    </div>
};

export default Instructions