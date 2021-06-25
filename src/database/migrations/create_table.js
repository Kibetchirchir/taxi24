import { queryBuilder } from "../queryBuilder";

queryBuilder(
  ` CREATE TABLE cars
  (
    id       SERIAL     NOT NULL,
    car_reg_no VARCHAR NULL  UNIQUE  ,
    driver_id  INT     NULL    ,
    created_at    TIMESTAMP    NOT NULL,
    updated_at    TIMESTAMP    NOT NULL,
    PRIMARY KEY (id)
  );  
  CREATE TABLE role
(
  id   SERIAL NOT NULL ,
  name  varchar   NOT NULL UNIQUE,
  created_at    TIMESTAMP    NOT NULL,
  updated_at    TIMESTAMP    NOT NULL,
  PRIMARY KEY (id)
);    
CREATE TABLE trips
(
  id        SERIAL     NOT NULL ,
  driver_id INT     NULL    ,
  rider_id  INT     NULL    ,
  from_location      VARCHAR NULL ,
  to_location        VARCHAR NULL ,
  created_at    TIMESTAMP    NOT NULL,
  updated_at    TIMESTAMP    NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users
(
  id            SERIAL         NOT NULL ,
  first_name    VARCHAR(21) NOT NULL,
  second_name   VARCHAR(21) NULL    ,
  phone_number  BIGINT      NOT NULL UNIQUE,
  email_adress  VARCHAR     NULL ,
  password      VARCHAR     NULL    ,
  geo_long_lat VARCHAR     NULL ,
  created_at    TIMESTAMP    NOT NULL,
  updated_at    TIMESTAMP    NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users_role
(
  id      SERIAL     NOT NULL ,
  user_id INT     NULL    ,
  role_id INT     NULL    ,
  status  VARCHAR NULL    ,
  PRIMARY KEY (id)
);

ALTER TABLE users_role
  ADD CONSTRAINT FK_users_TO_users_role
    FOREIGN KEY (user_id)
    REFERENCES users (id);

ALTER TABLE users_role
  ADD CONSTRAINT FK_role_TO_users_role
    FOREIGN KEY (role_id)
    REFERENCES role (id);

ALTER TABLE trips
  ADD CONSTRAINT FK_users_TO_trips
    FOREIGN KEY (driver_id)
    REFERENCES users (id);

ALTER TABLE trips
  ADD CONSTRAINT FK_users_TO_trips1
    FOREIGN KEY (rider_id)
    REFERENCES users (id);

ALTER TABLE cars
  ADD CONSTRAINT FK_users_TO_cars
    FOREIGN KEY (driver_id)
    REFERENCES users (id);
`
);
