import { SpendingSchema } from "../schemas/spending.schema.js";
import { Spending } from "../protocols/Spending.js";

function validationNewSpending(obj: Spending){
    const { error } = SpendingSchema.validate(obj);
    if(error) {
        return error;
    }
    return false;
}

export{
    validationNewSpending,
}