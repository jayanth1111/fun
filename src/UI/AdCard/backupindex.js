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
    ImageListContainer
} from "./index.styled"
import Swal from 'sweetalert2';

const AdCard = (props) => {
    const {ad, imgBase64Obj, pageId} = props;

    const id = ad.id;
    const OnFavClick = () => {
        props.ModifyFav(ad.id);
    }

    const LeftArrow = () => {
        return (
            <div className="backArrow arrow"
                onClick={
                    (e) => {
                        document.getElementById(`${
                            ad.id
                        }`).scrollBy({top: 0, left: -310, behavior: "smooth"})
                    }
            }>
                {"<"} </div>
        );
    }


    const RightArrow = () => {
        return (
            <div className="nextArrow arrow"
                onClick={
                    (e) => {
                        document.getElementById(`${
                            ad.id
                        }`).scrollBy({top: 0, left: 310, behavior: "smooth"})
                    }
            }>
                {">"} </div>
        );
    }


    const OnDelete = () => {
        props.DeleteAd(ad.id);
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

    const OnAdLibraryClick = () => {
        window.open(`https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&view_all_page_id=${
            pageId[ad.name]
        }&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped&search_type=page&media_type=all`, '_blank');
    }

    return <CardContainer>
        <AdHeader>
            <Logo>
                <img src={
                    imgBase64Obj[ad.logo] ? imgBase64Obj[ad.logo] : ad.logo
                }></img>
            </Logo>
            <Name onClick={
                () => {
                    window.open(`https://www.facebook.com/${
                        ad.pageurl.slice(25, ad.pageurl.slice(25).indexOf("/") + 25)
                    }`, '_blank');
                }
            }>
                <h2> {
                    ad.name
                }</h2>
            </Name>
            <Options>
                <FoundOn>
                    <span> {
                        ad.scrapedOn.split(", ")[0]
                    } </span>
                </FoundOn>
                <AdlibraryButton onClick={
                    () => {
                        OnAdLibraryClick()
                    }
                }>
                    Ad Library
                </AdlibraryButton>
                <DeleteButton onClick={
                    () => {
                        OnDelete()
                    }
                }>
                    <img src="images/delete.png"></img>
                </DeleteButton>
                <FavoriteButton onClick={
                    () => {
                        OnFavClick()
                    }
                }>
                    {
                    ad.fav ? <img src="images/favoriteon.png"></img> : <img src="images/favoriteoff.png"></img>
                } </FavoriteButton>
            </Options>
        </AdHeader>
        {
        ad.video_id ? <iframe src={
                `https://www.facebook.com/plugins/video.php?height=476&href=https://www.facebook.com/${
                    ad.pageurl.slice(25, ad.pageurl.slice(25).indexOf("/") + 25)
                }/videos/${
                    ad.post_id
                }/&show_text=true&width=476&t=0`
            }
            width="476"
            height="591"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"></iframe> : <iframe src={
                `https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/${
                    ad.pageurl.slice(25, ad.pageurl.slice(25).indexOf("/") + 25)
                }/posts/${
                    ad.post_id
                }&show_text=true&width=500`
            }
            width={
                ad.formatdata.image_width
            }
            height={
                ad.formatdata.image_heigh
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
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"></iframe>
    }
         </CardContainer>
}

export default AdCard
