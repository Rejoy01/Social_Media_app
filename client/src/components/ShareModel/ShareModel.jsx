import React from 'react'
import PostShare from '../PostShare/PostShare'
import { Modal } from '@mantine/core'

const ShareModel = ({modalOpened,setModalOpened}) => {
  return (
    <>
    <Modal
      opened={modalOpened}
      onClose={()=> setModalOpened(false)}
      title="Authentication"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
        
      }}
      size='55%'
    >
     <PostShare/>
    </Modal>

    {/* <Button onClick={open}>Open modal</Button> */}
  </>
  )
}

export default ShareModel
