import React from 'react'

const Video=({video, selectedVideo})=>{
    const imageURL= video.snippet.thumbnails.default.url;
    const title= video.snippet.title;
   return (
        <li className="list-group-item" onClick={()=> selectedVideo(video) }>
            <div className="video-list meida">
                <div className="media-left">
                    <img src={imageURL} alt="" className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>

        </li>
    )
}

export default Video