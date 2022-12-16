import MainArea from "../base/MainArea";
import Btn from "../components/Btn";
import Header from "../components/Header";
import { AiOutlineUserAdd } from "react-icons/ai";
import PatientsTable from "../components/PatientsTable";
import { Link, Outlet } from "react-router-dom";

function PatientsPage() {
  // titulos de la cabecera de la tabla
  let titles: Array<string>;
  titles = [
    "id paciente",
    "nombre",
    "apellido paterno",
    "apellido materno",
    "edad",
    "sexo",
  ];
  return (
    <MainArea>
      <Header
        title="pacientes"
        btn={
          <Link to={"/AddPatient"}>
            <Btn
              text="agregar paciente"
              icon={<AiOutlineUserAdd style={{ marginRight: ".5em" }} />}
            />
            <Outlet />
          </Link>
        }
      />
      <PatientsTable titles={titles} />
    </MainArea>
  );
}

export default PatientsPage;
