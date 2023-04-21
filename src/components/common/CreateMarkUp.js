import * as React from 'react';

const CreateMarkUp = (props) => {

    const {
        description
    } = props ;

    const ctrl = React.useRef(null) ;

    const decodeHtml = (html) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    
    React.useEffect(() => {
        if(ctrl) ctrl.current.innerHTML = decodeHtml(description) ;
    }, []);

    return (
        <div ref={ctrl} >
        </div>
    )
}

export default CreateMarkUp;