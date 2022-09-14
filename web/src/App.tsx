import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';

export default function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black">Seu duo está aqui</h1>
    </div>
  )
}
