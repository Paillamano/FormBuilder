import { drawerOptions } from "../../interfaces/interfaces";
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
const options:Array<drawerOptions> = [
    {
        key: 1,
        text: 'Formulario',
        icon: DynamicFormIcon,
        navLink: '/'
    },
    {
        key: 2,
        text: 'Listado',
        icon: FormatListNumberedIcon,
        navLink: '/list'
    }
];

export default options;