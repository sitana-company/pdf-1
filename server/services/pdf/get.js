// _core: pdf/builder

import { _pdf, _header, _storage, _app } from "@netuno/server-types";

_header.contentTypePDF()

const pdfDocument = _pdf.newDocument()

pdfBuilder(pdfDocument)

pdfDocument.close()