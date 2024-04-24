"use client"

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface IPostParams extends Params {
    id: number;
}

export default function Post() {
    const params: IPostParams = useParams()
    const equipamento = fetchEquipamento(params.id)
    console.log(equipamento)
    const [formDataUser, setFormDataUser] = useState<IEquipamento>();

    return (
        <main>
        </main>

    )
}

interface IEquipamento {
    id: number;
    tipo: string;
    marca: string;
    modelo: string;
    numero_serie: string;
    data_aquisicao: string;
    status: string;
}

async function fetchEquipamento(id: number): Promise<IEquipamento> {
    const data = await fetch("http://localhost:3000/equipamentos/" + id)
    const json = await data.json()
    return json
}