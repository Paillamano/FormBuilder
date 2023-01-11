import './App.css';
import MainGrid from './@core/components/Grid/Grid';
import DynamicForm from './apps/DynamicForm/DynamicForm';
import Router from './routing/router';

function App() {
    
    return (
        <MainGrid component={<Router/>}/>
    );
}

export default App;
