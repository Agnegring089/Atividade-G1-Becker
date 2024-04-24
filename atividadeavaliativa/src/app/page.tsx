import Image from "next/image";
import Link from "next/link";

interface IEquipamento {
  id: number;
  tipo: string;
  marca: string;
  modelo: string;
  numero_serie: string;
  data_aquisicao: Date;
  status: string;
}

async function fetchEquipamentos(): Promise<IEquipamento[]> {
  let data = await fetch("http://localhost:3000")
  let json = await data.json()
  return json
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Central de Equipamentos</h1>
      <Link href={"equipamentos"}>
        <button className="bg-white text-black p-2 rounded">Lista de Equipamentos</button>
      </Link>
      <Link href={"equipamentos/novo"}>
        <button className="bg-white text-black p-2 rounded">Novo Equipamento</button>
      </Link>
    </main>
  );
}