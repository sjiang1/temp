def test_add_an_item():
    from item import Item, items, add_an_item
    my_item = Item(name="test_item", price=0.01, is_offer=True)
    add_an_item(my_item)
    assert(len(items) > 0)
    assert(items[-1].name == "test_item")


from fastapi.testclient import TestClient
from main import app
client = TestClient(app)

def test_add_an_item_API():
    response = client.get("/items/123")
    assert(response.status_code == 200)
    assert(response.json() == {"item_id": 123, "q": "hello"})