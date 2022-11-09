
import { useState, useEffect, useContext } from 'react'
import { statics } from '../config/static'

import BodyContext from '../context/BodyContext'

const { FACEBOOK_FAV_ENDPOINT,TWITTER_FAV_ENDPOINT,YOUTUBE_FAV_ENDPOINT,FACEBOOK_EXPORT_ENDPOINT,TWITTER_EXPORT_ENDPOINT,YOUTUBE_EXPORT_ENDPOINT,ADD_TO_FAV,REMOVE_FROM_FAV,TWITTER_DELETE_ENDPOINT,YOUTUBE_DELETE_ENDPOINT,FACEBOOK_DELETE_ENDPOINT,FACEBOOK_GET_ENDPOINT, YOUTUBE_GET_ENDPOINT, TWITTER_GET_ENDPOINT } = statics

const useAds = () => {

    const { setFavads,setExports,setAds, setTotalAdCount } = useContext(BodyContext)

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
    const addToFavorites=async(userId,adId,platform)=>{
        try {
            let response = await fetch(ADD_TO_FAV, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, adId,platform})
            })
        } catch(err) {

        }
    }
    const removeFromFavorites=async(userId,adId,platform)=>{
        try {
            let response = await fetch(REMOVE_FROM_FAV, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId, adId,platform})
            })
        } catch(err) {

        }
    }
    const exportTwitterAds = async (userId) => {
        try {
            let response = await fetch(TWITTER_EXPORT_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId })
            })

            let result = await response.json()
            setExports(result.twitterAds)
            
        } catch(err) {

        }
    }
    const exportFacebookAds = async (userId) => {
        try {
            let response = await fetch(FACEBOOK_EXPORT_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId })
            })

            let result = await response.json()
            setExports(result.facebookAds)
            
        } catch(err) {

        }
    }
    const exportYoutubeAds = async (userId) => {
        try {
            let response = await fetch(YOUTUBE_EXPORT_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId })
            })

            let result = await response.json()
            setExports(result.youtubeAds)
            
        } catch(err) {

        }
    }
    const favYoutubeAds = async (userId) => {
        try {
            let response = await fetch(YOUTUBE_FAV_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId })
            })

            let result = await response.json()
            setFavads(result.youtubeAds)
            
        } catch(err) {

        }
    }
    const favFacebookAds = async (userId) => {
        try {
            let response = await fetch(FACEBOOK_FAV_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId })
            })

            let result = await response.json()
            setFavads(result.facebookAds)
            
        } catch(err) {

        }
    }
    const favTwitterAds = async (userId) => {
        try {
            let response = await fetch(TWITTER_FAV_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ userId })
            })

            let result = await response.json()
            setFavads(result.twitterAds)
            
        } catch(err) {

        }
    }
    


    return {favFacebookAds,favTwitterAds,favYoutubeAds,exportFacebookAds,exportTwitterAds,exportYoutubeAds,addToFavorites , removeFromFavorites,getFacebookAds, getYoutubeAds, getTwitterAds,delFacebookAds,delTwitterAds,delYoutubeAds}
}

export default useAds