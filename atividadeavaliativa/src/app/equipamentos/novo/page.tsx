"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface IEquipamento {
  id: number;
  tipo: string;
  marca: string;
  modelo: string;
  numero_serie: string;
  data_aquisicao: string;
  status: string;
}

export default function Home() {
  const router = useRouter()

  const [formEquipamento, setFormEquipamento] = useState<IEquipamento>({
    id: 0,
    tipo: "",
    marca: "",
    modelo: "",
    numero_serie: "",
    data_aquisicao: "",
    status: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target.type);

    setFormEquipamento((oldFormData) => ({ ...oldFormData, [name]: value }));
  }

  const doPost = async () => {
    const response = await fetch("http://localhost:3000/equipamentos", {method: "post",headers: {'Content-Type':'application/json'}, body: {...formEquipamento}});
    console.log(response)
    // router.push("/equipamentos");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className=" mb-3">Registro de Novo Equipamento</h1>

      <div>
        <form>
          <div>
            <label>Tipo: </label>
            <input className="text-black rounded-full px-2" type="text" name="tipo" value={formEquipamento.tipo} onChange={handleChange} />
          </div>

          <div>
            <label>Marca: </label>
            <input className="text-black rounded-full px-2" type="text" name="marca" value={formEquipamento.marca} onChange={handleChange} />
          </div>

          <div>
            <label>Modelo: </label>
            <input className="text-black rounded-full px-2" type="text" name="modelo" value={formEquipamento.modelo} onChange={handleChange} />
          </div>

          <div>
            <label>Numero de Serie: </label>
            <input className="text-black rounded-full px-2" type="text" name="numero_serie" value={formEquipamento.numero_serie} onChange={handleChange} />
          </div>

          <div>
            <label>Data de Aquisição: </label>
            <input className="text-black rounded-full px-2" type="date" name="data_aquisicao" value={formEquipamento.data_aquisicao} onChange={handleChange} />
          </div>

          <div>
            <label>Status: </label>
            <input className="text-black rounded-full px-2" type="text" name="status" value={formEquipamento.status} onChange={handleChange} />
          </div>

          <div className="flex justify-between mt-3">
            <button className="bg-white p-1 text-black rounded" type="button" onClick={doPost}>Cadastrar Equipamento</button>
            <Link href={"/equipamentos"}>
              <button className="bg-white p-1 text-black rounded" type="button">Voltar</button>
            </Link>
          </div>
        </form>
      </div>

    </main>
  );
}