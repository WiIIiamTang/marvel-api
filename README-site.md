# marvel-machine-sim-api

***__If you've reached this page, you've either hit an incorrect link or you're at the home page.__***

# Reference

## Base URL
``https://marvel-api-ten.vercel.app/api/``

All static files are at ``https://marvel-api-ten.vercel.app/static/`` (See [Accessing-static-files](#accessing-static-files)).

## Endpoints

### Items
Represents an item.

| attribute | type   | description                      |
|-----------|--------|----------------------------------|
| name      | String | The name of the item             |
| Category  | String | The category the item belongs to |
| Rate      | Number | The item's rate in percent       |
| path      | String | The path to the image file       |
| wheel     | String | The wheel the item is belongs to |
| item_id   | Number | A unique identifier for the item |


- GET ``/items/`` : Gets all items
- GET ``/items/:id(\d+)``: Gets the item with the specified **id** param. An empty array is returned if no item is found. The id must be a number.
- GET ``/items/mid``: Gets all items from the mid wheel.
- GET ``/items/left``: Gets all items from the left wheel.
- GET ``/items/right``: Gets all items from the right wheel.
- GET ``/items/category/:cat``: Gets all items with the specified **cat** param. An empty array is returned if no item is found.
- GET ``/items/rate/:min-:max``: Gets all items within the specified range of rates given by [**min**, **max**]. An empty array is returned if no item is found.


### Categories
Gives information on the categories available on a wheel.

| attribute | type   | description                      |
|-----------|--------|----------------------------------|
| wheel     | String | The wheel                        |
| **Category** | Number | The rate for **Category** within that wheel |

Current **Categories**: Android, Equipment, Familiar, Scroll, Use, Cosmetic, Maple_Points, Chair, Storage, Soul

- GET ``/categories/``: Gets all wheels(mid, left, right) and their associated categories

### Double (Marvel)
Gives information on the rates for double marvel on each wheel.

| attribute | type   | description                      |
|-----------|--------|----------------------------------|
| wheel     | String | The wheel                        |
| Rate | Number | The rate for double marvel in that wheel |

- GET ``/double/``: Gets all wheels(mid, left, right) and their associated rates

## Accessing static files
If an item has a path of ``"static/img/2021/Anniversary-Royal-Hair-Coupon.png"``, for example, the image file can be accessed at ``https://marvel-api-ten.vercel.app/static/img/2021/Anniversary-Royal-Hair-Coupon.png``.
