//React imports
import React, { useState, useEffect, Fragment } from 'react';
//Interfaces import
import { JsonConfigProps, LocalStorageObject, TemplateForm, TemplateProps } from '../../@core/interfaces/interfaces';
//Config file imports
import json from './config.json';
//Custom Alert import
import CustomAlert from '../../@core/components/Snackbar/Snackbar';
import FormControl from '@mui/material/FormControl';
import { Form } from 'react-router-dom';
//utils imports
import { CreateComponent } from '../../utils/custom/CustomComponents';
import { Button, Grid } from '@mui/material';

let jsonFile: JsonConfigProps = json;
const initForm: TemplateForm = {
    form: []
};
const initProps: Array<TemplateProps> = [];

const DynamicForm = () => {
    const [template, setTemplate] = useState<TemplateForm>(initForm);
    const [props, setProps] = useState<Array<TemplateProps>>(initProps);
    const [formTitle, setFormTitle] = useState('');
    const [formTemplate, setFormTemplate] = useState('');
    const [error, setError] = useState({ status: false, message: '' });

    useEffect(() => {
        if (jsonFile.global === undefined) {
            setError({
                status: true,
                message: 'Entorno global no definido'
            });
            // <CustomAlert severity='error' message='Entorno global no definido' />
        }

        if (jsonFile.global?.formTemplate === undefined) {
            setError({
                status: true,
                message: 'Plantilla de formulario no definida'
            });
        } else {
            setFormTemplate(jsonFile.global.formTemplate);
        }

        if (jsonFile.global?.formTitle === undefined) {
            setError({
                status: true,
                message: 'Título de formulario no definido'
            });
        } else {
            setFormTitle(jsonFile.global.formTitle);
        }
    }, [])

    useEffect(() => {
        if (formTemplate !== '') {
            setTemplate(require(`./templates/${formTemplate}`));
        }
    }, [formTemplate])

    useEffect(() => {
        setProps(template.form)
    }, [template])

    const handleSubmit = () => {
        const formData = window.localStorage.getItem(formTemplate);
        if (formData !== null) {
            const jsonParsed = JSON.parse(formData);
            var jsonObj: LocalStorageObject = {}
            props.forEach((item) => {
                jsonObj[item.label] = item.value
            })
            jsonParsed.push(jsonObj);
            window.localStorage.setItem(formTemplate, JSON.stringify(jsonParsed));
        } else {
            var data:Array<any> = [];
            var jsonObj: LocalStorageObject = {}
            props.forEach((item) => {
                jsonObj[item.label] = item.value
            })
            data.push(jsonObj);
            window.localStorage.setItem(formTemplate, JSON.stringify(data))
        }
    }

    return (
        error.status ?
            <CustomAlert severity='error' message={error.message} />
            :
            <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={16} style={{ marginTop: '50px' }}>
                {
                    props.map((item, index) => {
                        item.id = String(item.id)
                        return <Grid item xs={16} key={item.id}>
                            <FormControl style={{ width: '200px', height: 'auto' }} key={`formcontrol-${item.id}`}>
                                {
                                    CreateComponent(item, props, setProps, index)
                                }
                            </FormControl>
                        </Grid>
                    })
                }
                <Grid item xs={16} key='formButton'>
                    <FormControl>
                        <Button variant='contained' onClick={handleSubmit} >Guardar</Button>
                    </FormControl>
                </Grid>
            </Grid>
    );
}

export default DynamicForm;