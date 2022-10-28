import React, { useState, useContext } from "react"
import Select from 'react-select'

import { Header, HeaderWrapper } from './index.styled'
import { EqualMargin } from '../../globalStyles'

import BodyContext from "../../context/BodyContext"

const HeaderComponent = () => {
    const { platform, setPlatform, options,setExportpage,exportpage,view,setView,excelfun } = useContext(BodyContext)
   
    return <Header>
            
                <HeaderWrapper>
                    <img src="images/adcollectorlogo.png" />
                    <button onClick={()=>{excelfun()}}>{view}</button>

                    
                </HeaderWrapper>
            
        </Header>
}

export default HeaderComponent