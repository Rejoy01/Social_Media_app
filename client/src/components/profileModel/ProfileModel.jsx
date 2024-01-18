import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function ProfileModel({setModalOpened,modalOpened}) {
  const [opened, { open, close }] = useDisclosure(false);

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
      >
        <form className='infoForm'>
            <h3>You Info</h3>

        </form>
      </Modal>

      {/* <Button onClick={open}>Open modal</Button> */}
    </>
  );
}
export default ProfileModel
