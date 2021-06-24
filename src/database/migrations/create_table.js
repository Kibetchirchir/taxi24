import { queryBuilder } from '../queryBuilder';

queryBuilder(
  ` CREATE TABLE cars
  (
    id         INT     NOT NULL,
    car_reg_no VARCHAR NULL    ,
    driver_id  INT     NULL    ,
    created_at    TIMESTAMP    NOT NULL,
    updated_at    TIMESTAMP    NOT NULL,
    PRIMARY KEY (id)
  );  
  CREATE TABLE role
(
  id   INT NOT NULL,
  name  varchar   NOT NULL,
  created_at    TIMESTAMP    NOT NULL,
  updated_at    TIMESTAMP    NOT NULL,
  PRIMARY KEY (id)
);    
CREATE TABLE trips
(
  id        INT     NOT NULL,
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
  id            INT         NOT NULL,
  first_name    VARCHAR(21) NOT NULL,
  second_name   VARCHAR(21) NULL    ,
  phone_number  BIGINT      NOT NULL,
  email_adress  VARCHAR     NULL    ,
  password      VARCHAR     NULL    ,
  geo_long_lat VARCHAR     NULL ,
  created_at    TIMESTAMP    NOT NULL,
  updated_at    TIMESTAMP    NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users_role
(
  id      INT     NOT NULL,
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
