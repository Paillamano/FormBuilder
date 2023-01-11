import { Routes, Route } from 'react-router-dom';
import DynamicForm from '../apps/DynamicForm/DynamicForm';
import List from '../apps/List/List';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<DynamicForm/>}/>
            <Route path='/list' element={<List/>}/>
        </Routes>
    );
}

export default Router;