import React, { Component } from 'react';

class ChallengeForm extends Component {

    constructor (props) {
        super(props);
    }

    render() {

        const typeformWidgetStyle = {
            width: "100%", 
            height: "500px"
        }

        return(
            <div>
                <div className="typeform-widget" data-url="https://adventureteatime.typeform.com/to/nBxNRE" data-transparency="50" data-hide-headers="true" data-hide-footer="true" style={typeformWidgetStyle}></div> 

                {(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()}

            </div>
        );
    }    
}

export default ChallengeForm;