import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetails";
class App extends React.Component {
  

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }


state = { videos: [], selectedVideo: null };

  componentDidMount(){
      this.onTermSubmit('buildings');
  }

  //fetchium lista de
  onTermSubmit = async (term) => {
    //console.log(term);
    //asyncornise request
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    //console.log(response);
    this.setState({ 
        videos: response.data.items,
        selectedVideo: response.data.items[0]
    });
    //console.log(this.state.videos);
  };


  onVideoSelect = (video) => {
    //console.log('From the App!', video);
    this.setState({ selectedVideo: video });
  };
}

export default App;