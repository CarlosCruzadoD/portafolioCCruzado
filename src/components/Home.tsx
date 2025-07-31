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
          <button className="shadow">{btn}</button>
          <button className="shadow">Github</button>
        </div>
      </div>
    </section>
  );
};
