import React, { useState } from 'react'

const HashtagContext = React.createContext(null)

function HashtagState({ children }) {
    const [hashtagstate, sethashtagstate] = useState([])
    return (
       <HashtagContext.Provider value={[hashtagstate, sethashtagstate]}>
           {children}
       </HashtagContext.Provider>
    )
}

export {HashtagState, HashtagContext}
