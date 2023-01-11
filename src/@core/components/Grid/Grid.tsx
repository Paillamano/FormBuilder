import { styled } from '@mui/material/styles';
import { Paper, Box, Grid } from '@mui/material';

import { MainGridProps } from '../../interfaces/interfaces';

import MiniDrawer from '../Drawer/Drawer';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    paddingBottom: '20px',
    paddingTop: '64px',
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

const MainGrid = ({ component }: MainGridProps) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item>
                    <Item><MiniDrawer /></Item>
                </Grid>
                <Grid item xs>
                    <Item>
                        {component}
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainGrid;