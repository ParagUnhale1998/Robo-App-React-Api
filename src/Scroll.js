import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{ margin : "1%" ,padding: "1%", overflowY : "scroll" ,border:"2px solid white" , height: " 1000px"  }}>
            {props.children}
        </div>
    );
};
export default Scroll