import * as React from 'react';
import { TextField, TextFieldProps, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = Omit<TextFieldProps, 'type'> & {
    toggleAriaLabel?: string;
};

/**
 * Универсальное поле пароля с кнопкой показа/скрытия.
 * Работает и с react-hook-form: можно прокидывать {...register('password')}
 */
const PasswordField = React.forwardRef<HTMLInputElement, Props>(
    ({ toggleAriaLabel = 'toggle password visibility', InputProps, ...rest }, ref) => {
        const [show, setShow] = React.useState(false);

        return (
            <TextField
                {...rest}
                type={show ? 'text' : 'password'}
                inputRef={ref}
                InputProps={{
                    ...InputProps,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShow((s) => !s)}
                                edge="end"
                                aria-label={toggleAriaLabel}
                            >
                                {show ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        );
    }
);

PasswordField.displayName = 'PasswordField';
export default PasswordField;
