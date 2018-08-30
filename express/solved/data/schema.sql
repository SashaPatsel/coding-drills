CREATE database restaurantsDB;

USE restaurantsDB;

CREATE TABLE restaurants (
  restaurant_id INT(11) AUTO_INCREMENT NOT NULL,
  restaurant_name VARCHAR (100),
  restaurant_link VARCHAR (100),
  restaurant_img VARCHAR (100),
  restaurant_genre VARCHAR (100),
  rating INT (100),
  PRIMARY KEY (restaurant_id)
);

INSERT INTO restaurants (restaurant_name, restaurant_link, restaurant_img, restaurant_genre, rating) VALUES ("La Cumbre", "http://www.taquerialacumbre.com/", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Lacumbre_interior.jpg/220px-Lacumbre_interior.jpg", "Mexican", 0), ("Big Fish Little Fish", "http://bigfishlittlefishpoke.com/", "https://cdn.vox-cdn.com/uploads/chorus_image/image/50028979/olapokeaustinyelp.0.jpg", "Japanese", 0), ("Amawele's South African Kitchen", "http://www.amawelessouthafricankitchen.com/", "http://paleolocal.com/wp-content/uploads/2014/02/amawele.png", "South African", 0)

