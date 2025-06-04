import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { Genders } from "../../../types";
import FullscreenLoading from "../../../shared/ui/FullscreenLoading";
import { useState } from "react";
import classes from './profile.module.scss'
import useGetProfileQuery from "../query/useGetProfileQuery";
import useEditProfileMutation from "../query/useEditProfileMutation";

const editProfileFormSchema = yup.object().shape({
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
});

interface EditProfileFormData {
    username: string
    firstName: string
    lastName: string
    age: number
    gender: Genders
    email: string
}

function EditProfileForm() {
    const { data: profile } = useGetProfileQuery()
    const { handleSubmit, register, formState: { errors, defaultValues, isValid }, reset } = useForm<EditProfileFormData>({
        defaultValues: {
            username: profile?.username || '',
            firstName: profile?.firstName || '',
            lastName: profile?.lastName || '',
            age: profile?.age || undefined,
            gender: profile?.gender || undefined,
            email: profile?.email || ''
        },
        mode: 'all',
        resolver: yupResolver(editProfileFormSchema)
    })
    const { mutate, isPending } = useEditProfileMutation()
    const [isEditing, setIsEditing] = useState(false)

    function submitForm(values: EditProfileFormData) {
        const { age, firstName, gender, lastName, username } = values
        mutate({ age, firstName, gender, lastName, username })
        setIsEditing(false)
    }

    function startEditing() {
        setIsEditing(true)
    }

    function stopEditing() {
        reset()
        setIsEditing(false)
    }

    return (
        <form style={{ width: '100%' }} onSubmit={handleSubmit(submitForm)}>
            <Stack className={classes.editProfileFormContainer} gap={2}>
                <TextField
                    error={Boolean(errors.username)}
                    helperText={errors.username?.message}
                    {...register('username')}
                    fullWidth
                    id="username"
                    type="text"
                    label="Username"
                    variant="outlined"
                    disabled={!isEditing}
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
                    disabled={!isEditing}
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
                    disabled={!isEditing}
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
                    disabled={!isEditing}
                    slotProps={{ htmlInput: { min: 0, max: 150 } }}
                />
                <FormControl error={Boolean(errors.gender)} fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        {...register('gender')}
                        label="Gender"
                        defaultValue={defaultValues?.gender}
                        disabled={!isEditing}
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
                    disabled
                />
                <Stack flexDirection="row" gap={1}>
                    {isEditing && <Button onClick={stopEditing} className={classes.submitBtn} disableElevation variant="outlined" color="error">Cancel</Button>}
                    {!isEditing && <Button onClick={startEditing} className={classes.submitBtn} disableElevation variant="outlined" color="warning">Edit</Button>}
                    <Button disabled={!isEditing || !isValid} type="submit" className={classes.submitBtn} disableElevation variant="contained">Submit</Button>
                </Stack>
                <FullscreenLoading open={isPending} />
            </Stack>
        </form>
    )
}

export default EditProfileForm
