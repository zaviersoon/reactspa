import React from 'react';
import Content from '../spa/content';
import Menu from '../spa/menu'; 


function Rootcomponent() {
    return ( 
        <div>
            <h1>SPA - Single Page Application</h1>
            <Menu></Menu>
            <Content></Content>
        </div>
     );
}

export default Rootcomponent;