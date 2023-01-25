export type SpendingEntity = {
    id: number,
    name: string,
    price: number,
    createdAt: number | Date,
}

export type Spending = Omit<SpendingEntity, "id" | "createdAt">