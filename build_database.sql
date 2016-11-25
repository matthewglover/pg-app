BEGIN;

DROP TABLE IF EXISTS pups cascade;

CREATE TABLE pups (
  id              SERIAL          PRIMARY KEY     NOT NULL,
  name            VARCHAR(100)    NOT NULL,
  speciality      VARCHAR(100)    NOT NULL,
  canFly          BOOLEAN         NOT NULL        DEFAULT     FALSE
);

INSERT INTO pups (name, speciality) VALUES ('Rocky', 'Recycling');
INSERT INTO pups (name, speciality) VALUES ('Zuma', 'Watersports');
INSERT INTO pups (name, speciality) VALUES ('Chase', 'Policing');
INSERT INTO pups (name, speciality, canFly) VALUES ('Sky', 'Flying', true);


COMMIT;
