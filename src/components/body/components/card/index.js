import React from 'react';

import {
    CardContainer,
    AdHeader,
    Logo,
    Namef,
    Namet,
    Namey,
    Options,
    Options2,
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
        props.ModifyFav(ad);
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
        
        
        <EmbedContainer>
        <AdHeader>
            
                <Options>
                <FavoriteButton onClick={
                    () => {
                        OnFavClick()
                    }
                }>
                    {
                    ad.favorite ? <img src="images/like.png"></img> : <img src="images/heart.png"></img>
                } </FavoriteButton> 
                 <DeleteButton onClick={
                    () => {
                        OnDelete()
                    }
                }>
                    <img src="images/delete.png"></img>
                </DeleteButton>
                
            </Options>
            </AdHeader>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            {
            ad.videoId ? <iframe src={
                    `https://www.facebook.com/plugins/video.php?height=476&href=https://www.facebook.com/${
                        ad.redirectUrl && ad.redirectUrl.split("/")[3]
                    }/videos/${
                        ad.videoId
                    }/&show_text=true&width=476&t=0`
                }
                
               
                width="100%"
                height="700px"
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
               
               
                width="100%"
                height="700px"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
               
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen="true"></iframe>
        } 

            </div>

         
        </EmbedContainer>
        <Options2>
        <FoundOn>
                    Date: <span> {
                            formattedDate(ad.updatedAt)
                        } </span>
                </FoundOn>
        <Namef onClick={
                () => {
                    window.open(`${ad.redirectUrl}`, '_blank');
                }
            }>
                {/* <img src={
        
                }></img> */}
               <img src="images/facebook.png"></img>
               <h6>show post</h6>
                </Namef>
                
        </Options2>

    

    


        </CardContainer>

        </>:props.platform==="twitter"?<>
        <CardContainer>
            
               
            <EmbedContainer>
            <AdHeader>
            
                <Options>
                <FavoriteButton onClick={
                    () => {
                        OnFavClick()
                    }
                }>
                    {
                    ad.favorite ? <img src="images/like.png"></img> : <img src="images/heart.png"></img>
                } </FavoriteButton> 
                 <DeleteButton onClick={
                    () => {
                        OnDelete()
                    }
                }>
                    <img src="images/delete.png"></img>
                </DeleteButton>
                
            </Options>
            </AdHeader>
              <iframe src={`https://twitframe.com/show?https://www.twitter.com/${ad.screenName}/status/${ad.adId}`} 
              height="700px"
              width="100%"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen="true"
            
              ></iframe>
            
            </EmbedContainer>
            <Options2>
            <FoundOn>
                    Date: <span> {
                            formattedDate(ad.updatedAt)
                        } </span>
                </FoundOn>
            <Namet onClick={
                () => {
                    
                    window.open(`${ad.redirectUrl}`, '_blank');
                }
            }>
                {/* <img src={
        
                }></img> */}
                <img src="images/twitter.png"></img>
                <h6>show tweet</h6>
                </Namet>
                
            </Options2>
        </CardContainer>
        </>:
        <>
        <CardContainer>
        
            <EmbedContainer>
            <AdHeader>
            
                <Options>
                <FavoriteButton onClick={
                    () => {
                        OnFavClick()
                    }
                }>
                    {
                    ad.favorite ? <img src="images/like.png"></img> : <img src="images/heart.png"></img>
                } </FavoriteButton> 
                 <DeleteButton onClick={
                    () => {
                        OnDelete()
                    }
                }>
                    <img src="images/delete.png"></img>
                </DeleteButton>
                
            </Options>
            </AdHeader>
            <iframe src={ad.adUrl} 
            //   width={
            //     ad.image_width ? ad.image_width : "500"
            // }
            width="100%"
            // height={
            //     ad.image_height ? ad.image_height : "480"
            // }
            height={"300px"}
            style={
                {
                    border: "none",
                    overflow: "hidden",
                    
                }
            }
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen="true"
              ></iframe>
            
            </EmbedContainer>
            <Options2>
                 <FoundOn>
                    Date: <span> {
                            formattedDate(ad.updatedAt)
                        } </span>
                </FoundOn>
            <Namey onClick={
                () => {
                    
                    window.open(`https://${ad.landingDomain}`, '_blank');
                }
            }>
                {/* <img src={
        
                }></img> */}
               <img src="images/youtube.png"></img>
                <h6>show video</h6>
                </Namey>
               
               

            </Options2>
            
        </CardContainer>
        </>
        
        
        
        )
}


export default AdCard
