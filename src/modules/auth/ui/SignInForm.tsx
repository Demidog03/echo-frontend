import { Button, Link, Stack, TextField } from "@mui/material"
import classes from './auth.module.scss'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import useLoginMutation from "../query/useLoginMutation";
import FullscreenLoading from "../../../shared/ui/FullscreenLoading";

interface SignInFormData {
    username: string
    password: string
    twoFACode: string
}

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    twoFACode: yup.string().required('Two-Factor Authentication code is required')
});

function SignInForm() {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm<SignInFormData>({
        defaultValues: {
            username: '',
            password: '',
            twoFACode: ''
        },
        // reValidateMode: 'onBlur',
        // mode: 'all',
        resolver: yupResolver(schema)
    })
    const { data, mutate, isPending } = useLoginMutation()
    const loginData = data?.data

    console.log(loginData)
 
    function submitForm(values: SignInFormData) {
        mutate({
            username: values.username,
            password: values.password,
            twoFACode: values.twoFACode
        })
    }

    function goToSignUp() {
        navigate('/sign-up')
    }

    return (
        // handleSubmit обьязателен
        <form style={{ width: '100%' }} onSubmit={handleSubmit(submitForm)}>
            <Stack className={classes.signInFormContainer} gap={2}>
                <TextField
                    {...register('username')} // чтобы useForm понимал поле email
                    error={Boolean(errors.username)}
                    helperText={errors.username?.message}
                    fullWidth
                    id="username"
                    type="username"
                    label="Username"
                    variant="outlined"
                />
                <TextField
                    {...register('password')} // чтобы useForm понимал поле password
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <TextField
                    {...register('twoFACode')} // чтобы useForm понимал поле password
                    error={Boolean(errors.twoFACode)}
                    helperText={errors.twoFACode?.message}
                    fullWidth
                    id="twoFACode"
                    type="number"
                    label="Two-Factor Authentication code"
                    variant="outlined"
                />
                <Button type="submit" className={classes.submitBtn} disableElevation variant="contained">Submit</Button>
                {/* type="submit" обьязателен */}
                <Link onClick={goToSignUp}>Do not have an account? Sign up</Link>
                <FullscreenLoading open={isPending}/>
            </Stack>
        </form>
    )
}

export default SignInForm
