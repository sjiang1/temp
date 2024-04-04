from typing import Union
from pydantic import BaseModel

items = []

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None

def add_an_item(item: Item):
    items.append(item)
