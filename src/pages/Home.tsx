import { FormEvent, useState } from "react";
import Button from "../component/ui/Button";
import Modal from "../component/ui/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleClose();
  };

  return (
    <div className="h-72 w-full flex justify-center items-center">
      <Button onClick={() => setIsOpen((prev) => !prev)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Header>
          <h4 className="font-bold">Enter Your Information: </h4>
          <Modal.CloseModal></Modal.CloseModal>
        </Modal.Header>
        <div className="p-5">
          <form onSubmit={handleSubmit} className="w-full">
            <label className="font-bold" htmlFor="name">
              Name :
            </label>
            <input
              className="border-2 py-1 px-2 w-full mb-2"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <label className="font-bold" htmlFor="email">
              Email :
            </label>
            <input
              className="border-2 py-1 px-2 w-full mb-2"
              type="text"
              name="email"
              placeholder="Your Email"
            />
            <label className="font-bold" htmlFor="phone">
              Phone Number :
            </label>
            <input
              className="border-2 py-1 px-2 w-full mb-2"
              type="text"
              name="phone"
              placeholder="Your PhoneNumber"
            />
            <Button className="w-full transition-none">Submit</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
