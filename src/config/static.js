const DOMAIN = "http://localhost:8000"

export const statics = {
    FACEBOOK_GET_ENDPOINT: `${DOMAIN}/api/facebook/ads`,
    YOUTUBE_GET_ENDPOINT: `${DOMAIN}/api/youtube/ads`,
    TWITTER_GET_ENDPOINT: `${DOMAIN}/api/twitter/ads`,
    FACEBOOK_DELETE_ENDPOINT: `${DOMAIN}/api/facebook/deleteAds`,
    YOUTUBE_DELETE_ENDPOINT: `${DOMAIN}/api/youtube/deleteAds`,
    TWITTER_DELETE_ENDPOINT: `${DOMAIN}/api/twitter/deleteAds`,
    FACEBOOK_EXPORT_ENDPOINT: `${DOMAIN}/api/facebook/exports`,
    YOUTUBE_EXPORT_ENDPOINT: `${DOMAIN}/api/youtube/exports`,
    TWITTER_EXPORT_ENDPOINT: `${DOMAIN}/api/twitter/exports`,
    ADD_TO_FAV  :  `${DOMAIN}/api/favorites/add`,
    REMOVE_FROM_FAV :`${DOMAIN}/api/favorites/remove`,
    FACEBOOK_FAV_ENDPOINT: `${DOMAIN}/api/facebook/favorites`,
    YOUTUBE_FAV_ENDPOINT: `${DOMAIN}/api/youtube/favorites`,
    TWITTER_FAV_ENDPOINT: `${DOMAIN}/api/twitter/favorites`

}