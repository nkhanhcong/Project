import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/Searchbar'
import _ from 'lodash'

import ListVideo from './components/ListVideo'
import VideoDetails from './components/VideoDetails'


const API_KEY='AIzaSyDmaJNz_Kx6gbqHpx8vtIp2HE-UHO-W1sc'

YTSearch({key: API_KEY, term: 'hoping'},function(data){
    console.log(data);
});

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            videos:[],
            selectedVideo:null
        };
        this.inputSearch("wingsuit")
    }

    inputSearch(term){
        YTSearch({key:API_KEY, term: term},(videos)=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            })
        })        
    }
    render(){
        const videoSearch= _.debounce((term)=>{this.inputSearch(term)},400)
        return(
            <div>
                <SearchBar onInputSearch={videoSearch} />
                <VideoDetails video={this.state.selectedVideo} />
                <ListVideo videos={this.state.videos} onVideoSelected={selectedVideo=>this.setState({selectedVideo})}/>
            </div>
        )
    }
} 


// console.log(SearchBar)

ReactDOM.render(<App />, document.querySelector('body'))