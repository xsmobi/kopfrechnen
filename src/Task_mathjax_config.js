import {React} from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";
const style={
    taskheader:`text-center prose prose-2xl`,
    tasktext: `prose prose-sm`,
    subheader: `prose prose-lg font-semibold`
}

function Task({ task, showHelp, showResult, showExplainer }) {
    const { text, help, answer, explainer } = task;
    //const headerClassName = style[headerclass]

    

    const config = {
      loader: { load: ["input/asciimath"] },
      "fast-preview": {disabled: true}
    };
    
    return (
      <MathJaxContext
      version={2}
      config={config}
      onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
>
    <div className="Task">

        <h3><MathJax inline dynamic>{text}</MathJax></h3>
        
        {showHelp && <MathJax inline dynamic><div className={style.tasktext} dangerouslySetInnerHTML={{ __html: help }} /></MathJax>}
        {showResult && <MathJax><h3>{answer}</h3></MathJax>}
        {showExplainer && <MathJax><div  className={style.tasktext} dangerouslySetInnerHTML={{ __html: explainer }} /></MathJax>}
    </div>
    </MathJaxContext>
    );
}
export default Task;

function getRandomInt(n) { 
  return Math.floor(Math.random() * n);
}

