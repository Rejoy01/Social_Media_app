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
        size='55%'
      >
        <form className='infoForm'>
            <h3>You Info</h3>
            <div>
                <input type="text" className="infoInput" name='FirstName' placeholder='First Name'/>
                <input type="text" className="infoInput" name='LastName' placeholder='Last Name'/>
            </div>
            <div>
            <input type="text" className="infoInput" name='WorksAt' placeholder='Works At'/>
            </div>
            <div>
            <input type="text" className="infoInput" name='LivesIn' placeholder='Lives In'/>
            <input type="text" className="infoInput" name='Country' placeholder='Country'/>
            </div>
            <div>
            <input type="text" className="infoInput" name='RelationStatus' placeholder='RelationShip Status'/>
            </div>
            <div>
                Profile Image
                <input type="file" name='profileImg' />
                Cover Image
                <input type="file" name='coverImg' />
            </div>
            <button className='button infoButton'>Update</button>

        </form>
      </Modal>

      {/* <Button onClick={open}>Open modal</Button> */}
    </>
  );
}
export default ProfileModel
