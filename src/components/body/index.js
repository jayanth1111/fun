/* global chrome */

import React, { useEffect, useState, useContext } from 'react'

import { Side,Main,Body,Icon, Bodycomponent, SearchWrapper, AdsWrapper, AdsCount, Input, SearchHeader, Pagination, Prev, PageNumber, Next } from './index.styled'
import { EqualMargin } from '../../globalStyles'
import useAds from '../../hooks/useAds'

import BodyContext from '../../context/BodyContext'

import AdCard from './components/card'
// let userId = "ta2sf1yo5ne"
const BodyComponent = () => {
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [filteredAds, setFilteredAds] = useState([])
    const [userId, setUserId] = useState('')
    const docsPerPage = 20
    const { getFacebookAds, getTwitterAds, getYoutubeAds,delFacebookAds,delTwitterAds,delYoutubeAds,favFacebookAds,favTwitterAds,favYoutubeAds } = useAds()
    const { platform, ads, setAds, totalAdCount, setTotalAdCount,exportpage,setExportpage,setView} = useContext(BodyContext)
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
        
            var  userId  = "mqpsys7paas"
            setFilteredAds([])
            // setAds([])
            // setTotalAdCount(0)
            switch(platform.value) {
                case 'facebook':
                    getFacebookAds(userId, page)
                    break;
                case 'youtube':
                    getYoutubeAds(userId, page)
                    break;
                case 'twitter':
                    getTwitterAds(userId, page)
                    break;
            }  
            
        
    }, [platform, page])
    const handlePrev = () => {
        setPage(page - 1)
    }
    const handleNext = () => {
        setPage(page + 1)
    }
    const DeleteAd = (adId) => {
        chrome.storage.local.get('userId', async(res) => {
            var { userId } = res
            switch(platform.value) {
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
        })
    }
    const ModifyFav=(adId)=>{
        console.log("clickedfav")
        chrome.storage.local.get('userId', async(res) => {
            var { userId } = res
            switch(platform.value) {
                case 'facebook':
                    favFacebookAds(userId, adId)
                    getFacebookAds(userId, page)
                    break;
                case 'youtube':
                    favYoutubeAds(userId, adId)
                    getYoutubeAds(userId, page)
                    break;
                case 'twitter':
                    favTwitterAds(userId, adId)
                    getTwitterAds(userId, page)
                    break;
            }  
        })
    }
    return (
    <Bodycomponent>
    
        
           <Side>
             <Icon><img src="images/opt1.png"/></Icon>
             <Icon><img src="images/opt2.png"/></Icon>
             <Icon><img src="images/opt3.png"/></Icon>
             
           </Side>
           <Main>
            <SearchHeader>
                <SearchWrapper>

                </SearchWrapper>
                

            </SearchHeader>
            <AdsWrapper>

            </AdsWrapper>
           </Main>
           
    

       </Bodycomponent>

       )

     
}
export default BodyComponent