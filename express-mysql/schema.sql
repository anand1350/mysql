CREATE TABLE category (
    id int unsigned NOT NULL AUTO_INCRENEMT,
    name varchar (255),
    slug varchar (255),
    imgUrl varchar (200),
    productCount int unsigned DEFAULT '0',
    createdAT datetime,
    PRIMARY KEY (id),
);

CREATE TABLE product (
    id int unsigned AUTO_INCRENEMT,
    name varchar (255),
    slug varchar (255),
    imgUrl varchar (200),
    productCount int unsigned DEFAULT '0',
    createdAT datetime,
    PRIMARY KEY (id),
);