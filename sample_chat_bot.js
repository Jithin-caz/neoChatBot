 // Array of predefined bot responses
 const keywords = ['fuck','bitch','suck','myre',
    "speaker","partner","resource",'event','organizer','regist','mail',
    'contact','navigate','thank','about','yourself','hi','hello','hey','sup','neodawn','help','sorry','ok','how','doing'];
const keywordRes=['','','','','lets find the speakers','lets find the partners','lets find the resources','lets see the events','lets find the organizers',
'registration date will be anounced soon','our mail id is dvfhdgfhg','lets go to the contacts','go to the navbar','Happy to help :)',
'about neo dawn','about neo dawn','','','','',"about neo dawn",
'I am here to help you. Plaese be specific about you request','its alright',':)','i am doing good','i am doing good'];

const hiRes=['hi there','hello user','hii I am Bot','hey, what can I do for you','hi, I am your assistant'];
// Function to handle user message
function handleMessage(userMessage) {
    const chatbox = document.getElementById("chatbox");
    const userBubble = document.createElement("div");
    userBubble.setAttribute('class','userResponse');
    if(count==0){
    userBubble.style.marginTop='3dvw';
    count++;
    }
    else
    userBubble.style.marginTop='.8dvw';

    userBubble.style.color='white';
    userBubble.style.background='#F96151';
    userBubble.style.fontSize='1.3dvw';
    userBubble.style.marginLeft='auto';
    userBubble.style.marginRight='.7dvw';
    userBubble.style.paddingRight='.6dvw';
    userBubble.style.paddingLeft='.6dvw';
    userBubble.style.paddingTop='.5dvw';
    userBubble.style.paddingBottom='.5dvw';
    userBubble.style.display='flex';
    userBubble.style.alignItems='center';
    userBubble.style.marginBottom='.7dvw';
    userBubble.style.borderTopLeftRadius='1dvw';
    userBubble.style.borderBottomLeftRadius='1dvw';
    userBubble.style.borderTopRightRadius='1dvw';
    userBubble.style.minHeight='1.7dvw';
    userBubble.style.width='fit-content';
    userBubble.style.maxWidth='12.35dvw';
    userBubble.style.overflowX='hidden';

    userBubble.textContent = "USER: " + userMessage;
    chatbox.appendChild(userBubble);
   
    userinp=[]
    userinp=userMessage.split(' ');
    var x=userinp.length;
    var botres=document.createElement('div');
    botres.setAttribute('class','botresponse')
    botres.style.color='white';
     text='';
     for(var j=0;j<keywords.length;j++)
     {
        var c=0;
    for(var i=0;i<x;i++)
    {
        if(keywords[j]==userinp[i].toLowerCase() || userinp[i].toLowerCase().includes(keywords[j]))
        {
            c=1; 
            if(j==0||j==1||j==2||j==3)
             curse++;
            else if(j==15||j==16||j==17||j==18)
            {
                text+=hiRes[Math.floor(Math.random()*5)];
                curse=0;
            }
            else
            {
            text+=keywordRes[j];
            curse=0;       
            }
        }
        else if(j==keywords.length-1){
        curse=0;
        }

        if(c==1)
        break;
    }
    if(c==1)
    break;
}
if(curse==1)
   text+='WARNING , use of curse words is not entertained';
if(curse==2)
   {
    document.getElementById('chatbox-container').style.opacity=0;
    document.getElementById('botGetter').style.opacity=0;
   }
if(text=='')
text+="Oops, Can\'t help you.Please check the spellings and try again or go to \'help\' in the navbar";
    
   botres.textContent="BOT: "+text;
   botres.style.marginBottom='1dvw';
  
   botres.style.color='white';
   botres.style.background='#55174F';
   botres.style.fontSize='1.3dvw';
   botres.style.marginLeft='.7dvw';
   botres.style.marginRight='auto';
   botres.style.paddingRight='.6dvw';
   botres.style.paddingLeft='.6dvw';
   botres.style.paddingTop='.5dvw';
   botres.style.paddingBottom='.5dvw';
   botres.style.display='flex';
   botres.style.alignItems='center';
   botres.style.marginBottom='.7dvw';
   botres.style.borderTopRightRadius='1dvw';
   botres.style.borderBottomRightRadius='1dvw';
   botres.style.borderTopLeftRadius='1dvw';
   botres.style.minHeight='1.7dvw';
   botres.style.width='fit-content';
   botres.style.maxWidth='12.35dvw';
    
   chatbox.appendChild(botres);

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to send user message
function sendMessage() {
    document.getElementById('chatbox').style.display='block';
    
    if(count==0)
    document.getElementById('chatbox').innerHTML='';

    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();

    if (userMessage !== "") {
        handleMessage(userMessage);
        userInput.value = "";
    }
}

// Function to handle user pressing Enter key
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
}

const getBot=()=>{
    document.getElementById('chatbox-container').style.opacity=1;
    document.getElementById('botGetter').style.opacity=0;
} 
const closeBot=()=>{
    document.getElementById('chatbox-container').style.opacity=0;
    document.getElementById('botGetter').style.opacity=1;
}
// Attach event listener to handle Enter key press
function enterKey(){
    count=0;
curse=0;
document.getElementById("userInput").addEventListener("keypress", handleKeyPress);
}

setInterval(()=>{
    if(document.getElementById('userInput').value.trim()==''){
      document.getElementById('send-button').style.background="url('hoverSentButtonneodawn.png'), white ";
     

    }
      else
      {
      document.getElementById('send-button').style.background="url('SentButton\ neodawn.png'),white ";

      }
},300);