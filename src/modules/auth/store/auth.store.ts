import { create } from 'zustand'
import { AuthState } from './auth.store.types'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useAuthStore = create<AuthState>()(
    devtools(
        immer(
            persist(
                (set) => ({
                    token: undefined,
                    setToken: (newToken) => {
                        set(state => { state.token = newToken })
                    },
                    clearToken: () => {
                        set(state => { state.token = undefined })
                    }
                }),
                {
                    name: 'accessToken',
                    storage: createJSONStorage(() => localStorage),
                    partialize: (state) => ({
                        token: state.token,
                    }),
                }
            )
        )
    )
)