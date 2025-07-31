import './styles/home.css'
interface HomeProps {
  title: string;
  desc: string;
  btn: string;
}
export const Home = ({title, desc, btn}:HomeProps) => {
  return (
    <section className="home p-5">
      <div className="home-info max-w-[1200px] w-full min-h-[540px] flex flex-col justify-center items-center p-5">
        <h2 className="font-light text-center">
          {title} <strong className="font-bold">Carlos Cruzado</strong>
        </h2>
        <h3 className="font-light"></h3>
        <span className="font-light max-w-[500px] text-center mb-10">
          {desc}
        </span>
        <div className="main-btn flex flex-wrap">
          <a href='../assets/downloads/Currículum Vitae  - Carlos Cruzado.pdf'
             download="Cv-Cruzado Diaz,Carlos.pdf" className="shadow">{btn}</a>
          <a href='https://github.com/CarlosCruzadoD' target='_blank' className="shadow">Github</a>
        </div>
      </div>
    </section>
  );
};
