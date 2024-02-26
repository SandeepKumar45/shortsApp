import { useState } from 'react';
import './App.css';
import DisplayVideos from './Components/DisplayVideos';

function App() {
  const [index, setIndex] = useState(0)
  
  
  const videosURL = ["https://player.vimeo.com/progressive_redirect/playback/825038052/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=4240d36cf910f709969cc2936efc0ffb19ac5da15543364ef51d08c074de9481", "https://player.vimeo.com/progressive_redirect/playback/910687913/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=2b32cdde960414d71ee080f922eca460a5fb6a4a4fc3c38658239d085bc80ef4", "https://player.vimeo.com/progressive_redirect/playback/910579804/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=5ea7138af95dc72156b3f98df46515e34691608cdf8288df0dfa3dc32cc03ebf", "https://player.vimeo.com/progressive_redirect/playback/911900740/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=e40e590963bee844c840298426daaa5114a84c06500ad9fa096071c0d19ca2b5", "https://player.vimeo.com/progressive_redirect/playback/902458538/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=641298b7c9a70585a57a4517e63eebc3ad6ef8972948da2d98c16ff672f12d2a"]


  function keyPressed(e) {
    if (e.key === "ArrowDown") {
      if (index < videosURL.length - 1) {
        setIndex(index + 1)
      }
    }
    else if (e.key === "ArrowUp") {
      if (index >= 1) {
        setIndex(index - 1)
      }
    }
  }

  

  return (
    <div tabIndex={0} onKeyDown={keyPressed} className='h-screen bg-black flex justify-center items-center'>
       <DisplayVideos url={videosURL[index]} />
    </div>
  );
}

export default App;
