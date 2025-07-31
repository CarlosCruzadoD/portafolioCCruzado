import italy from "../../assets/language/italy-64.png";
import spain from "../../assets/language/spain-64.png";
import eeuu from "../../assets/language/english-64.png";
import '../styles/language.css';
import { useEffect, useState } from "react";
export const Language = () => {
  const [leng, setLeng] = useState('Español');
  const [session, setSession] = useState(sessionStorage.getItem('leng') || 'es');

  useEffect(() => {
    if(session == 'es') setLeng('Español');
    if(session == 'en') setLeng('English');
  }, [sessionStorage.getItem("leng")]);
  const idiomas = [
    { name: "Español", code: "es", img: spain },
    { name: "English", code: "en", img: eeuu },
    { name: "Italiano", code: "it", img: italy },
  ];
  const handleLanguageChange = (code: string) => { 
    sessionStorage.setItem("leng", code);
    window.location.reload();
  }
  return (
    <div className="flex-1 flex items-center justify-center relative ml-10">
      <div className="trigger p-6 rounded-3xl cursor-pointer shadow-lg">
        <span className="flex justify-center text-xm items-center">
          {leng}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
          </svg>
        </span>
        <ul className="lista">
          {idiomas.map((idioma) => (
            <li value={idioma.code}>
              <button onClick={() => handleLanguageChange(idioma.code)} className="flex items-center gap-2">
                <img src={idioma.img} alt="" />
                {idioma.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
