import React from "react";

const Component:React.FC = (props) =>{
    return(

        <div>
            <div>
                <input type="text"/>
            </div>
            <div>
                <input type="text" placeholder="Placeholder"/>
            </div>
            <div>
                <label htmlFor="">Label</label>
                <input type="text" placeholder="Placeholder"/>
            </div>
            <div>
                <label htmlFor="">Label</label>
                <input type="text" placeholder="Placeholder"/>
                <label htmlFor="">Message</label>
            </div>
             <div>
                <input type="text" placeholder="Placeholder" value="Text"/>
            </div>
        </div>

    );
}

export default Component;