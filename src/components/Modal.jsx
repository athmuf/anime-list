import PropTypes from "prop-types";

const Modal = ({ closeModal }) => {
  const handleCloseModal = () => {
    closeModal();
  };
  const setNameCollection = () => {

  }
  return (
    <div className="flex items-center justify-center bg-midnight bg-opacity-50 absolute top-0 left-0 h-screen w-screen z-50">
      <div className="bg-white p-6 rounded">
        <div className="pb-4 font-semibold">New Collection</div>
        <input
          type="text"
        //   value={collectionName}
          onChange={(e) => setNameCollection(e.target.value)}
          placeholder="untitled collection"
          className="border rounded bord px-2"
        />
        <div className="pt-6 flex justify-end text-sm text-magenta">
          <button onClick={handleCloseModal} className="mr-5">
            cancel
          </button>
          <button>create</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
    closeModal: PropTypes.node.isRequired,
  };

export default Modal;
