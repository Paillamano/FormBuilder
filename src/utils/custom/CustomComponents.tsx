import React, { ChangeEvent, ChangeEventHandler, SetStateAction } from 'react';
import { Input, InputLabel, InputProps, MenuItem, SelectProps } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TemplateProps, TemplateForm } from "../../@core/interfaces/interfaces";


export function CreateComponent(props: TemplateProps, arrayProps: Array<TemplateProps>, overrideFunction: React.Dispatch<SetStateAction<Array<TemplateProps>>>, index: number) {

    const handleSelectChange = (event: SelectChangeEvent) => {
        {
            let items = [...arrayProps];
            let item = {...items[index]};
            item.name = event.target.value;
            item.value = event.target.value;
            items[index] = item;
            overrideFunction(items)
        }
    }

    const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let items = [...arrayProps];
        let item = { ...items[index] };
        item.value = event.target.value;
        items[index] = item;
        overrideFunction(items)
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        let items = [...arrayProps];
        let item = { ...items[index] };
        item.value = event.target.files !== null ? event.target.files[0].name : '';
        items[index] = item;
        overrideFunction(items);
    }

    switch (props.type) {
        case 'input':
            return <TextField {...props} onChange={handleTextFieldChange}/>
        case 'select':
            return <>
                <InputLabel id={`inputlabel-${props.id}`} key={`inputlabel-${props.id}`}>{props.label}</InputLabel>
                <Select {...props} labelId={`inputlabel-${props.id}`} id={props.id} onChange={handleSelectChange}>
                    {
                        props.options?.map((item) => {
                            return <MenuItem id={`menuitem-${item.value}`} key={`menuitem-${item.value}`} value={item.value}>{item.label}</MenuItem>
                        })
                    }
                </Select>
            </>
        case 'text-area':
            return <>
                <TextField {...props} multiline onChange={handleTextFieldChange}/>
            </>
        case 'date-picker':
            return <>
                <InputLabel id={`inputlabel-${props.id}`} key={`inputlabel-${props.id}`}>{props.label}</InputLabel>
                <Input {...props} type='date' placeholder={props.label} onChange={handleTextFieldChange}/>
            </>
        case 'file':
            return <>
            <InputLabel id={`inputlabel-${props.id}`} key={`inputlabel-${props.id}`}>{props.label}</InputLabel>
                <Input type='file' onChange={handleFileChange}/>
            </>
    }
}