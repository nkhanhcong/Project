import React from 'react'
import Video from './Video'
const ListVideo= (props)=>{
    const listVideo=  props.videos.map((video)=>{
          return   <Video key={video.etag} video={video} selectedVideo={props.onVideoSelected}/>
        })
    
    
    return (
        <ul className="col-md-4 list-group">
          {listVideo} 
        </ul>
    )
}

export default ListVideo;