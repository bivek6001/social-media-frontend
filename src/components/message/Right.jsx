import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BiSolidMessageRounded } from "react-icons/bi";
import useFetchMessages from "../../hooks/useFetchMessages";
import { setMessages } from "../../redux/chatSlice";
import useRTM from "../../hooks/useRTM";
axios.defaults.withCredentials = true;
const Right = () => {
  useFetchMessages();
  useRTM();

  const scroll = useRef();
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const messages = useSelector((state) => state.chat.messages);
  const authUser = useSelector((state) => state.user.loggedinUser);
  const onlineUsers = useSelector((state) => state.chat.onlineUsers);

  const [message, setMessage] = useState("");
  useEffect(() => {
    scroll?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);
  useEffect(()=>{

  },[selectedUser])
  
  
  
  
  
  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://social-media-backend-8ow4.onrender.com/message/send/${selectedUser?._id}`,
        {
          message,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.data.success) {
        dispatch(setMessages([...messages, response?.data.newMessage]));
        setMessage("");
      }
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  return (
    <div className="w-[60%] bg-[#0B141A] relative ">
      {selectedUser ? (
        <>
          <div className="person user-info relative bg-[#202C33] w-[100%] h-[70px] flex justify-start items-center gap-3 px-4">
            <div className="img relative">
              <img
                src={selectedUser?.profilePicture}
                className="w-[50px] h-[50px] rounded-full object-cover"
                alt="user-chat-dp"
              />
            </div>

            <span className="flex p-2 items-center justify-center text-white font-medium gap-1">
              {" "}
              <div
                className={`h-[10px] w-[10px]  ${
                  onlineUsers?.includes(selectedUser?._id)
                    ? "bg-green-500"
                    : "bg-red-600"
                }  rounded-full`}
              ></div>{" "}
              {onlineUsers?.includes(selectedUser?._id) ? "online" : "offline"}{" "}
            </span>
            <div className="username absolute right-0 p-3 font-medium text-white flex justify-between items-center ">
              {selectedUser?.username}{" "}
            </div>
          </div>

          {/* messages */}

          <div className="message px-2 flex flex-col   gap-3 overflow-y-scroll h-[75%] p-2 no-scrollbar">
            {messages?.map((message, i) => {
              return (
                <div
                  ref={scroll}
                  className={`message-bubble   ${
                    authUser?._id !== message.sender ? "self-start" : "self-end"
                  } ${
                    authUser?._id === message.sender
                      ? "bg-[#0095F6]"
                      : "bg-[#202C33]"
                  } text-white rounded-md max-w-[200px] text-wrap p-2 `}
                >
                  {message.message}
                </div>
              );
            })}
          </div>

          {/* input */}

          <div className="input absolute bottom-0 bg-[#202C33] w-[100%] h-[12%] flex justify-center items-center">
            <form
              method="post"
              className="w-[100%] p-2 flex justify-center items-center"
              onSubmit={sendMessage}
            >
              <input
                type="text"
                placeholder="Type a message"
                className="bg-[#2A3942] text-white outline-none w-[90%] p-2 rounded-md"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button className="w-[10%] flex items-center  justify-center ">
                <IoSend className="text-[#838E96]" size={"30px"} />
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className=" text-white h-[100%] w-[100%] flex justify-center items-center flex-col">
          <BiSolidMessageRounded size={"50px"} />
          <h1 className="font-bold text-3xl">Lets start a Conversation</h1>
          <p className="font-medium text-xl">Send a message</p>
        </div>
      )}
    </div>
  );
};

export default Right;
