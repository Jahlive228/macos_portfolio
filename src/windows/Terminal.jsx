import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import WindowControls from "#components/WindowControls";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal"/>
        <h1>Compétences technologiques</h1>
      </div>

      <div className="techstack">
        <p>
          <span>@jahlive % </span>
          <span>show tech stack</span>
        </p>

        <div className="label">
          <p className="w-32">Catégories</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({category, items}) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20}/>
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item} 
                    {i < items.length - 1 && <span>•</span>}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={20}/> 5 sur 5 technologies affichées (100%)
          </p>
          <p className="text-black">
            <Flag size={15} fill="black"/> 
            Temps de chargement: 20ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;