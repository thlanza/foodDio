import { Food } from '../shared/models/food'

export function responseToFood(response: any): Food {
  return {
    calories: {
      value: response.calories.value
    },
    fat: {
      value: response.fat.value
    },
    protein: {
      value:response.protein.value
    },
    carbs: {
      value: response.carbs.value
    }
}
}
