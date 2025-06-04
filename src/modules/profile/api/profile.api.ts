import { EditProfileBody, GetProfileResponse } from "./profile.api.types";
import apiPrivate from "../../../shared/lib/api/apiPrivate";

export async function getProfileApi(): Promise<GetProfileResponse> {
    const response = await apiPrivate.get('/auth/profile')
    return response.data
}

export async function editProfileApi(body: EditProfileBody) {
    return await apiPrivate.put('/auth/profile/edit', body)
}