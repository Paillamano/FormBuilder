import React from 'react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { AlertColor } from '@mui/material/Alert';
export interface drawerOptions {
    key: number | string,
    text: string,
    icon: OverridableComponent<SvgIconTypeMap>,
    navLink: string
};

export interface MainGridProps {
    component: JSX.Element
}

export interface JsonConfigProps {
    global?: {
        formTitle?: string,
        formTemplate?: string
    }
}

export interface CustomAlertProps {
    severity?: AlertColor,
    message: string
}

export interface TemplateProps {
    id?: string,
    key?: string, 
    type: string,
    name: string,
    label: string,
    value?: any,
    options?: Array<{
        id: string | number,
        value: string,
        label: string
    }>
    validations: Array<{
        type: string
    }>
}

export interface TemplateForm {
    form: Array<TemplateProps>
}

export interface LocalStorageObject {
    [key: string]: any
}