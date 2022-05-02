import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const Child = () => {

    const [values, setValues_] = useState({
        tiene_servicios_basicos: 1, 
        calidad_sector: 2,
        calidad_vivienda: 3, 
        años_cumplidos: "", 
        sexo_n: 1,
        padre_vive: 2,
        madre_vive: 2,
        estado_de_salud: 5
    });

    const [prediction, setPrediction] = useState(null);

    const setValue = (key, value) => setValues_({...values, [key]: value})


    const predict = async () => {
        console.log(values)
        const res = await axios.post("https://modelo-satisfaccion-vida.herokuapp.com/child", values)
        setPrediction(res.data.prediction)
    }

    return (
        <>
            <h1 className="col-lg-6 offset-lg-3 my-4">Formulario de predicción de niños</h1>
            <Form className="col-lg-6 offset-lg-3 bg-gray-200">
                
            <Form.Label>¿Su casa tiene servicios basicos?</Form.Label>
                <Form.Select
                    className="mb-3" 
                    onChange={e => {setValue("tiene_servicios_basicos", e.target.value)}} 
                    value={values.tiene_servicios_basicos}
                >
                    <option value="1">Si</option>
                    <option value="0">No</option>
                </Form.Select>


                <Form.Label>¿Cual es la calidad de su sector</Form.Label>
                <Form.Select
                    className="mb-3"
                    onChange={e => {setValue("calidad_sector", e.target.value)}} 
                    value={values.calidad_sector}
                >
                    <option value="1">Bueno</option>
                    <option value="2">Regular</option>
                    <option value="3">Malo</option>
                </Form.Select>


                <Form.Label>¿Cual es la calidad de su vivienda</Form.Label>
                <Form.Select
                    className="mb-3"
                    onChange={e => {setValue("calidad_vivienda", e.target.value)}} 
                    value={values.calidad_vivienda}
                >
                    <option value="1">Bueno</option>
                    <option value="2">Regular</option>
                    <option value="3">Malo</option>
                </Form.Select>

                <Form.Label>¿Cuantos años cumplidos tiene?</Form.Label>
                <Form.Control
                    className="mb-3"
                    onChange={e => {setValue("años_cumplidos", e.target.value)}} 
                    value={values.años_cumplidos}
                    type="number" placeholder="Años cumplidos"/>

                <Form.Label>¿Cual es su sexo?</Form.Label>
                <Form.Select
                    className="mb-3"
                    onChange={e => {setValue("sexo_n", e.target.value)}} 
                    value={values.sexo_n}
                >
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                </Form.Select>


                <Form.Label>Califique su estado de salud</Form.Label>
                <Form.Select
                    className="mb-3"
                    onChange={e => {setValue("estado_de_salud", e.target.value)}} 
                    value={values.estado_de_salud}
                >
                    <option value="1">Muy bueno</option>
                    <option value="2">Bueno</option>
                    <option value="3">Regular</option>
                    <option value="4">Malo</option>
                </Form.Select>

                <Form.Label>¿Su madre vive actualmente?</Form.Label>
                <Form.Select
                    className="mb-3"
                    onChange={e => {setValue("madre_vive", e.target.value)}} 
                    value={values.madre_vive}
                >
                    <option value="1">Si</option>
                    <option value="0">No</option>
                </Form.Select>

                <Form.Label>¿Su padre vive actualmente?</Form.Label>
                <Form.Select
                    className="mb-3"
                    onChange={e => {setValue("padre_vive", e.target.value)}} 
                    value={values.padre_vive}
                >
                    <option value="1">Si</option>
                    <option value="0">No</option>
                </Form.Select>
                <div className="col text-center">
                    <Button className="mt-2" variant="primary" onClick={() => predict()} 
                        disabled={values.años_cumplidos === ""}>
                        Predecir
                    </Button>
                </div>
            </Form>


            { prediction !== null ? (
                <div className="col-lg-6 offset-lg-3 text-center mt-4">
                   <p>Satisfacción de vida predecida: <b>{prediction}</b></p>
                </div>
            ): null}
        </>
    );
};

export default Child;
