import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { HashtagContext } from '../State/HashtagState';
import {MdOutlineContentCopy, MdClose  } from  'react-icons/md'
import { IoCopy } from 'react-icons/io5'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function ModalComponent() {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '20px',
          maxWidth: 800,
          maxHeight: 500,
          width: '100%',
          height: '100%',
          padding: '10px'
        },
      };

  const [modalIsOpen, setIsOpen] = React.useState(true);
  const [hashtags, sethashtagstate]= React.useContext(HashtagContext)
  const [copied, setcopied] = useState(false)


  // function openModal() {
  //   setIsOpen(true);
  // }

  function closeModal() {
     sethashtagstate([])
     setcopied(false)
    setIsOpen(false);
  }


  const checkForHashtags = () => { hashtags.length > 0 ? setIsOpen(true) : setIsOpen(false)}

  useEffect(() => {
    let mounted = true

    if (mounted) { checkForHashtags()
    }

    return () => mounted === false
  })

    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
     <div className="flex flex-col p-8 justify-between items-center w-full h-full">
           <div>
            <div className="font-sans font-bold text-3xl">Hashtag.io</div>
           <div className="self=start flex flex-row flex-wrap p-2">
             {hashtags.map(hashtag => { return (
               <div className="text-xl cursor-pointer hover:bg-blue-100 rounded-lg font-sans font-semibold tracking-normal p-1">#{hashtag}</div>
             )})}
           </div>
           </div>
           <div className="flex p-2 flex-row items-center">
          <CopyToClipboard text={hashtags.map(hash => { return `#${hash} `})} onCopy={() => setcopied(true)}>
          <button  className=" text-xl p-2 w-full rounded-lg font-sans text-center hover:text-white hover:bg-blue-500 ring-0 hover:ring-2 ">
          {!copied ? <MdOutlineContentCopy/> : <IoCopy />}
          </button>
          </CopyToClipboard>
           <button onClick={closeModal} className=" text-xl p-2 w-full hover:text-white rounded-lg font-sans text-center hover:bg-blue-500 ring-0 hover:ring-2 "><MdClose /></button>
           </div>
     </div>
      </Modal>
    )
}

export default ModalComponent
