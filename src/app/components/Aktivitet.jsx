import Image from "next/image"

export default function Aktivitet(props) {
    return (<div className="bg-slate-200 text-black p-5 my-5 lora-reg rounded-xl text-xl drop-shadow-2xl">
        <h2 className="text-3xl font-bold mb-3">{props.title}</h2>
        <div className="drop-shadow-lg">
            <Image alt="p" className="rounded mb-3" src={props.img} width={500} height={500} style={{objectFit: "cover"}}/>
            {props.desc}
        </div>
    </div>)
}