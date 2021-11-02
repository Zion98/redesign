import React from 'react'
import lightbulb from "../assets/lightbulb.svg";
interface main{
    text1:string,
    text2:string
}
const Aside = ({text1,text2}:main) => {
    return (
        <div className="aside">
        <div className="aside-content">
          <div className="flex2">
            <img src={lightbulb} alt="lightbulb" />
            <h2 className="getstart">{text1}</h2>
          </div>

          <p className="getcontent">
           {text2}
          </p>
        </div>
      </div>
    )
}

export default Aside
