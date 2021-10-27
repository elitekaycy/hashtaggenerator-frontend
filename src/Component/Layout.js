import React from 'react'
//import hashimg from '../image/hashpg.png'
// import hashsv from '../image/hashsv.svg'
//import hashsv1 from '../image/hashsv1.svg'
// import hashsv2 from '../image/hashsv2.svg'
// import hashsv3 from '../image/hashsv3.svg'


// This is the layout page
function Layout({ children }) {
    return (
        <div className="flex flex-col p-5 w-screen h-screen items-center justify-center bg-blue-50" >
        {children}
        </div>
    )
}

export default Layout
