import React from "react";
import MainArea from "../base/MainArea";
import Block from "../components/Block";
import Header from "../components/Header";

function AddPatientPage() {
  return (
    <MainArea>
      <Header title="agregar nuevo paciente" btn={<div></div>} />
      <Block>
        <form action="">
          <p className="text-xl font-semibold">datos básicos</p>
          <p>
            <b>id paciente:</b> <span className="text-slate-400">p-0000</span>
          </p>
          <p>
            <input
              type="text"
              name="name"
              id=""
              placeholder="nombre del paciente"
              className="border-b-2"
            />
          </p>
          <p>
            <input
              type="text"
              name="apat"
              id=""
              placeholder="apellido paterno"
              className="border-b-2"
            />
          </p>

          <p>
            <input
              type="text"
              name="amat"
              id=""
              placeholder="apellido materno"
              className="border-b-2"
            />
          </p>
          <p>
            <input
              type="number"
              name="age"
              id=""
              placeholder="edad"
              className="border-b-2"
            />
          </p>
          <p>
            <input
              type="text"
              name="apat"
              id=""
              placeholder="sexo"
              className="border-b-2 "
            />
          </p>
        </form>
      </Block>
    </MainArea>
  );
}

export default AddPatientPage;
