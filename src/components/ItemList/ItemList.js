import React from 'react';
import Item from '../Item/Item.js';

const ItemList = ({ todoItem }) => (<ul>
  <li> <Item todoItem={todoItem} /> </li>
  <li> <Item todoItem={'Прописать props'} /> </li>
  <li> <Item todoItem={'Сделать все дела'} /> </li>
</ul>)

export default ItemList;
