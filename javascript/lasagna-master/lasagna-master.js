/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer){
    if(timer === 0){
        return 'Lasagna is done.'
    }else if(Number.isFinite(timer)){
        return 'Not done, please wait.'
    }else{
        return 'You forgot to set the timer.'
    }
}

export function preparationTime(arrayOfLayers, layerPrepTime = 2){
    let numberOfLayers = arrayOfLayers.length;

    let totalPreparationTime = numberOfLayers * layerPrepTime

    return totalPreparationTime
}

export function quantities(layers){
    const NOODLES_AMOUNT = 50;
    const SAUCE_AMOUNT = 0.2;

    let noodlesOccurrence = layers.filter(layer => layer === 'noodles').length;
    let sauceOccurence = layers.filter(layer => layer === 'sauce').length;

    let noodlesResult = NOODLES_AMOUNT * noodlesOccurrence;
    let sauceResult = SAUCE_AMOUNT * sauceOccurence;

    return {noodles: noodlesResult, sauce: sauceResult}
}

export function addSecretIngredient(friendsList, myList){
   let arrayLength = friendsList.length
   let lastElement = friendsList.slice(arrayLength - 1, arrayLength).pop()

   myList.push(lastElement)

}

export function scaleRecipe(recipeObject,  portions){
    let newObject = {};

    for(let ingredient in recipeObject){
        newObject[ingredient] = recipeObject[ingredient] * (portions / 2);
    }   

    return newObject;
}
