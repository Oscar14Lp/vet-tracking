import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"


export default function PacientsList() {

    const patients = usePatientStore((state) => state.patients)


    return (
        <div className=" md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className=" font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className=" text-[#790252] font-bold">Pacientes y Citas</span>
                    </p>
                    {patients.map(patient => (
                        <PatientDetails
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className=" font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className=" text-[#790252] font-bold">y aparecerán en este lugar</span>
                    </p>
                    <h3 className=" font-black text-3xl text-center">
                        No hay Pacientes
                    </h3>


                    <img className=" content-center m-auto max-h-48 max-w-48" src="mascotas.png" alt="pets" />



                </>
            )}

        </div>
    )
}
