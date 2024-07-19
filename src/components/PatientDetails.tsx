import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}


export default function PatientDetails({ patient }: PatientDetailsProps) {

    const deletePatient = usePatientStore((state) => state.deletePatiente)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast('Paciente Eliminado', {
            type: 'error'
        })
    }

    return (
        <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="Nombre" data={patient.name} />
            <PatientDetailItem label="Síntomas" data={patient.symptoms} />
            <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />
            <PatientDetailItem label="Propietario" data={patient.caretaker} />
            <PatientDetailItem label="Email" data={patient.email} />

            <div className="flex flex-col md:flex-row gap-4 justify-around mt-10">
                <button
                    type="button"
                    className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-full cursor-pointer"
                    onClick={() => getPatientById(patient.id)}
                >Editar
                </button>
                <button
                    type="button"
                    className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-full cursor-pointer"
                    onClick={handleClick}
                >Eliminar
                </button>
            </div>
        </div>
    )
}
