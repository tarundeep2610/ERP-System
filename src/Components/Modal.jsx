import React from "react";

const Modal = ({
  size,
  modalHead = "",
  children,
  isOpen,
  setIsOpen,
  closeButton = false,
}) => {
  const sizeType = {
    xxl: "w-[90%] h-[90%] ",
    xl: "w-[96vw] h-[96vh] md:w-[75vw] md:h-[86vh]",
    lg: "w-[94vw] h-[90vh] md:w-[60vw] md:h-[86vh]",
    sm: "w-[92vw]  md:w-[36vw]",
    modal: "w-[94vw] h-[38vh] md:w-[48vw] h-[28vh]",
  };

  return (
    <div
      className={
        isOpen
          ? "z-[4000] flex justify-around place-items-center bg-teal-500 fixed rm-scroll overflow-hidden top-0 bottom-0 right-0 left-0"
          : "hidden"
      }
      style={{ background: "rgba(6, 6, 6, 0.9)" }}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-white  ${sizeType[size]} rounded-md overflow-scroll modal-inner `}
      >
        <div className="sticky bg-primaryLine h-10 top-0 right-0 border-b border-b-teal-500  bg-teal-500">
          <h1 className="text-white font-bold text-lg pt-2 pl-4">
            {modalHead}
          </h1>
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="absolute ml-auto w-fit top-1 right-3 p-1 hover:bg-main bg-transparent cursor-pointer rounded-md transition-all duration-300 shadow-md"
          >
            {/* <UilTimesCircle className={"text-white"} size="24" /> */}
            {/* <svg className='hover:fill-teal-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093  18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" className='dark:fill-white'></path></svg> */}
          </div>
        </div>
        <div className="  overflow-scroll p-2">{children}</div>
        {closeButton && (
          <div className="w-24 absolute bottom-4 right-4">
            <button
              onClick={(e) => {
                setIsOpen((prev) => !prev);
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
