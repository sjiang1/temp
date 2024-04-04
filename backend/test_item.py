def test_add_an_item():
    from item import Item, items, add_an_item
    my_item = Item(name="test_item", price=0.01, is_offer=True)
    add_an_item(my_item)
    assert(len(items) > 0)
    assert(items[-1].name == "test_item")
