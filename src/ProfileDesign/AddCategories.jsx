import React, { Component } from 'react';

import './index.css';

class AddCategories extends Component {

  constructor() {
    super();
    this.state = {
      category:'',
      categories: [],
    };
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        {this.state.categories.map((category, index) => (
          <div className="category" key={index + 1}>
            <input
              type="text"
              placeholder={`Category #${index + 1}`}
              value={category.category}
              onChange={this.handleCategoriesChange(index)}
              required
            />
            <button type="button" onClick={this.handleRemoveCategory(index)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddCategory} className="small">Add Category</button>
        <button>Upload shop categories</button><br />
      </form> 
    )
  }

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  }
  
  handleCategoriesChange = (index) => (event) => {
    const newCategories = this.state.categories.map((category, catIdx) => {
      if (index !== catIdx) return category;
      return { ...category, category: event.target.value };
    });
    
    this.setState({ categories: newCategories });
  }
  
  handleAddCategory = () => {
    this.setState({ categories: this.state.categories.concat([{ category: '' }]) });
  }
  
  handleRemoveCategory = (index) => () => {
    this.setState({ categories: this.state.categories.filter((s, catIdx) => index !== catIdx) });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { category, categories } = this.state;
    alert(`Incorporated: ${category} with ${categories.length} categories`);
  }

}

export default AddCategories;
