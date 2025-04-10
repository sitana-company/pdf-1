# pdf-1

Example of PDF file generation using the Netuno Platform.

Tutorial video in portuguese:

<a href="http://www.youtube.com/watch?v=OyUzHr9hi0c" target="_blank" title="Geração de PDFs no Backend JS - API REST - Parte 1">
 <img src="http://img.youtube.com/vi/OyUzHr9hi0c/mqdefault.jpg" alt="Tutorial Video" width="240" height="135" />
</a>

Here is the main code file:

- [server/core/pdf/builder.js](server/core/pdf/builder.js)

Here are the services source codes::

- [server/services/pdf/get.js](server/services/pdf/get.js)
- [server/services/pdf/app/get.js](server/services/pdf/app/get.js)
- [server/services/pdf/storage/server/get.js](server/services/pdf/storage/server/get.js)

## Automatic Application Install

```
./netuno app github=sitana-company/pdf-1
```

### Running

Start the Netuno Server:

```
./netuno server app=pdf_1
```

## From Scratch

Clone this project inside this folder:

- `(Netuno Root directory)/apps/pdf_1/`

### Configuration

You'll need to copy the sample configuration, for example:

- `cp config/sample.json config/_development.json`

Modify it as you need to match your environment.

### Running

In the Netuno root directory run:

```
./netuno server app=pdf_1
```
