import { Button, Dialog, DialogTitle, FormControl, FormHelperText, InputLabel, Link, MenuItem, Select, Stack, TextField } from "@mui/material"
import classes from './auth.module.scss'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { Genders } from "../../../types";
import useRegisterMutation from "../query/useRegisterMutation";
import FullscreenLoading from "../../../shared/ui/FullscreenLoading";
import { useEffect, useState } from "react";

const signUpFormSchema = yup.object().shape({
    username: yup.string()
        .min(6, 'Username must be at least 6 characters')
        .max(30, 'Username must be max 30 characters')
        .required('Username is required'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    age: yup.number().min(0, "Age could not be below 0").max(150, "Maximum age is 150").required("Age is required"),
    gender: yup.mixed<Genders>()
        .oneOf(['male', 'female', 'other'], 'Gender is required')
        .required('Gender is required'),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords does not match').required('Please confirm password')
});

interface SignUpFormData {
    username: string
    firstName: string
    lastName: string
    age: number
    gender: Genders
    email: string
    password: string
    confirmPassword: string
}

function SignUpForm() {
    const navigate = useNavigate()
    const { handleSubmit, register, formState: { errors,isValid } } = useForm<SignUpFormData>({
        defaultValues: {
            username: '',
            firstName: '',
            lastName: '',
            age: undefined,
            gender: undefined,
            email: '',
            password: '',
            confirmPassword: '',
        },
        mode: 'all',
        resolver: yupResolver(signUpFormSchema)
    })
    const { data, mutate, isPending } = useRegisterMutation() // mutate === registerApi
    const registerData = data?.data
    const [isOpen, setIsOpen] = useState(false)

    function submitForm(values: SignUpFormData) {
        const { age, email, firstName, gender, lastName, password, username } = values
        mutate({ age, email, firstName, gender, lastName, password, username })
    }

    function goToSignIn() {
        navigate('/sign-in')
    }

    function handleClose() {
        setIsOpen(false)
    }

    useEffect(() => {
        if(registerData?.qrCode) {
            setIsOpen(true)
        }
    }, [registerData])

    return (
        <form style={{ width: '100%' }} onSubmit={handleSubmit(submitForm)}>
            <Stack className={classes.signInFormContainer} gap={2}>
                <TextField
                    error={Boolean(errors.username)}
                    helperText={errors.username?.message}
                    {...register('username')}
                    fullWidth
                    id="username"
                    type="text"
                    label="Username"
                    variant="outlined"
                />
                <TextField
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                    {...register('firstName')}
                    fullWidth
                    id="firstName"
                    type="text"
                    label="First Name"
                    variant="outlined"
                />
                <TextField
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName?.message}
                    {...register('lastName')}
                    fullWidth
                    id="lastName"
                    type="text"
                    label="Last Name"
                    variant="outlined"
                />
                <TextField
                    error={Boolean(errors.age)}
                    helperText={errors.age?.message}
                    {...register('age')}
                    fullWidth
                    id="age"
                    type="number"
                    label="Age"
                    variant="outlined"
                    slotProps={{ htmlInput: { min: 0, max: 150 } }}
                />
                <FormControl error={Boolean(errors.gender)} fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        {...register('gender')}
                        label="Gender"
                    >
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                        <MenuItem value={'other'}>Other</MenuItem>
                    </Select>
                    <FormHelperText>{errors.gender?.message}</FormHelperText>
                </FormControl>
                <TextField
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    {...register('email')}
                    fullWidth
                    id="email"
                    type="text"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                    {...register('password')}
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <TextField
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword?.message}
                    {...register('confirmPassword')}
                    fullWidth
                    id="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    variant="outlined"
                />
                <Button disabled={!isValid} loading={isPending} type="submit" className={classes.submitBtn} disableElevation variant="contained">Submit</Button>
                <Link onClick={goToSignIn}>Already have an account? Sign in</Link>
                <FullscreenLoading open={isPending} />
                <Dialog onClose={handleClose} open={isOpen}>
                    <DialogTitle>Please, scan QR Code in your Authentication app</DialogTitle>
                    <div className={classes.dialogContainer}>
                        <img src={registerData?.qrCode} alt="Auth QR Code" />
                        <Button onClick={goToSignIn} variant="contained">Sign in</Button>
                    </div>
                </Dialog>
            </Stack>
        </form>
    )
}

export default SignUpForm
