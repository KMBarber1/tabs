import React, { useState } from "react";


const Tab = props => {

    const [content, setContent] = useState("")


    const onClickHandler = (tab,i) => {
        setContent(tab.content)
    }


    return(
        <div >
            <div>
                {
                    props.Tabs.map((tab, i) => {
                    
                    return(
                        <button key={i} onClick={ () => onClickHandler(tab,i) }>{tab.name}</button>
                    )                 
                })}
            </div>

            <p>{content}</p>

        </div>
    )
}

export default Tab;