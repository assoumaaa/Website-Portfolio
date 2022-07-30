import { useEffect, useState } from "react";
import ProjectsList from "../projectsList/ProjectsList"
import "./Projects.scss"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  pythonPortfolio,
  cplusplusPortfolio,
} from "../../data";
import LightSpeed from 'react-reveal/LightSpeed';


export default function Projects() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "React",
    },
    {
      id: "mobile",
      title: "Flutter",
    },
    {
      id: "python",
      title: "Python",
    },
    {
      id: "c++",
      title: "C++",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "python":
        setData(pythonPortfolio);
        break;
      case "c++":
        setData(cplusplusPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (

    <div className="projects" id="projects">
      <LightSpeed left cascade>

        <h1><span>Projects</span></h1>
        <ul>
          {list.map((item) => (
            <ProjectsList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img
                src={d.img}
                alt="background-pic"
              />
              <h3>{d.title}</h3>
              <a href={d.github} target="somethingUnique">View Github</a>
            </div>

          ))}
        </div>
      </LightSpeed >

    </div>
  );
}