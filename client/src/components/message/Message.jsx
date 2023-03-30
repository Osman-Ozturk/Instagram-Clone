import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import deutshStrings from "react-timeago/lib/language-strings/de.js";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import axios from "axios";
import "./message.scss";

 const Message = ({ own, message, user, currentChat }) => {
  const [receiverUser, setReceiverUser] = useState();

  const formatter = buildFormatter(deutshStrings);

  const PF = /* process.env.REACT_APP_PUBLIC_FOLDER */ "http://localhost:5000/images/";

  const receiver = currentChat.members.find((e) => e !== user._id);
  useEffect(() => {
    const getReceiver = async () => {
      const res = await axios.get("/users/list"); 
      setReceiverUser(res.data.filter((u) => u._id === receiver));
    };
    getReceiver();
  }, [receiver]);
console.log(currentChat);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-top">
        <img
           src={
            own
              ? user && PF + user.profilePicture
              : receiverUser && PF + receiverUser[0].profilePicture
          } 
          alt=""
          className="message-img"
        />
        <p className="message-text">{message.text}</p>
      </div>
      <div className="message-bottom">
        <TimeAgo date={message.createdAt} formatter={formatter} />
      </div>
    </div>
  );
};


export default Message