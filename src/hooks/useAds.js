
import { useState, useEffect, useContext } from 'react'
import { statics } from '../config/static'

import BodyContext from '../context/BodyContext'

const { FACEBOOK_FAV_ENDPOINT,TWITTER_FAV_ENDPOINT,YOUTUBE_FAV_ENDPOINT,TWITTER_DELETE_ENDPOINT,YOUTUBE_DELETE_ENDPOINT,FACEBOOK_DELETE_ENDPOINT,FACEBOOK_GET_ENDPOINT, YOUTUBE_GET_ENDPOINT, TWITTER_GET_ENDPOINT } = statics

const useAds = () => {

    const { setAds, setTotalAdCount } = useContext(BodyContext)

    const getFacebookAds = async (userId, page) => {
        try {
            let response = await fetch(FACEBOOK_GET_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, page })
            })

            let result = await response.json()
            setAds(result.facebookAds)
            setTotalAdCount(result.totalFacebookAdsCount)
        } catch(err) {

        }
    }

    const getYoutubeAds = async (userId, page) => {
        try {
            let response = await fetch(YOUTUBE_GET_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, page })
            })

            let result = await response.json()
            setAds(result.youtubeAds)
            setTotalAdCount(result.totalYoutubeAdsCount)
        } catch(err) {

        }
    }

    const getTwitterAds = async (userId, page) => {
        try {
            let response = await fetch(TWITTER_GET_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, page })
            })

            let result = await response.json()
            setAds(result.twitterAds)
            setTotalAdCount(result.totalTwitterAdsCount)
        } catch(err) {

        }
    }
    const delFacebookAds=async(userId,adId)=>{
        try {
            let response = await fetch(FACEBOOK_DELETE_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, adId })
            })
        } catch(err) {

        }
    }
    const delTwitterAds=async(userId,adId)=>{
        try {
            let response = await fetch(TWITTER_DELETE_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, adId })
            })
        } catch(err) {

        }
    }
    const delYoutubeAds=async(userId,adId)=>{
        try {
            let response = await fetch(YOUTUBE_DELETE_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, adId })
            })
        } catch(err) {

        }
    }
    const favFacebookAds=async(userId,adId)=>{
        try {
            let response = await fetch(FACEBOOK_FAV_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, adId })
            })
        } catch(err) {

        }
    }
    const favTwitterAds=async(userId,adId)=>{
        try {
            let response = await fetch(TWITTER_FAV_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, adId })
            })
        } catch(err) {

        }
    }
    const favYoutubeAds=async(userId,adId)=>{
        try {
            let response = await fetch(YOUTUBE_FAV_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, adId })
            })
        } catch(err) {

        }
    }
    
    


    return { getFacebookAds, getYoutubeAds, getTwitterAds,delFacebookAds,delTwitterAds,delYoutubeAds,favFacebookAds,favTwitterAds,favYoutubeAds}
}

export default useAds