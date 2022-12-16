import { useEffect, useState } from "react";
import { patients } from "../data/patients";
import "../index.css"

type Props = {
  titles: Array<string>;
};

function PatientsTable(props: Props) {
  // permite cargar solo elemento que han cambiado
  // ademas evita errores en caso de que los datos (patients)
  // no se hayan cargado antes que esta componente
  const [patient, setPatient] = useState(patients);
  useEffect(() => {
    setPatient(patients);
  }, []);

  return (
    <>
      <table className="w-full rounded-lg drop-shadow-md" style={{marginTop: "2em"}}>
        {/* cabecera tabla */}
        <thead>
          <tr>
            {props.titles.map((title) => (
              <th key={title} className="py-3">{title}</th>
            ))}
          </tr>
        </thead>
        {/* cuerpo tabla */}
        <tbody>
          {patient.map((p) => (
            <tr className="odd:bg-white even:bg-slate-50">
              <th className="py-3">{p.id}</th>
              <th className="py-3">{p.name}</th>
              <th className="py-3">{p.apat}</th>
              <th className="py-3">{p.amat}</th>
              <th className="py-3">{p.age}</th>
              <th className="py-3">{p.gender}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PatientsTable;
