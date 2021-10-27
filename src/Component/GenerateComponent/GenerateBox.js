import React, { useContext, useState } from 'react'
import { HashtagContext } from '../../State/HashtagState'
import axios from 'axios'

function GenerateBox() {

    const [caption, setCaption] = useState('')
    const [loading, setloading] = useState(false)

    //eslint-disable-next-line
    const [hashtagstate, sethashtagstate] = useContext( HashtagContext )


    const HandlehashtagGenerator = (e) => {
          e.preventDefault()
          if(caption === '') return alert('caption is empty')
          setloading(true)
         axios({
             method: 'POST',
             url: 'https://hashtaggenerator-backend.herokuapp.com/hashtaggenerator',
             headers: {"Access-Control-Allow-Origin": "*",  "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS"},
             data: { caption }
         }).then(response => {
             //console.log(response)
             const { data } = response
            //  console.log(data.hashtags)
             sethashtagstate(data.hashtags)
             setloading(false)
         }).catch(err => {
             alert(err)
            //  console.log(err.response)
            //  console.log(err.message)
             setloading(false)
         })}


    return (
        <div className="p-8 w-full max-w-screen-sm h-64 sm:h-96">
        <div className="rounded-lg shadow-md p-4 w-full h-full bg-white backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-400">
         
          <form onSubmit={HandlehashtagGenerator}>
              <div className="h-28 sm:h-60"><textarea value={caption} onChange={(e) => {setCaption(e.target.value)}} className="w-full h-full focus:outline-none font-sans font-medium" name="caption"  placeholder="Enter caption here" /></div>
              <button onClick={HandlehashtagGenerator} className="p-2 rounded-xl bg-blue-500 text-white text-xl font-sans font-medium w-full">{loading ? <div className="animate-pulse text-md">loading...</div> : '# Generate hashtag'}</button>
          </form>

        </div>
        </div>
    )
}

export default GenerateBox
