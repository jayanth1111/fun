import React, { useState, useContext } from "react"
import Select from 'react-select'
import useAds from '../../hooks/useAds'
import { Card1,A,Export,Csv1,Header, HeaderWrapper } from './index.styled'
import { EqualMargin } from '../../globalStyles'

import BodyContext from "../../context/BodyContext"

const HeaderComponent = () => {
    const { fav,setFav,platform, setPlatform, options,setExportpage,exportpage,view,setView } = useContext(BodyContext)
    const { exportFacebookAds,exportTwitterAds,exportYoutubeAds,getFacebookAds, getTwitterAds, getYoutubeAds,delFacebookAds,delTwitterAds,delYoutubeAds,addToFavorites,removeFromFavorites } = useAds()
    const excelfun=()=>{
        var  userId  = "wl29hpje5g"
        setExportpage(!exportpage);
        if(view==="Export all ads"){
            setView("Normal view")
            switch(platform) {

                case 'facebook':
                    exportFacebookAds(userId)
                    
                    break;
                case 'youtube':
                   exportYoutubeAds(userId)
                    
                    break;
                case 'twitter':
                    exportTwitterAds(userId)
                    
                    break;
            }  
        }
        else{

            setView("Export all ads")
            
           
        }
    }
    return <Header>
            
                <HeaderWrapper>
                    <img src="images/adcollectorlogo.png" />
                    <Export onClick={()=>{excelfun()}}>{
                        view==="Normal view"?<>
                           <Card1><h3>cards</h3></Card1>
                           <A>{view}</A>
                        </>
                        :
                        <>
                           <img src="images/export.png"/>
                           <A>{view}</A>
                           <Csv1><h3>.CSV</h3></Csv1>
                        </>
                           
                        
}
                    </Export>

                    
                </HeaderWrapper>
            
        </Header>
}

export default HeaderComponent