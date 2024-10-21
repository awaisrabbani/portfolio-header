import { Drawer } from "flowbite-react";
import { RxCross2 } from "react-icons/rx";

export default function Canvas(prop) {
  const { isOpen, setIsOpen, children } = prop;
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Drawer className="bg-gray-700 transition duration-700" open={isOpen} onClose={handleClose}>
        <Drawer.Items>
          <div className="text-white text-right">
            <button className="cross-icon" onClick={() => setIsOpen(false)}>
              <RxCross2 size={30} />
            </button>
          </div>
          {children}
        </Drawer.Items>
      </Drawer>
    </>
  );
}
