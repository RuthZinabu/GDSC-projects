import { useState } from "react";

const Form=()=>{
    const [mainTopic,setMainTopic]=useState("")
    const [subTopic,setSubTopic]=useState("")
    const [content,setContent]=useState("")

    const submitHandler = (ev)=>{
        ev.preventDefault()
        const note={
            mainTopic,
            subTopic,
            content,
        };
    console.log(note)
    }

    return(
     <main>
        
<form class="note-form" onSubmit={submitHandler}>
    <h1>Taking Note</h1>
  <input type="text" 
  placeholder="Main topic" 
  className="main-topic" 
  value={mainTopic} 
  onChange={(event=>{
    setMainTopic(event.target.value);
     
})
}/>

  <input type="text" placeholder="Subclass" 
  className="sub-topic" 
  value={subTopic} 
  onChange={(event=>{
    setSubTopic(event.target.value);
  }) 
}/>

<textarea value={content}  
  onChange={(event=>{
    setContent(event.target.value);
}) 
} />

<button>Save</button>
</form>
    </main>
    );
};

export default Form;