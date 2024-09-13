import Image from "next/image";
import Aktivitet from "./components/Aktivitet";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <Link href="https://www.instagram.com/droemmeudvalget.cg/"><Image alt="logo" src={"/logo.png"} width={800} height={800} /></Link>
      <div className="bg-green-800 w-full my-16 lg:my-0 lg:w-1/4 p-8 rounded-xl text-2xl lora text-white leading-relaxed">
        <h1 className="text-4xl text-center items-center justify-center mb-8 calistoga">Hvad er Drømmeudvalget?</h1>
        <p><b>Drømmeudvalget</b> er nok det fedeste elev-udvalg på <a className="text-yellow-400 underline italic  " href="https://cg-gym.dk">Christianshavns Gymnasium</a>!</p>
        <p>Drømmeudvalgets mål er at spræde liv og glæde på CG igennem deres mange aktiviter udvalget står for!</p>
        <p>Du kan læse mere om Drømmeudvalgets aktiviter nedenfor.</p>
        
        <div className="flex w-12 mx-auto mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
      
      <div className="bg-rose-600 my-12 w-full lg:w-1/4 p-5 rounded-xl text-2xl">
        <h1 className="text-4xl text-center items-center justify-center mb-8 font-bold text-black cali">Aktiviteter</h1>
          <Aktivitet title="Søjlecafée!" img="/cafe/2xstorm.png"desc={<p>I løbet af året afholder Drømmeudvalget <b>Søjlecaféer</b>, som er caféer, der afholdes særligt for hver studieretning.</p>}/>
          <Aktivitet title="Santa Lucia" img="/SantaLucia/SantaLucia.png" desc={<p>Engleklang og smurte kroppe, hvad mere kunne man ønske sig til jul? Drømmeudvalget står hvert December måned for at levere det fedeste <b>Luciaoptog</b>.</p>} />
          <Aktivitet title="Valentinshilsner" img="/Valentin/2g.png" desc={<p>Drømmeudvalget sørger for kærligheden! For kun <span className="underline font-bold italic">5 kr.</span> kan du frem til Valentinsdag sende en kærlighedsfe ud med en personlig hilsen og en slikkepind til dit crush eller en ven.</p>} />
      </div>

      <div className="bg-sky-800 text-sm text-white w-full lg:w-1/4 p-5 rounded-xl text-2xl flex flex-col items-center space-between">
      <h1 className="text-2xl  mb-5">Følg Drømmeudvalget på IG</h1>
        <Link href="https://www.instagram.com/droemmeudvalget.cg/"><Image className="rounded-full mb-2" alt="logo" src={"/ig.png"} width={200} height={200} /></Link>
        <p className="text-lg">Der meget mere om Drømmeudvalget på Instagram</p>
      </div>

      <div className="bg-slate-600 my-12 text-sm w-full lg:w-1/4 p-5 rounded-xl text-2xl flex flex-row space-between">
        <a>Christianshavns Gymnasium, Prinsessegade 35, 1422 København K</a>
        <p><i>Lavet af Aksel fra 2.K som ansøgning til Drømmeudvalget.</i></p>
      </div>
    </div>
  );
}
