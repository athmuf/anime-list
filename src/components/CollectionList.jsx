import { useContext, useState } from "react";
import { DarkModeContext } from "../context";
import List from "../assets/icons/list.svg";
import Plus from "../assets/icons/plus-solid.svg";
import ellipsisWhite from "../assets/icons/ellipsis-white.svg";
import ellipsisMidnight from "../assets/icons/ellipsis-midnight.svg";
import Modal from "./Modal";

const CollectionList = () => {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [showModal, setShowModal] = useState(false);
  const imgPlaceholder = "https://placehold.co/150x250?text=No+Image";
  const imgPlaceholderDark =
    "https://placehold.co/150x250/999999/dddddd?text=No+Image";

  const handleAddCollection = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false)
  }
  const handleEditCollection = () => {};

  return (
    <div className="pt-36 px-40">
      <div className="flex justify-between">
        <h1
          className={`text-${
            darkMode ? "midnight" : "white"
          } text-5xl font-bold pb-2`}
        >
          My Collections
        </h1>
        <button
          className="bg-magenta w-56 p-2 text-white items-center justify-center rounded flex mt-4 mr-2"
          onClick={handleAddCollection}
        >
          <img src={Plus} alt="+" className="w-4 mr-3" />
          <div className="text-base">MY COLLECTION</div>
        </button>
      </div>
      <div className="h-4 w-12 rounded bg-magenta"></div>
      <div className="py-10">
        <div className="w-48 pb-4 pr-2">
          <div className="relative my-4 cursor-pointer">
            <img
              src={darkMode ? imgPlaceholder : imgPlaceholderDark}
              alt="Collection Name"
              className="w-48 object-cover h-full rounded"
            />
            <div className="bg-white rounded-b absolute h-8 left-0 right-0 bottom-0 bg-opacity-50 flex items-center justify-between px-2">
              <img src={List} alt="List" />
              <div className="text-magenta">6 Anime</div>
            </div>
          </div>
          <div
            className={`text-${
              darkMode ? "midnight" : "white"
            } flex justify-between`}
          >
            <div>Collection Name</div>
            <img
              src={darkMode ? ellipsisMidnight : ellipsisWhite}
              alt="Edit"
              className="px-2 cursor-pointer"
              onClick={handleEditCollection}
            />
          </div>
        </div>
      </div>
      {showModal === true && <Modal closeModal={handleCloseModal}></Modal>}
    </div>
  );
};

export default CollectionList;
