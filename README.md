## Integrated Modelling Partnership - Keycloak theme

We expect [Docker](https://docs.docker.com/engine/install/) and [docker compose](https://docs.docker.com/compose/) to be available with a keycloak:

## Usage

```
docker compose up
```

The _Admin console_ http://localhost:8078/admin/

* User: `admin`
* Password: `admin`

## Theme development documentation

* https://www.keycloak.org/docs/latest/server_development/#_themes

### Theme templates

* Terms and conditions - `themes/im/login/terms.ftl` - See:
  [terms.ftl](https://github.com/keycloak/keycloak/blob/19.0.3/themes/src/main/resources/theme/base/login/terms.ftl).
  The `termsText` property comes from properties file. [messages_en.properties](https://github.com/keycloak/keycloak/blob/1641fbb0abf316e3c7d431980632ba37f81056d3/themes/src/main/resources/theme/base/login/messages/messages_en.properties#L68-L70)


### Overriding the built-in templates

* While creating custom themes, especially when overriding templates, it may be useful to use the built-in templates as
  a reference. These can be found within the theme directory of `../lib/lib/main/org.keycloak.keycloak-themes-24.0.3.jar`, which can be opened using any
  standard ZIP archive tool.

### Stylus css

To use stylus:

```
$ npm install stylus -g
```

To convert stylus file to css:

  ```
  stylus -w file.styl
  ```


