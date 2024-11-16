from fastapi import FastAPI, Query
from typing import List, Optional
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request

app = FastAPI()

# In-memory product data
products = [
    {"id": 1, "name": "Smartphone", "description": "High-end smartphone", "price": 699, "category": "electronics"},
    {"id": 2, "name": "Laptop", "description": "Powerful laptop for work", "price": 1299, "category": "electronics"},
    {"id": 3, "name": "T-Shirt", "description": "Cotton T-shirt", "price": 25, "category": "clothing"},
    {"id": 4, "name": "Jeans", "description": "Denim jeans", "price": 50, "category": "clothing"},
    {"id": 5, "name": "Coffee Maker", "description": "Automatic coffee maker", "price": 99, "category": "home"},
]
# static files (CSS or JS)
app.mount("/static", StaticFiles(directory="static"), name="static")

# templates (HTML file)
templates = Jinja2Templates(directory="templates")

@app.get("/products", response_model=List[dict])
async def get_products(category: Optional[str] = Query(None)):
    if category:
        return [product for product in products if product["category"] == category]
    return products

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

