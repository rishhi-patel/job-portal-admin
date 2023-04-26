// IMPORTS
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
//APP
export default function CustomInput(props) {
    return (
        <Box>
            <label style={{ fontWeight: 'bold' }} htmlFor={props.id}>
                {props.title}
            </label>
            <TextField
                required
                fullWidth
                margin="dense"
                size="small"
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                disabled={props.dis}
                // required={props.req}
                type={props.type}
                InputProps={props.InputProps}
                select={props.select}
                {...props}
            >
                {props.content}
            </TextField>
        </Box>
    );
}
