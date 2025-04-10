// _core: pdf/builder

import { _pdf, _header, _app, _out } from "@netuno/server-types";

const file = _app.file("file.pdf")

const pdfDocument = _pdf.newDocument(file.output())

pdfBuilder(pdfDocument)

pdfDocument.close()

_out.json({
    pdf: {
        ready: file.path()
    }
})
