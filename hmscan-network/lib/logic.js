/**
 * Trade a product to a new player
 * @param {model.MoveMilk} moveMilk - the trade product transaction
 * @transaction
 */
async function moveMilk(moveMilk) { // eslint-disable-line no-unused-vars
    moveMilk.milk.issuer = moveMilk.milk.owner;
    moveMilk.milk.owner = moveMilk.newOwner;
    const assetRegistry = await getAssetRegistry('model.Milk');
    await assetRegistry.update(moveMilk.milk);
   }
