/* global chrome */
import React, { Fragment, useState } from 'react'
import HeaderComponent from './components/header'
import Body from './components/body'
import Exportpage from './components/exportpage/Exportpage'
import GlobalStyle, { EqualMargin } from './globalStyles'

import BodyContext from './context/BodyContext'

const options = [
    { value: 'facebook', label: 'Facebook' },
    { value: 'youtube', label: 'Youtube' },
    { value: 'twitter', label: 'Twitter' },
];

const App = () => {
    const [platform, setPlatform] = useState("facebook")
    const [fav,setFav]=useState(false)
    const [favads,setFavads]=useState([])
    const [ads, setAds] = useState([])
    const [exports, setExports] = useState([])
    const [totalAdCount, setTotalAdCount] = useState(0)
    const [exportpage,setExportpage]=useState(false)
    const [view,setView]=useState("Export all ads")
    


    return <Fragment>
        <GlobalStyle />

        <BodyContext.Provider value={{ exports,setExports,favads,setFavads,fav,setFav,platform, setPlatform, options, ads, setAds, totalAdCount, setTotalAdCount,exportpage,setExportpage,view,setView}}>
            <HeaderComponent />

            
                {(exportpage===false)?<Body/>:<Exportpage/>}
            
        </BodyContext.Provider>
    </Fragment>
    
}

export default App