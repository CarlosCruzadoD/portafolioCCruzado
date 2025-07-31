import SectionSvg from "./SectionSvg";
import './styles/contact.css';

interface ContactProps {
  title: string;
  email: string;
  name: string;
  message: string;
  btn: string;
}

const Contact = (prop: ContactProps) => {
  return (
    <section className="contact ">
      <div
        id="contact"
        className="max-w-[1200px] mx-auto py-40 flex flex-col p-5 "
      >
        <div className="title-contact ">
          <SectionSvg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m20,2H4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h6.72l4.76,2.86c.16.09.34.14.51.14s.34-.04.49-.13c.31-.18.51-.51.51-.87v-2h3c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2Zm0,14h-4c-.55,0-1,.45-1,1v1.23l-3.49-2.09c-.16-.09-.33-.14-.51-.14h-7V4h16v12Z"></path>
            </svg>
          </SectionSvg>
          <h2 className="font-bold">{prop.title}</h2>
        </div>
        <div className="overlay-contact grid mt-10 gap-y-20 ">
          <div
            className="row-1 col-1 flex flex-col gap-y-5 w-full"
            data-animation="slide-right"
          >
            <div className="red-social-contact ">
              <div className="flex flex-wrap ">
                <span> {prop.email} </span>
                <span> carlos17cruzado@gmail.com </span>
              </div>
              <div className="flex flex-wrap">
                <span className=""> Linkedin </span>
                <span> Carlos Cruzado Diaz </span>
              </div>
            </div>
            <div className="ubicacion  w-full">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m12 17 1-2V9.858c1.721-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S8 3.794 8 6c0 1.858 1.279 3.411 3 3.858V15l1 2z"></path>
                  <path d="m16.267 10.563-.533 1.928C18.325 13.207 20 14.584 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.416 1.675-2.793 4.267-3.51l-.533-1.928C4.197 11.54 2 13.623 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-2.377-2.197-4.46-5.733-5.437z"></path>
                </svg>
                Lima - Perú
              </span>
            </div>
            <div className="btn-contact">
              <a
                href="https://www.linkedin.com/in/carloscruzadodiaz/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                </svg>
              </a>
              <a href="https://github.com/CarlosCruzadoD" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </svg>
              </a>

              <a href="mailto:carlos17cruzado@gmail.com" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=937482599"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="row-2 col-1 lg:row-1 lg:col-3"
            data-animation="slide-left"
          >
            <form>
              <div className="grid gap-4">
                <div className="form-contact row-1">
                  <label htmlFor="name">{prop.name}</label>
                  <input type="text" id="name" placeholder="Pablo Gutierrez" />
                </div>
                <div className="form-contact md:row-1">
                  <label htmlFor="email">{prop.email}</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div className="form-contact">
                <label htmlFor="message">{prop.message}</label>
                <textarea id="message" placeholder="Message"></textarea>
              </div>

              <button type="submit">{prop.btn}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
