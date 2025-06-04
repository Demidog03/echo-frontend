import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { ProfileState } from './profile.store.types'

export const useProfileStore = create<ProfileState>()(
    devtools(
        immer(
            () => ({

            }),
        )
    )
)
