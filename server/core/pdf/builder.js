import {_app, _pdf, _storage} from "@netuno/server-types";

const pdfBuilder = (pdfDocument) => {
    const fontExo = {
        light: _pdf.font(_app.file("storage/filesystem/server/Exo-Light.ttf"), true),
        bold: _pdf.font(_storage.filesystem("server", "Exo-Bold.ttf"), true)
    }

    pdfDocument.add(
        _pdf.paragraph("Lista de Animais:")
            .setFont(fontExo.bold)
            .setFontSize(20)
    )

    const dbAnimais = _db.form("animal").order("nome", "asc").all()

    for (const dbAnimal of dbAnimais) {
        pdfDocument.add(
            _pdf.paragraph(dbAnimal.getString("nome"))
                .setFont(fontExo.light)
                .setFontSize(15)
        )
    }

    const helvetica = _pdf.font("helvetica")
    const helveticaBold = _pdf.font("helvetica-bold")

    const table = _pdf.table(2)
        .addCell(
            _pdf.cell()
                .add(
                    _pdf.paragraph("Animal")
                        .setFont(helveticaBold)
                        .setFontSize(15)
                )
                .setBorder(_pdf.border("solid", _pdf.colorRGB(0, 0.5, 0), 2))
                .setBackgroundColor(_pdf.colorRGB(1, 1, 0))
        )
        .addCell(
            _pdf.cell()
                .add(
                    _pdf.paragraph("Quantidade")
                        .setFont(helveticaBold)
                        .setFontSize(15)
                )
                .setBorder(_pdf.border("solid", _pdf.colorRGB(0, 0.5, 0), 2))
                .setBackgroundColor(_pdf.colorRGB(1, 1, 0))
        )
    for (const dbAnimal of dbAnimais) {
        table
            .addCell(
                _pdf.cell()
                    .add(
                        _pdf.paragraph(dbAnimal.getString("nome"))
                            .setFont(helvetica)
                            .setFontSize(15)
                    )
                    .setBorder(_pdf.border("solid", 2))
                    .setBackgroundColor(_pdf.colorRGB(1, 0.75, 0.75))
            )
            .addCell(
                _pdf.cell()
                    .add(
                        _pdf.paragraph(dbAnimal.getInt("quantidade").toString())
                            .setFont(helvetica)
                            .setFontSize(15)
                    )
                    .setBackgroundColor(_pdf.colorGray(0.75))
            )
    }
    pdfDocument.add(table)

    pdfDocument.add(_pdf.areaBreak())

    pdfDocument.add(
        _pdf.image(_app.file("storage/filesystem/server/icon.png"))
            .scaleAbsolute(200, 200)
            .setFixedPosition(300, 600)
    )

    pdfDocument.add(
        _pdf.image(_storage.filesystem("server", "image.jpg"))
            .scaleAbsolute(400, 400)
            .setFixedPosition(100, 100)
    )
}
