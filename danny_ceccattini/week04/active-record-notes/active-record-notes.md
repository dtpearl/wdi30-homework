# ACTIVE RECORD

Notes from https://guides.rubyonrails.org/active_record_basics.html

Active Record is the M in MVC which stands for Model-View-Controller, a type of architectural pattern:
- https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

ORM = Object Relational Mapping: Allows us to retrieve and restore the properties and relationships of objects without having to actually write any SQL (Structured Query Language).

#### ___Active Record is thus a type of ORM___


RDMS = Relational Database Management Systems

### Active Record As An ORM
> - Represent models and their data.
> - Represent associations between these models.
> - Represent inheritance hierarchies through related models.
> - Validate models before they get persisted to the database.
> - Perform database operations in an object-oriented fashion.

### Naming Conventions

- __Rails pluralises your class names.__
  - So if your class is to be called _books_, then your table should be called _book_
- If class names are two or more words, the class name should be in __camelCase__ while the table name should be in __snake_case__
- __Database Table = two_words__
- __Model Class = twoWords__


### Schema Conventions

- __Primary Keys:__ By default, Active Record will use an integer column names id.
- __Foreign Keys:__ Foreign keys should be in the __singular__ and in __snake_case__
- Below are some optional column names that have additional features:
  - created_at - Automatically gets set to the current date and time when the record is first created.
  - updated_at - Automatically gets set to the current date and time whenever the record is updated.
  - lock_version - Adds optimistic locking to a model.
  - type - Specifies that the model uses Single Table Inheritance.
  - (association_name)_type - Stores the type for polymorphic associations.
  - (table_name)_count - Used to cache the number of belonging objects on associations. For example, a comments_count column in an Article class that has many instances of Comment will cache the number of existent comments for each article.
__

### Creating Active Record models

- This is done by subclassing the ApplicationRecord, creating a ```Product``` model mapped to a ```Products``` table:

```ruby
class Product < ApplicationRecord
end

# table name would be Products in this case
```

- Suppose we had this SQL table:
```SQL
CREATE TABLE products (
   id int(11) NOT NULL auto_increment,
   name varchar(255),
   PRIMARY KEY  (id)
);
```

- We would add a new item to the name column like so:
```ruby
p = product.new
p.name = "Some Book"
puts p.name # "Some Book"
```

- We can also over ride the naming conventions and change the table name:
```ruby
class Product < ApplicationRecord
  self.table = "my_products"
end
```

- __HOWEVER__ if you do this, you will also have to manually define the class name that is hosting the fixtures using the ```set_fixture_class``` method:

```ruby
class ProductTest < ActiveSupport::TestCase
  set_fixture_class my_products: Product
  fixtures :my_products
end
```

- You can also override which column should host the primary key using the ```ActiveRecord::Base.primary_key=``` method:
```ruby
class Product < ApplicationRecord
  self.primary_key = "product_id"
end
```

## CRUD = __C__reate __R__ead __U__pdate __D__elete
.__

### CREATE

- Given a model of ```User``` with attributes ```name``` and ```occupation```, the ```create``` method will create and save a new record in the database:

```ruby
user = User.create(name: "David", occupation: "Software Engineer")
```

- We can use the ```new``` method to instantiate without saving it:

```ruby
user = User.new
user.name = "David"
user.occupation = "Software Engineer"
```
- To save the above you need to then call:
```user.save``` after ```user.occupation```.


### READ

- Below are various methods we can access data with Active Record:

```ruby
# Return a collection with all users:
users = User.all

# Return the first user:
user = User.first

# Return the first user named David:
David = User.find_by(name: 'David')

# Return all users whose names are David, are Software Engineers and in reverse chronological order.
users = User.where(name: 'David', occupation: 'Software Engineer').order(created_at: :desc)
```

### UPDATE

```ruby
user = User.find_by(name: "David")
user.name = "Donny"
user.save

# This is a short-handed version:
user = User.find_by(name: "David")
user.update(name: "Donny")

# If you need to update several attributes at once:
User.update_all("max_login_attempts = 3, must_change_password = 'true'")
```


### DELETE

```ruby
user = User.find_by(name: "Donny")
user.destroy

# Delete all users named Donny
users = User.where(name: "Donny").destroy_all

# DELET ALL USERS
User.destroy_all
```

## VALIDATIONS

Before writing anything to the database, you need to validate the state of the model to validate that any attribute value is not empty, is unique, not already in the database, follows a specific format and so on:

```ruby
class User < ApplicationRecord
  validates :name, presence: true
end

user = User.new
user.save # => returns 'false' if validation fails
user.save! # => returns 'ActiveRecord::RecordInvalid: Validation failed: Name can't be blank'

# The bang [save!] counterpart of save is even stricter in that they raise the excepction.xs
```
