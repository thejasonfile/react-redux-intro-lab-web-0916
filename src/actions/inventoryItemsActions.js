export default function addInventoryListItems(quantity, description){
  return {
    type: 'ADD_INVENTORY_LIST_ITEMS',
    quantity,
    description
  }
}