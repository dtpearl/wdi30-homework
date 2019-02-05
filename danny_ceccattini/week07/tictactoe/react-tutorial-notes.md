## React Component Class

Also known as a __React Component Type__, takes in parameters known as __props [properties]__, and returns a heirarchy of views to display via the render method: In the example below, ```ShoppingList``` is the react Component class, whilst the h1 ul and li are all __React Elements__:

```js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>  
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
```
