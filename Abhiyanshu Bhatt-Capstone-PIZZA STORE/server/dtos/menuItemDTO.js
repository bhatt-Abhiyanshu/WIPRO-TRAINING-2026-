class MenuItemDTO {
  constructor(item) {
    this.id = item._id;
    this.name = item.name;
    this.price = item.price;
    this.description = item.description;
    this.imageUrl = item.imageUrl;

    this.category = item.category?._id || item.category; 
    this.categoryName = item.category?.name;             

    this.isAvailable = item.isAvailable;
    this.createdAt = item.createdAt;
  }
}

module.exports = MenuItemDTO;
