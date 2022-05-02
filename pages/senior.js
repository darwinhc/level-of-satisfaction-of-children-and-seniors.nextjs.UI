import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const Senior = () => {

    const [values, setValues_] = useState({
        "tiene_servicios_basicos": 1, 
        "calidad_sector": 2,
        "calidad_vivienda": 3, 
        "años_cumplidos": "", 
        "sexo_n": 1,
        "estado_de_salud": 5,
        "estado_civil_n": 2,
        "campesino": 0,
        "estado_de_salud": 2,
        "actualmente_trabaja": 1,
        "satisfaccion_tiempo_libre": 10
    })
    const setValue = (key, value) => setValues_({...values, [key]: value})
    const [prediction, setPrediction] = useState(null);

    const predict = async () => {
        const res = await axios.post("https://modelo-satisfaccion-vida.herokuapp.com/senior", values)
        setPrediction(res.data.prediction)
    }


    return (
        <>
            <h1 className="col-lg-6 offset-lg-3 my-4">Formulario de predicción de adultos mayores</h1>

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
                    type="numbre" placeholder="Años cumplidos"/>

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

                <Form.Label>¿Cual es su estado civil?</Form.Label>
                <Form.Select
                    className="mb-3"
                    onChange={e => {setValue("estado_civil_n", e.target.value)}} 
                    value={values.estado_civil_n}
                >
                    <option value="1">No esta casado y vive en pareja hace menos de dos años</option>
                    <option value="2">No esta casado y vive en pareja hace dos años o más</option>
                    <option value="3">Viudo</option>
                    <option value="4">Separado o divorciado</option>
                    <option value="5">Soltero</option>
                    <option value="6">Casado</option>
                </Form.Select>

                <Form.Label>¿Se considera campesino?</Form.Label>
                <Form.Select
                    className="mb-3"
                    onChange={e => {setValue("campesino", e.target.value)}} 
                    value={values.campesino}
                >
                    <option value="1">Si</option>
                    <option value="0">No</option>
                </Form.Select>

                <Form.Label>¿Actualmente trabaja?</Form.Label>
                <Form.Select
                    className="mb-3"
                    onChange={e => {setValue("actualmente_trabaja", e.target.value)}} 
                    value={values.actualmente_trabaja}
                >
                    <option value="1">Si</option>
                    <option value="0">No</option>
                </Form.Select>


                <Form.Label>Califique el disfrute de su tiempo libre de 1 a 10</Form.Label>
                <Form.Select
                    className="mb-3"
                    onChange={e => {setValue("satisfaccion_tiempo_libre", e.target.value)}} 
                    value={values.satisfaccion_tiempo_libre}
                >
                    <option value="0">0 - Insatisfecho</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10 - Satisfecho</option>
                </Form.Select>
                <div className="col text-center">
                    <Button className="mt-2 " variant="primary" onClick={() => predict()}
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

export default Senior;
