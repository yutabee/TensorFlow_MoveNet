import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react'
import { storage } from '../firebase';

export const useVideoLoading = () => {
  const [loading, setLoading] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
    console.log('useVideoLoading');    

    useEffect(() => {
    setLoading(true);  //loading start
    getDownloadURL(ref(storage, 'gs://kickpose-34d3b.appspot.com/IMG_3469.mov'))
        .then((url) => {
            console.log('videoloading');
        setVideoSrc(url);  //stateをset  
        // console.log(url);
      }).catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);  //end loading
    })
  }, []);

    return { loading, videoSrc };
}
