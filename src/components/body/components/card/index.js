import React from 'react';

import {
    CardContainer,
    AdHeader,
    Logo,
    Name,
    Options,
    AdlibraryButton,
    FavoriteButton,
    CardBody,
    CardDescription,
    CardMedia1,
    CardMedia2,
    CallOfActions,
    Left,
    Right,
    Likes,
    Comments,
    Shares,
    Stats,
    ActionUrl,
    ActionHead,
    ActionDescription,
    DeleteButton,
    FoundOn,
    ImageListContainer,
    EmbedContainer
} from "./index.styled"
import Swal from 'sweetalert2';
const AdCard = (props) => {
    const {ad} = props;
    
    const formattedDate = (date) => {
        return new Date(date).toDateString()
    }
    const OnFavClick = () => {
        props.ModifyFav(ad.adId);
    }

    const OnDelete = () => {
        props.DeleteAd(ad.adId);
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({icon: 'success', title: 'deleted ad successfully'})
    }
    
    return (
        props.platform==="facebook"?
    <>
    
        <CardContainer>
        
        <AdHeader>
            <Logo>
                 {/* <img src={
                    imgBase64Obj[ad.logo] ? imgBase64Obj[ad.logo] : ad.logo
                }></img> */} </Logo>
            <Name onClick={
                () => {
                    window.open(`${ad.redirectUrl}`, '_blank');
                }
            }>
                {/* <img src={
        
                }></img> */}
                <h2> 
                    Post{<img src="images/facebook.png"></img>
                }</h2>
                </Name>
            <Options>
                <FoundOn>
                    Date: <span> {
                            formattedDate(ad.updatedAt)
                        } </span>
                </FoundOn>
                <DeleteButton onClick={
                    () => {
                        OnDelete()
                    }
                }>
                    <img src="images/delete.png"></img>
                </DeleteButton>
                {/* {<FavoriteButton onClick={
                    () => {
                        OnFavClick()
                    }
                }>
                    {
                    ad.favorites ? <img src="images/favoriteon.png"></img> : <img src="images/favoriteoff.png"></img>
                } </FavoriteButton>}  */}
            </Options>
        </AdHeader>
        <EmbedContainer> {
            ad.videoId ? <iframe src={
                    `https://www.facebook.com/plugins/video.php?height=476&href=https://www.facebook.com/${
                        ad.redirectUrl && ad.redirectUrl.split("/")[3]
                    }/videos/${
                        ad.videoId
                    }/&show_text=true&width=476&t=0`
                }
                width="500"
                height="800"
                style={
                    {
                        border: "none",
                        overflow: "hidden"
                    }
                }
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
                allowFullScreen="true"></iframe> : <iframe src={
                    `https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/${
                        ad.pageId ? ad.pageId : ad.redirectUrl && ad.redirectUrl.split("/")[3]
                    }/posts/${
                        ad.adId
                    }&show_text=true&width=500`
                }
                width={
                    ad.image_width ? ad.image_width : "500"
                }
                height={
                    ad.image_height ? ad.image_height : "800"
                }
                style={
                    {
                        border: "none",
                        overflow: "hidden"
                    }
                }
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen="true"></iframe>
        } </EmbedContainer>

    

    


        </CardContainer>

        </>:props.platform==="twitter"?<>
        <CardContainer>
            <AdHeader>
            <Name onClick={
                () => {
                    
                    window.open(`${ad.redirectUrl}`, '_blank');
                }
            }>
                {/* <img src={
        
                }></img> */}
                <h2> 
                    Tweet{<img src="images/twitter.png"></img>
                }</h2>
                </Name>
                <Options>
                <FoundOn>
                    Date: <span> {
                            formattedDate(ad.updatedAt)
                        } </span>
                </FoundOn>
                { <DeleteButton onClick={
                    () => {
                        OnDelete()
                    }
                }>
                    <img src="images/delete.png"></img>
                </DeleteButton> }
                {/* { <FavoriteButton onClick={
                    () => {
                        OnFavClick()
                    }
                }>
                    {
                    ad.favorites ? <img src="images/favoriteon.png"></img> : <img src="images/favoriteoff.png"></img>
                } </FavoriteButton> } */}
            </Options>
            </AdHeader>
            <EmbedContainer>
              <iframe src={`https://twitframe.com/show?https://www.twitter.com/${ad.screenName}/status/${ad.adId}`} 
              width={
                ad.image_width ? ad.image_width : "500"
            }
            height={
                ad.image_height ? ad.image_height : "800"
            }
            style={
                {
                    border: "none",
                    overflow: "hidden"
                }
            }
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen="true"
              ></iframe>
            
            </EmbedContainer>
        </CardContainer>
        </>:
        <>
        <CardContainer>
        <AdHeader>
            <Name onClick={
                () => {
                    
                    window.open(`https://${ad.landingDomain}`, '_blank');
                }
            }>
                {/* <img src={
        
                }></img> */}
                <h2> 
                    YT{<img src="images/youtube.png"></img>
                }</h2>
                </Name>
                <Options>
                <FoundOn>
                    Date: <span> {
                            formattedDate(ad.updatedAt)
                        } </span>
                </FoundOn>
                 <DeleteButton onClick={
                    () => {
                        OnDelete()
                    }
                }>
                    <img src="images/delete.png"></img>
                </DeleteButton>
                {/* <FavoriteButton onClick={
                    () => {
                        OnFavClick()
                    }
                }>
                    {
                    ad.favorites ? <img src="images/favoriteon.png"></img> : <img src="images/favoriteoff.png"></img>
                } </FavoriteButton>  */}
            </Options>
            </AdHeader>
            <EmbedContainer>
            
            <iframe src={ad.adUrl} 
              width={
                ad.image_width ? ad.image_width : "600"
            }
            height={
                ad.image_height ? ad.image_height : "480"
            }
            style={
                {
                    border: "none",
                    overflow: "hidden"
                }
            }
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen="true"
              ></iframe>
            
            </EmbedContainer>
            
        </CardContainer>
        </>
        
        
        
        )
}


export default AdCard
