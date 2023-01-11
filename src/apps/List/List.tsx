import { useState, useEffect, Fragment } from 'react';
import { LocalStorageObject } from '../../@core/interfaces/interfaces';

interface ListEntries {
    form: string,
    entries: Array<any>
}

const List = () => {
    const [forms, setForms] = useState<ListEntries[]>([])
    const [header, setHeader] = useState<Array<string>>([])
    useEffect(() => {
        var keys = Object.keys(localStorage);
        let array = [...forms];
        keys.forEach((key) => {
            let item = localStorage.getItem(key)
            if (item !== null) {
                array.push({ form: key, entries: JSON.parse(item) })
            }
        })
        if (array.length > 0) {
            setHeader(Object.keys(array[0].entries[0]))
        }
        setForms(array);
    }, [])
    return (
        <>
            {
                forms.map((item) => {
                    return (
                        <Fragment>
                            <h1>{item.form}</h1>
                            <table>
                                    <thead>
                                    <tr>
                                        {
                                            Object.keys(item.entries[0]).map((row) => {
                                                return <th>{row}</th>
                                            })
                                            // header.map((row) => {
                                            //     console.log(row)
                                            //     return <th>{row}</th>
                                            // })
                                        }
                                    </tr>
                                    </thead>
                                <tbody>
                                    {
                                        item.entries.map((entry) => {
                                            return <tr>
                                                {
                                                    Object.keys(entry).map((key) => {
                                                        return <td>{entry[key]}</td>
                                                    })
                                                }
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </Fragment>)
                })
            }
        </>

    )
}

export default List;