// _core: pdf/builder

import { _pdf, _storage, _app, _out } from "@netuno/server-types";

const storageServerFile = _storage.filesystem("server", "file.pdf")

const pdfDocument = _pdf.newDocument(storageServerFile.output())

pdfBuilder(pdfDocument)

pdfDocument.close()

_out.json({
    pdf: {
        ready: storageServerFile
    }
})