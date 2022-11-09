/* global chrome */

import React, { useEffect, useState, useContext } from 'react'

import { Adsgrid,Side,Main,Body,Icond,AllWrapper,Others,Allads,Favads,Icon,SearchIcon, Bodycomponent, SearchWrapper, AdsWrapper, AdsCount, Input, SearchHeader, Pagination, Prev, PageNumber, Next } from './index.styled'
import { EqualMargin } from '../../globalStyles'
import useAds from '../../hooks/useAds'

import BodyContext from '../../context/BodyContext'

import AdCard from './components/card'
// let userId = "ta2sf1yo5ne"
const BodyComponent = () => {
    const [query, setQuery] = useState("")
    const [f,setF]=useState("")
    const [t,setT]=useState("")
    const [y,setY]=useState("")
    const [allb,setAllb]=useState("")
    const [favb,setFavb]=useState("")
    const [page, setPage] = useState(1)
    const [filteredAds, setFilteredAds] = useState([])
    const [userId, setUserId] = useState('')
    const docsPerPage = 6
    const { favFacebookAds,favTwitterAds,favYoutubeAds,getFacebookAds, getTwitterAds, getYoutubeAds,delFacebookAds,delTwitterAds,delYoutubeAds,addToFavorites,removeFromFavorites } = useAds()
    const {favads,setFavads,fav,setFav, platform,setPlatform, ads, setAds, totalAdCount, setTotalAdCount,exportpage,setExportpage,setView} = useContext(BodyContext)
    const search = (e) => {
        let q = e.target.value && e.target.value.toLowerCase()
        setQuery(q)
        const fa = ads.filter((ad, index) => {
            if (ad.title && ad.title.toLowerCase().includes(query) || ad.description && ad.description.toLowerCase().includes(query)) {
                return ad
            }
        })
        setFilteredAds(fa)
    }
    useEffect(() => {}, [filteredAds])
    useEffect(() => {
 
        var  userId  = "wl29hpje5g"
        setFilteredAds([])
        setPage(1);
        if(fav==true){
            switch(platform) {

                case 'facebook':
                    
                    favFacebookAds(userId,page)
                    setF("#3D75EA14 0% 0% no-repeat padding-box")
                    setY("")
                    setT("")
                    break;
                case 'youtube':
                    favYoutubeAds(userId,page)
                    setY("#3D75EA14 0% 0% no-repeat padding-box")
                    setF("")
                    setT("")
                    break;
                case 'twitter':
                    favTwitterAds(userId,page)
                    setT("#3D75EA14 0% 0% no-repeat padding-box")
                    setF("")
                    setY("")
                    break;
            }  
        }
        else if(fav===false){
            switch(platform) {

                case 'facebook':
                    
                    getFacebookAds(userId,page)
                    setF("#3D75EA14 0% 0% no-repeat padding-box")
                    setY("")
                    setT("")
                    break;
                case 'youtube':
                    getYoutubeAds(userId,page)
                    setY("#3D75EA14 0% 0% no-repeat padding-box")
                    setF("")
                    setT("")
                    break;
                case 'twitter':
                    getTwitterAds(userId,page)
                    setT("#3D75EA14 0% 0% no-repeat padding-box")
                    setF("")
                    setY("")
                    break;
            }  
        }


        
    }, [platform,fav])
    useEffect(() => {
          if(fav){
            setFavb("#406FE9")
            setAllb("")
          }
          else{
            setAllb("#406FE9")
            setFavb("")
          }
    }, [fav])
    useEffect(() => {
        
            var  userId  = "wl29hpje5g"
            setFilteredAds([])
            
            // setAds([])
            if(fav===true){
                switch(platform) {

                    case 'facebook':
                        
                        favFacebookAds(userId,page)
                        
                        break;
                    case 'youtube':
                        favYoutubeAds(userId,page)
                        
                        break;
                    case 'twitter':
                        favTwitterAds(userId,page)
                        
                        break;
                }  
            }
            else{
                switch(platform) {

                    case 'facebook':
                        
                        getFacebookAds(userId, page)
                        
                        break;
                    case 'youtube':
                        getYoutubeAds(userId, page)
                       
                        break;
                    case 'twitter':
                        getTwitterAds(userId,page)
                        break;
                }  }
            
            
            
        
    }, [ page])
    const handlePrev = () => {
        setPage(page - 1)
    }
    const handleNext = () => {
        setPage(page + 1)
    }
    const DeleteAd = (adId) => {
        console.log("clickedfav")
        var  userId  = "wl29hpje5g"
            switch(platform) {
                case 'facebook':
                    delFacebookAds(userId, adId)
                    getFacebookAds(userId, page)
                    break;
                case 'youtube':
                    delYoutubeAds(userId, adId)
                    getYoutubeAds(userId, page)
                    break;
                case 'twitter':
                    delTwitterAds(userId, adId)
                    getTwitterAds(userId, page)
                    break;
            }  
        
    }
    const fff=()=>{
        
       
        var  userId  = "wl29hpje5g"
        switch(platform) {
            case 'facebook':
                
                getFacebookAds(userId)
                break;
            case 'youtube':
               
                getYoutubeAds(userId)
                break;
            case 'twitter':
                
                getTwitterAds(userId)
                break;
        }  
        let f=[];
        ads.map((ad,index)=>{if(ad.favorite===true){f.push(ad)}});setFavads(f);console.log(favads)
    }
    const ModifyFav=(ad)=>{
        console.log("clickedfav")
        var  userId  = "wl29hpje5g"
        
            
        switch(platform) {
            case 'facebook':
                if(ad.favorite===false){
                    addToFavorites(userId, ad.adId,platform)
                }
                else{
                    removeFromFavorites(userId,ad.adId,platform)
                }
                getFacebookAds(userId, page)
                break;
            case 'youtube':
                if(ad.favorite===false){
                    addToFavorites(userId, ad.adId,platform)
                }
                else{
                    removeFromFavorites(userId,ad.adId,platform)
                }
                getYoutubeAds(userId, page)
                break;
            case 'twitter':
                if(ad.favorite===false){
                    addToFavorites(userId, ad.adId,platform)
                }
                else{
                    removeFromFavorites(userId,ad.adId,platform)
                }
                getTwitterAds(userId, page)
                break;
        }  
                   
            }  
        
    
    return (
    <Bodycomponent>


    
        
           <Side>
             <Icond onClick={()=>{setPlatform("facebook");setPage(1)} } style={{background:f}}><Icon src="images/opt1.png"/></Icond> 
             <Icond onClick={()=>{setPlatform("twitter");setPage(1)}} style={{background:t}}><Icon src="images/opt2.png"/></Icond>
             <Icond onClick={()=>{setPlatform("youtube");setPage(1)}} style={{background:y}}><Icon src="images/opt3.png"/></Icond>
             
           </Side>
           <Main>
            <SearchHeader>
                <SearchWrapper>
                <Input  
                    onChange={search}
                    placeholder="Search ads here"
                    value={query}
                /> 
                    <SearchIcon src="images/search.png"/>
                    </SearchWrapper>
                <AllWrapper>
                <Allads  onClick={()=>{setFav(false)} } style={{background:allb}}>All ads</Allads>
                <Favads onClick={()=>{setFav(true);} } style={{background:favb}}>FAv</Favads>
                <Others>totalAds: <span>{totalAdCount}</span></Others>
                </AllWrapper>
                
            </SearchHeader>
            <AdsWrapper>
            
                
                {
                    fav===true?
                    favads.length>0?favads.map((ad, index) => {return <AdCard ad={ad} platform={platform} key={index} DeleteAd={DeleteAd}  ModifyFav={ModifyFav}/>}):<h2>no fav ads</h2> :
                    filteredAds.length > 0 
                    ? 
                    filteredAds.map((ad, index) => {return <AdCard ad={ad} platform={platform} key={index} DeleteAd={DeleteAd}  ModifyFav={ModifyFav} />}) 
                    :
                
                    ads.length > 0 
                    ? 
                    ads.map((ad, index) => {return <AdCard ad={ad} platform={platform} key={index} DeleteAd={DeleteAd}  ModifyFav={ModifyFav}/>}) 
                    :
                    <h2> No Ads found </h2>}
            

               
                
            

            </AdsWrapper>
            {
                <Pagination>
                <Prev onClick={handlePrev} disabled={page < 2}>Prev</Prev>
    
                <PageNumber>
                    <p>{page}</p>
                </PageNumber>
    
                <Next onClick={handleNext}  disabled={totalAdCount==0 ||page ===  Math.ceil(totalAdCount/docsPerPage)}>Next</Next>
           </Pagination>
            }
            
           </Main>
           
    

       </Bodycomponent>

       )
                }
     

export default BodyComponent