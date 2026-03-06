import Joi from "joi";


export const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ\\s]{1,20}$'))
        .messages({'string.pattern.base': 'Назва бренду має містити від 1 до 20 літер (латиниця або кирилиця).'}),
    price: Joi.number().min(0).max(1000000).messages({
        'number.min': 'Ціна не може бути меншою за 0.',
        'number.max': 'Ціна не може перевищувати 1 000 000.'
    }),
    year: Joi.number().min(1990).max(2026).messages({
        'number.min': 'Рік не може бути меншою за 1990.',
        'number.max': 'Рік не може перевищувати 2026.'
    }),
})