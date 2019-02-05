# ACTIVE RECORD ASSOCIATIONS

## Why Associations

An _association_ is a connection between two Active Record Models. This is how you would set it up

```ruby
class Author < ApplicationRecord
  has_many :books
end

class Book < ApplicationRecord
  belongs_to :author, optional => true
end
```

Now you can a new book for a given author:
```ruby
@book = @author.books.create(published_at: Time.now)
```

Deleting an author and all it's books:
```ruby
@author.destroy
```

## Types of Associations

These are the assocations that Rails supports:
```
belongs_to
has_one
has_many
has_many :through
has_one :through
has_and_belongs_to_many
```

### ```belongs_to``` Association

Sets up a one-to-one connection with another model, such that one instance of the declaring model ```belongs_to``` to one instance of the other model.

The Corresponding Migration:
```ruby
class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :authors do |t|
      t.string :name
      t.timestamps
    end

    create_table :books do |t|
      t.belongs_to :author, index: true, optional => true
      t.datetime :published_at
      t.timestamps
    end
  end # def
end # class
```

### ```has_one``` Association

This one also sets a one-to-one connection, but with different semantics and consequences.

```ruby
class Account < ApplicationRecord
  belongs_to :supplier
end

class Supplier < ApplicationRecord
  has_one :account
end
```

The Corresponding Migration:
```ruby
class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :suppliers do |t|
      t.string :name
      t.timestamps
    end

    create_table :accounts do |t|
      t.belongs_to :supplier, indexL true, optional => true
      t.string :account_number
      t.timestamps
    end
  end #def
end #class
```

### ```has_many``` Association

Indicates a one-to-many association, usually found on the other side of a ```belongs_to``` association.

```ruby
class Author :ApplicationRecord
  has_many :books
end
```

The Corresponding Migration:
```ruby
class CreateAuthors < ActiveRecord::Migration[5,0]
  def change
    create_table :authors do |t|
      t.string :name
      t.timestamps
    end

    create_table :books do |t|
      t.belongs_to :author, index: true, optional => true
      t.datetime :published_at
      t.timestamps
    end
  end #def
end #class

```

### ```has_many :through``` Association

```ruby
class Physician < ApplicationRecord
  has_many :appointments
  has_many :patients, through :appointments
end

class Appointment < ApplicationRecord
  belongs_to :Physician
  belongs_to :Patient
end

class Patient < ApplicationRecord
  has_many :appointments
  has_many :physicians, through :appointments
end
```
