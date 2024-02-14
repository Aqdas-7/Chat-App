/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('81535517-3a7f-4e19-bc24-1bca227b444a', props.user.username, props.user.secret);
    // 
  return(
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
  ) 

};

export default ChatsPage;