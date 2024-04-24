import Image from "next/image";
import Link from "next/link";

interface IEquipamento {
  id: number;
  tipo: string;
  marca: string;
  modelo: string;
  numero_serie: string;
  data_aquisicao: string;
  status: string;
}

async function fetchEquipamentos(): Promise<IEquipamento[]> {
  let data = await fetch("http://localhost:3000/equipamentos")
  let json = await data.json()
  return json
}

export default async function Home() {
    let equipamentos = await fetchEquipamentos()
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lista de Equipamentos</h1>
        <div className="grid flex flex-col grid-cols-3">
            {equipamentos && equipamentos.map((equipamento: IEquipamento) => {
                return (
                    <Link href={`/equipamentos/${equipamento.id}/alterar`}>
                            <div key={equipamento.id} className="m-2 p-2 rounded-lg bg-white text-black">
                                <div className="text-end">
                                    <div className="font-bold border-b-2 border-b-slate-950">{equipamento.modelo}</div>
                                    <div>{equipamento.tipo}</div>  
                                    <div>{equipamento.marca}</div>
                                    <div>{equipamento.numero_serie}</div>
                                    <div>{equipamento.data_aquisicao}</div>
                                    <div>{equipamento.status}</div>
                                </div>
                            </div>
                        </Link>
                )
            })}
        </div>
        <Link href={"equipamentos/novo"}>
            <button className="bg-white text-black p-2 rounded">Novo Equipamento</button>
        </Link>
    </main>
  );
}