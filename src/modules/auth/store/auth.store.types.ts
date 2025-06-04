export interface AuthState {
    token: string | undefined,
    setToken: (newToken: string) => void
    clearToken: () => void
}