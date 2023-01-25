export type SessionEntity = {
    id: number,
    name: string,
    email: string,
    password: number,
    createdAt: number | Date,
}

export type Session = Omit<SessionEntity, "id" | "createdAt">